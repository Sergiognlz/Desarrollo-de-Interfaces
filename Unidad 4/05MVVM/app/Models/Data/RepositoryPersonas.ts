import { Persona } from '../Entities/Persona';

export class RepositoryPersonas {
  static getPersonas(): Persona[] {
    return [
      new Persona('1', 'Carlos', 'Martínez López'),
      new Persona('2', 'Ana', 'Gómez Fernández'),
      new Persona('3', 'Luis', 'Torres Sánchez'),
      new Persona('4', 'María', 'Rodríguez Pérez'),
      new Persona('5', 'Jorge', 'López Ruiz'),
    ];
  }
}
