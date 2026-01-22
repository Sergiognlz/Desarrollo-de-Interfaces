import { Departamento } from "../../../Entities/Departamento";

export interface IAddDepartamentoUseCase {
  execute(departamento: Departamento): Promise<number>;
}
