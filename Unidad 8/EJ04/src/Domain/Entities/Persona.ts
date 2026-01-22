export class Persona {
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
}
