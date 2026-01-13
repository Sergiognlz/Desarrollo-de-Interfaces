import { injectable } from "inversify";
import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/Interfaces/IPersonaRepository";

@injectable()
export class PersonaRepository implements IPersonaRepository {

  private personas: Persona[] = [
      new Persona(1, 'Fernando', 'Galiana Fernández'),
      new Persona(2, 'Carlos', 'Martínez López'),
      new Persona(3, 'Ana', 'Rodríguez Pérez'),
      new Persona(4, 'Miguel', 'Sánchez Ruiz'),
      new Persona(5, 'Laura', 'Torres Díaz'),
      new Persona(6, 'David', 'Moreno García'),
  ];

  getListadoCompletoPersonas(): Persona[] {
    return this.personas;
  }

  getPersonaById(id: number): Persona | undefined {
    return this.personas.find(p => p.id === id);
  }
}
