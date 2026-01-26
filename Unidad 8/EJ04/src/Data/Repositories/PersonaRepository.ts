import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/Interfaces/Repositories/IPersonaRepository";
import { Connection } from "../DataBase/Connection";

export class PersonasRepository implements IPersonaRepository {
 
  private apiUrl = Connection.getConnectionString() + "personas/";

  async GetListadoPersonasCompleto(): Promise<Persona[]> {
    const res = await fetch(this.apiUrl);
    if (!res.ok) throw new Error("Error al obtener personas");
    const data = await res.json();

    return data.map((p: any) => new Persona(
      p.id,
      p.nombre,
      p.apellidos,
      p.telefono,
      p.direccion,
      p.foto,
      new Date(p.fechaNacimiento),
      p.idDepartamento
    ));
  }

  async GetPersonaById(id: number): Promise<Persona> {
    const res = await fetch(this.apiUrl + id);
    if (!res.ok) throw new Error("Persona no encontrada");
    const p = await res.json();

    return new Persona(
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

  async CreatePersona(persona: Persona): Promise<number> {
  // Construimos el JSON exacto que espera la API
  const body = {
    nombre: persona.nombre,
    apellidos: persona.apellidos,
    telefono: persona.telefono,
    direccion: persona.direccion,
    foto: persona.foto,
    fechaNacimiento: persona.fechaNacimiento.toISOString(), // convertir Date a string ISO
    idDepartamento: persona.idDepartamento,
  };

  const res = await fetch(this.apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("No se pudo crear la persona: " + text);
  }

  return 1;
}

async EditPersona(persona: Persona): Promise<number> {
  // Aseguramos que fechaNacimiento sea un objeto Date válido
  let fecha: string;
  if (persona.fechaNacimiento instanceof Date) {
    fecha = persona.fechaNacimiento.toISOString(); // ISO completo, compatible con ASP.NET
  } else {
    const parsed = new Date(persona.fechaNacimiento);
    if (isNaN(parsed.getTime())) {
      throw new Error("Fecha de nacimiento inválida");
    }
    fecha = parsed.toISOString();
  }

  const body = {
    id: persona.id,
    nombre: persona.nombre,
    apellidos: persona.apellidos,
    telefono: persona.telefono,
    direccion: persona.direccion,
    foto: persona.foto,
    fechaNacimiento: fecha,
    idDepartamento: persona.idDepartamento,
  };
  console.log("Persona desde repositorio", body)
  const res = await fetch(`${this.apiUrl}${persona.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("No se pudo actualizar la persona: " + text);
  }

  return 1;
} 


  async DeletePersona(id: number): Promise<number> {
    const res = await fetch(this.apiUrl + id, { method: "DELETE" });
    if (!res.ok) throw new Error("No se pudo eliminar la persona");
    return 1;
  }
}
