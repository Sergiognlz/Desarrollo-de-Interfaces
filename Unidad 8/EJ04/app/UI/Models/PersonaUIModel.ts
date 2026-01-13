import { Persona } from "../../Domain/Entities/Persona";

export class PersonaUIModel {
  constructor(
    public id: number,
    public nombreCompleto: string,
    public edad: number
  ) {}

  static fromDomain(p: Persona): PersonaUIModel {
    return new PersonaUIModel(
      p.id,
      `${p.nombre} ${p.apellido}`,
      p.edad
    );
  }
}
