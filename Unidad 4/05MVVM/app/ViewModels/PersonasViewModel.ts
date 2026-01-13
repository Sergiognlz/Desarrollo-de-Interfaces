import { Persona } from "../Models/Entities/Persona";
import { RepositoryPersonas } from "../Models/Data/RepositoryPersonas";

export class PersonasViewModel {
  private _personas: Persona[] = [];
  private _personaSeleccionada: Persona | null = null;

  constructor() {
    this._personas = RepositoryPersonas.getPersonas();
  }

  get personas(): Persona[] {
    return this._personas;
  }

  get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  set personaSeleccionada(persona: Persona | null) {
    this._personaSeleccionada = persona;
  }

  seleccionarPersona(id: string): void {
    const persona = this._personas.find(p => p.id === id) || null;
    this._personaSeleccionada = persona;

    if (persona) {
      console.log(`Seleccionada: ${persona.nombre} ${persona.apellidos}`);
    }
  }
}
