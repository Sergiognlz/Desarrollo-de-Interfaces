import { Persona } from "../Entities/Persona";

export interface IPersonaRepository {
  /**
   * Devuelve la lista completa de personas.
   */
  getListadoCompletoPersonas(): Persona[];

  /**
   * Devuelve una persona por su ID, o undefined si no existe.
   * @param id ID de la persona
   */
  getPersonaById(id: number): Persona | undefined;
}
