import { injectable } from "inversify";
import { container } from "../../Core/Container";
import { TYPES } from "../../Core/Types";
import { Persona } from "../Entities/Persona";
import { IPersonaRepository } from "../Interfaces/IPersonaRepository";

@injectable()
export class PersonasUseCases {
    private personaRepository: IPersonaRepository;

    constructor() {
        this.personaRepository = container.get<IPersonaRepository>(TYPES.IPersonaRepository);
    }

    getListadoCompletoPersonas(): Persona[] {
        return this.personaRepository.getListadoCompletoPersonas();
    }

    getPersonaById(id: number): Persona | null {
        const persona = this.personaRepository.getPersonaById(id);
        return persona || null;
    }
}
