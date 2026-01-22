import { Persona } from "../../../Entities/Persona";

export interface IAddPersonaUseCase {
  execute(persona: Persona): Promise<number>;
}
