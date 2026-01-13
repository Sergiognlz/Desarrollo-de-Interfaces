import { container } from "../../../Core/Container";
import { TYPES } from "../../../Core/Types";
import { DepartamentoUIModel } from "../../Models/DepartamentoUIModel";
import { Departamento } from "../../../Domain/Entities/Departamento";

export class DepartamentoViewModel {
  private static instance: DepartamentoViewModel;

  departamentos: DepartamentoUIModel[] = [];
  departamentoSeleccionado: DepartamentoUIModel | null = null;

  private getDepartamentos = container.get<any>(TYPES.GetDepartamentoUseCase);
  private addDepartamento = container.get<any>(TYPES.AddDepartamentoUseCase);

  private constructor() {}

  static getInstance(): DepartamentoViewModel {
    if (!this.instance) {
      this.instance = new DepartamentoViewModel();
    }
    return this.instance;
  }

  async cargarDepartamentos() {
    const data = await this.getDepartamentos.execute();
    this.departamentos = data.map(DepartamentoUIModel.fromDomain);
  }

  seleccionarDepartamento(dep: DepartamentoUIModel) {
    this.departamentoSeleccionado = dep;
  }

  limpiarSeleccion() {
    this.departamentoSeleccionado = null;
  }

  async crearDepartamento(nombre: string) {
    const nuevo = new Departamento(Date.now(), nombre);
    await this.addDepartamento.execute(nuevo);
    await this.cargarDepartamentos();
  }
}
