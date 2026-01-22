import { Departamento } from "../../Domain/Entities/Departamento";

export class DepartamentoUIModel {
  constructor(
    public id: number,
    public nombre: string
  ) {}

  static fromDomain(d: Departamento): DepartamentoUIModel {
    return new DepartamentoUIModel(d.id, d.nombre);
  }
}
