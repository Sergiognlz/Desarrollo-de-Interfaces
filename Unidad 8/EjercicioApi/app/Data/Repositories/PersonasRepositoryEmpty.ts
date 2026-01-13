import { injectable } from "inversify";
import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/Interfaces/IPersonaRepository";

@injectable()
export class PersonaRepositoryEmpty implements IPersonaRepository {

  private personas: Persona[] = [];

  async getListadoCompletoPersonas(): Promise<Persona[]> {
    // Devuelve un arreglo vacío de manera asincrónica
    return Promise.resolve(this.personas);
  }

  async getPersonaById(id: number): Promise<Persona | undefined> {
    // Siempre devuelve undefined
    return Promise.resolve(undefined);
  }
}
