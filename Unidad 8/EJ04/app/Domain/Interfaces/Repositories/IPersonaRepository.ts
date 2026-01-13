import { Persona } from "../../Entities/Persona";

export interface IPersonaRepository {
  GetListadoPersonasCompleto(): Promise<Persona[]>;
  GetPersonaById(id: number): Promise<Persona>;
  CreatePersona(persona: Persona): Promise<number>;
  EditPersona(persona: Persona): Promise<number>;
  DeletePersona(id: number): Promise<number>;
}
