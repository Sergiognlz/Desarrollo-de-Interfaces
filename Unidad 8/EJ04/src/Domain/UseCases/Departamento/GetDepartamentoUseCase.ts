import { IDepartamentoRepository } from "../../Interfaces/Repositories/IDepartamentoRepository";
import { Departamento } from "../../Entities/Departamento";

export class GetDepartamentoUseCase {
  constructor(private repo: IDepartamentoRepository) {}

  async execute(): Promise<Departamento[]> {
    return await this.repo.GetListadoDepartamento();
  }
}
