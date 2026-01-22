import { Departamento } from "../../Domain/Entities/Departamento";
import { IDepartamentoRepository } from "../../Domain/Interfaces/Repositories/IDepartamentoRepository";
import { Connection } from "../DataBase/Connection";

export class DepartamentosRepository implements IDepartamentoRepository {
  private apiUrl = Connection.getConnectionString() + "departamentos/";

  // Obtener listado completo de departamentos
  async GetListadoDepartamento(): Promise<Departamento[]> {
    const res = await fetch(this.apiUrl);
    if (!res.ok) throw new Error("Error al obtener departamentos");
    const data = await res.json();
    return data.map((d: any) => new Departamento(d.id, d.nombre));
  }

  // Obtener un departamento por su ID
  async GetDepartamentoById(id: number): Promise<Departamento> {
    const res = await fetch(this.apiUrl + id);
    if (!res.ok) throw new Error("Departamento no encontrado");
    const d = await res.json();
    return new Departamento(d.id, d.nombre);
  }

  // Crear un nuevo departamento
  async CreateDepartamento(dep: Departamento): Promise<number> {
    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dep),
    });
    if (!res.ok) throw new Error("No se pudo crear el departamento");
    return 1;
  }

  // Editar un departamento existente
  async EditDepartamento(dep: Departamento): Promise<number> {
    const res = await fetch(this.apiUrl + dep.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dep),
    });
    if (!res.ok) throw new Error("No se pudo actualizar el departamento");
    return 1;
  }

  // Eliminar un departamento por ID
  async DeleteDepartamento(id: number): Promise<number> {
    const res = await fetch(this.apiUrl + id, { method: "DELETE" });
    if (!res.ok) throw new Error("No se pudo eliminar el departamento");
    return 1;
  }

  // Contar cuántas personas pertenecen a un departamento
  async contarPersonasDept(idDepartamento: number): Promise<number> {
    const res = await fetch(`${this.apiUrl}${idDepartamento}/personas/count`);
    if (!res.ok) throw new Error("No se pudo contar personas del departamento");
    const data = await res.json();
    return data.count;
  }
}
