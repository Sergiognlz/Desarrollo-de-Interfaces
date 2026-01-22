import { Persona } from "../../Domain/Entities/Persona";

export class PersonaUIModel {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public telefono: string,
    public direccion: string,
    public foto: string,
    public fechaNacimiento: Date,
    public idDepartamento: number
  ) {}

  // Conversión desde la entidad
  static fromDomain(p: Persona): PersonaUIModel {
    return new PersonaUIModel(
      p.id,
      p.nombre,
      p.apellidos,
      p.telefono,
      p.direccion,
      p.foto,
      new Date(p.fechaNacimiento),
      p.idDepartamento
    );
  }

  // Edad calculada
  get edad(): number {
    const diff = Date.now() - this.fechaNacimiento.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  }

  // Nombre completo calculado
  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }
}
