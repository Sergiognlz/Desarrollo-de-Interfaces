import { Departamento } from "../../Domain/Entities/Departamento";
import { IDepartamentoRepository } from "../../Domain/Interfaces/Repositories/IDepartamentoRepository";
import { Connection } from "../DataBase/Connection";

export class DepartamentosRepository implements IDepartamentoRepository {
  private apiUrl = Connection.getConnectionString() + "departamentos/";

  async GetListadoDepartamento(): Promise<Departamento[]> {
    const res = await fetch(this.apiUrl);
    if (!res.ok) throw new Error("Error al obtener departamentos");
    const data = await res.json();
    return data.map((d: any) => new Departamento(d.id, d.nombre));
  }

  async GetDepartamentoById(id: number): Promise<Departamento> {
    const res = await fetch(this.apiUrl + id);
    if (!res.ok) throw new Error("Departamento no encontrado");
    const d = await res.json();
    return new Departamento(d.id, d.nombre);
  }

  async CreateDepartamento(dep: Departamento): Promise<number> {
    const body = {
      nombre: dep.nombre
    };

    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error("No se pudo crear el departamento: " + text);
    }

    return 1;
  }

  async EditDepartamento(dep: Departamento): Promise<number> {
    const body = {
      nombre: dep.nombre
    };

    const res = await fetch(this.apiUrl + dep.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error("No se pudo actualizar el departamento: " + text);
    }

    return 1;
  }

  async DeleteDepartamento(id: number): Promise<number> {
    const res = await fetch(this.apiUrl + id, { method: "DELETE" });
    if (!res.ok) throw new Error("No se pudo eliminar el departamento");
    return 1;
  }

  async contarPersonasDept(idDepartamento: number): Promise<number> {
    const res = await fetch(`${this.apiUrl}${idDepartamento}/personas/count`);
    if (!res.ok) throw new Error("No se pudo contar personas del departamento");
    const data = await res.json();
    return data.count;
  }
}
