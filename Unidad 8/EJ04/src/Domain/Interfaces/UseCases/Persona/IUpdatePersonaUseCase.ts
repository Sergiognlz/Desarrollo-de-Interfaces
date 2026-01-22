import { Persona } from "../../../Entities/Persona";

export interface IUpdatePersonaUseCase {
  execute(persona: Persona): Promise<number>;
}
