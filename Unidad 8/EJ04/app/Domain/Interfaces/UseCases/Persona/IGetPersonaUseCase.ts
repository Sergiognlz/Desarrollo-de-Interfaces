import { Persona } from "../../../Entities/Persona";

export interface IGetPersonaUseCase {
  execute(): Promise<Persona[]>;
}
