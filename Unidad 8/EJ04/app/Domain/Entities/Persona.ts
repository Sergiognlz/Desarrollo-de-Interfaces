export class Persona {
  constructor(
    public readonly id: number,
    public nombre: string,
    public apellido: string,
    public fechaNacimiento: Date,
    public direccion: string,
    public telefono: string
  ) {}

  get edad(): number {
    const diff = Date.now() - this.fechaNacimiento.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  }
}
