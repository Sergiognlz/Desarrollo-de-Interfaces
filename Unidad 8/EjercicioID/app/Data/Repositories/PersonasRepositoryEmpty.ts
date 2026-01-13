import { injectable } from "inversify";
import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/Interfaces/IPersonaRepository";

@injectable()
export class PersonaRepositoryEmpty implements IPersonaRepository {

  private personas: Persona[] = [];

  getListadoCompletoPersonas(): Persona[] {
    return this.personas;
  }

  getPersonaById(id: number): Persona | undefined {
    return undefined; // Siempre devuelve undefined porque no hay datos
  }
}
