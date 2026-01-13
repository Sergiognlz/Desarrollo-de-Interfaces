import { IDepartamentoRepository } from "../../Interfaces/Repositories/IDepartamentoRepository";
import { Departamento } from "../../Entities/Departamento";

export class AddDepartamentoUseCase {
  constructor(private repo: IDepartamentoRepository) {}

  async execute(departamento: Departamento): Promise<number> {
    return await this.repo.CreateDepartamento(departamento);
  }
}
