import { IPersonaRepository } from "../../Interfaces/Repositories/IPersonaRepository";
import { Persona } from "../../Entities/Persona";

export class AddPersonaUseCase {
  constructor(private personaRepo: IPersonaRepository) {}

  /**
   * Añade una persona
   * @param persona Persona a añadir
   * @returns Promise<number> -> 1 si se ha añadido correctamente
   */
  async execute(persona: Persona): Promise<number> {
    // Aquí podrías aplicar reglas de negocio adicionales
    // Por ejemplo: validar campos, evitar duplicados, etc.

    if (!persona.nombre || !persona.apellido) {
      throw new Error("El nombre y apellido son obligatorios");
    }

    return await this.personaRepo.CreatePersona(persona);
  }
}
