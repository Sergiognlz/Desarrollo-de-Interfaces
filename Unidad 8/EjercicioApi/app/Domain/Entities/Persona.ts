export class Persona {
  readonly id: number;
  nombre: string;
  apellidos: string;
  telefono?: string;
  direccion?: string;
  foto?: string;
  readonly fechaNacimiento?: Date;
  idDepartamento?: number;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    fechaNacimiento?: Date,
    direccion?: string,
    foto?: string,
    telefono?: string,
    idDepartamento?: number
  ) {
    if (!id) throw new Error("El id es obligatorio");
    if (!nombre.trim()) throw new Error("El nombre no puede estar vacío");
    if (!apellidos.trim()) throw new Error("Los apellidos no pueden estar vacíos");

    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
    this.foto = foto;
    this.telefono = telefono;
    this.idDepartamento = idDepartamento;
  }

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }
}
