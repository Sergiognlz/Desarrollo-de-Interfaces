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
    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });
    if (!res.ok) throw new Error("No se pudo crear la persona");
    return 1;
  }

  async EditPersona(persona: Persona): Promise<number> {
    const res = await fetch(this.apiUrl + persona.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });
    if (!res.ok) throw new Error("No se pudo actualizar la persona");
    return 1;
  }

  async DeletePersona(id: number): Promise<number> {
    const res = await fetch(this.apiUrl + id, { method: "DELETE" });
    if (!res.ok) throw new Error("No se pudo eliminar la persona");
    return 1;
  }
}
