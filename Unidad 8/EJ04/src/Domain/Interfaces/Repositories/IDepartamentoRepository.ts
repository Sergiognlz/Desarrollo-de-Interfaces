import { Departamento } from "../../Entities/Departamento";

export interface IDepartamentoRepository {
  // Obtener listado completo de departamentos
  GetListadoDepartamento(): Promise<Departamento[]>;

  // Obtener un departamento por su ID
  GetDepartamentoById(id: number): Promise<Departamento>;

  // Crear un nuevo departamento
  CreateDepartamento(departamento: Departamento): Promise<number>;

  // Editar un departamento existente
  EditDepartamento(departamento: Departamento): Promise<number>;

  // Eliminar un departamento por ID
  DeleteDepartamento(id: number): Promise<number>;

  // Contar cuántas personas pertenecen a un departamento
  contarPersonasDept(idDepartamento: number): Promise<number>;
}
