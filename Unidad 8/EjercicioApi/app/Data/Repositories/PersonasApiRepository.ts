import { injectable } from "inversify";
import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/Interfaces/IPersonaRepository";
import { Connection } from "../DataBase/Connection";

@injectable()
export class PersonaApiRepository implements IPersonaRepository {

  private baseUrl: string;

  constructor() {
    this.baseUrl = Connection.getConnectionString();
  }

  async getListadoCompletoPersonas(): Promise<Persona[]> {
    try {
      const response = await fetch(`${this.baseUrl}/personas`);
      if (!response.ok) {
        throw new Error(`Error al obtener personas: ${response.status}`);
      }
      const data = await response.json();
      return data.map((p: any) => new Persona(p.id, p.nombre, p.apellidos));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getPersonaById(id: number): Promise<Persona | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/personas/${id}`);
      if (!response.ok) {
        throw new Error(`Error al obtener persona ${id}: ${response.status}`);
      }
      const data = await response.json();
      return new Persona(data.id, data.nombre, data.apellidos);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
