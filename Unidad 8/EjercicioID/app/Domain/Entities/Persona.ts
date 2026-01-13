export class Persona {
  readonly id: number;
  readonly nombre: string;
  readonly apellidos: string;

  constructor(id: number, nombre: string, apellidos: string) {
    if (!id) throw new Error("El id es obligatorio");
    if (!nombre.trim()) throw new Error("El nombre no puede estar vacío");
    if (!apellidos.trim()) throw new Error("Los apellidos no pueden estar vacíos");

    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellidos}`;
  }
}
