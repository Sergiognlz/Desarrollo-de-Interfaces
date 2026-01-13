import { IPersonaRepository } from "../../Domain/Interfaces/Repositories/IPersonaRepository";
import { Persona } from "../../Domain/Entities/Persona";

export class PersonasRepository implements IPersonaRepository {
  private personas: Persona[] = [];

  async GetListadoPersonasCompleto(): Promise<Persona[]> {
    return this.personas;
  }

  async GetPersonaById(id: number): Promise<Persona> {
    return this.personas.find(p => p.id === id)!;
  }

  async CreatePersona(persona: Persona): Promise<number> {
    this.personas.push(persona);
    return 1;
  }

  async EditPersona(persona: Persona): Promise<number> {
    const index = this.personas.findIndex(p => p.id === persona.id);
    this.personas[index] = persona;
    return 1;
  }

  async DeletePersona(id: number): Promise<number> {
    this.personas = this.personas.filter(p => p.id !== id);
    return 1;
  }
}
