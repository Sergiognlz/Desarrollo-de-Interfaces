import { Container } from "inversify";
import { PersonaRepository100 } from "../Data/Repositories/PersonasRepository100";
import { IPersonaRepository } from "../Domain/Interfaces/IPersonaRepository";
import { TYPES } from "./Types";

const container = new Container();

container.bind<IPersonaRepository>(TYPES.IPersonaRepository)
    .to(PersonaRepository100)
    .inSingletonScope();

export { container };

