import { IDepartamentoRepository } from "../../Domain/Interfaces/Repositories/IDepartamentoRepository";
import { Departamento } from "../../Domain/Entities/Departamento";

export class DepartamentosRepository implements IDepartamentoRepository {
  private departamentos: Departamento[] = [];

  async GetListadoDepartamento(): Promise<Departamento[]> {
    return this.departamentos;
  }

  async GetDepartamentoById(id: number): Promise<Departamento> {
    return this.departamentos.find(d => d.id === id)!;
  }

  async CreateDepartamento(departamento: Departamento): Promise<number> {
    this.departamentos.push(departamento);
    return 1;
  }

  async EditDepartamento(departamento: Departamento): Promise<number> {
    const index = this.departamentos.findIndex(d => d.id === departamento.id);
    this.departamentos[index] = departamento;
    return 1;
  }

  async DeleteDepartamento(id: number): Promise<number> {
    this.departamentos = this.departamentos.filter(d => d.id !== id);
    return 1;
  }

  async contarPersonasDept(idDepartamento: number): Promise<number> {
    // Placeholder hasta conectar con API
    return Math.floor(Math.random() * 10);
  }
}
