import { Persona } from "../../Entities/Persona";
import { IPersonaRepository } from "../../Interfaces/Repositories/IPersonaRepository";

export class UpdatePersonaUseCase {
  constructor(private personaRepo: IPersonaRepository) {}

  /**
   * Actualiza una persona existente
   * @param persona Persona con datos actualizados
   * @returns Promise<number> -> 1 si se ha actualizado correctamente
   */
  async execute(persona: Persona): Promise<number> {
    // Validaciones de negocio
    if (!persona.nombre || !persona.apellidos) {
      throw new Error("El nombre y apellido son obligatorios");
    }

    // Validación opcional: no permitir actualizar personas menores de 0 años
    if (persona.edad < 0) {
      throw new Error("La fecha de nacimiento es inválida");
    }

    // Llamada al repositorio
    return await this.personaRepo.EditPersona(persona);
  }
}
