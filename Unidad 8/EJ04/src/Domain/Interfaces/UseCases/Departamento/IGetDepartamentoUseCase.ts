import { Departamento } from "../../../Entities/Departamento";

export interface IGetDepartamentoUseCase {
  execute(): Promise<Departamento[]>;
}
