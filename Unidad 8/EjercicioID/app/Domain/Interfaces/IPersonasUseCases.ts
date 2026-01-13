import { Persona } from "../Entities/Persona";

export interface IPersonasUseCases {
    /**
     * Obtiene la lista completa de personas.
     */
    getListadoCompletoPersonas(): Persona[];

    /**
     * Obtiene una persona por su ID, o null si no existe.
     * @param id ID de la persona
     */
    getPersonaById(id: number): Persona | null;
}
