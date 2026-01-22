import { container } from "../../../Core/Container";
import { TYPES } from "../../../Core/Types";
import { Departamento } from "../../../Domain/Entities/Departamento";
import { DepartamentoUIModel } from "../../Models/DepartamentoUIModel";

export class DepartamentoViewModel {
  private static instance: DepartamentoViewModel;

  departamentos: DepartamentoUIModel[] = [];
  departamentoSeleccionado: DepartamentoUIModel | null = null;

  private callbacks: (() => void)[] = [];

  // UseCases disponibles
  private getDepartamentosUseCase = container.get<any>(TYPES.GetDepartamentoUseCase);
  private addDepartamentoUseCase = container.get<any>(TYPES.AddDepartamentoUseCase);

  private constructor() {}

  static getInstance(): DepartamentoViewModel {
    if (!this.instance) {
      this.instance = new DepartamentoViewModel();
    }
    return this.instance;
  }

  // Suscripción a cambios
  onChange(callback: () => void) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };
  }

  private notify() {
    this.callbacks.forEach(cb => cb());
  }

  // Cargar listado de departamentos
  async cargarDepartamentos() {
    try {
      const data = await this.getDepartamentosUseCase.execute();
      this.departamentos = data.map(DepartamentoUIModel.fromDomain);
      this.notify();
    } catch (error) {
      console.error("Error cargando departamentos:", error);
      this.departamentos = [];
      this.notify();
    }
  }

  // Seleccionar para editar
  seleccionarDepartamento(dep: DepartamentoUIModel) {
    this.departamentoSeleccionado = dep;
  }

  // Limpiar selección (para crear)
  limpiarSeleccion() {
    this.departamentoSeleccionado = null;
  }

  // Crear nuevo departamento
  async crearDepartamento(nombre: string) {
    const nuevo = new Departamento(Date.now(), nombre);
    await this.addDepartamentoUseCase.execute(nuevo);
    await this.cargarDepartamentos(); // refresca listado
  }

  // Métodos opcionales si quieres añadir editar y eliminar usando el repositorio directamente
  async actualizarDepartamento(dep: Departamento) {
    console.warn("Actualizar Departamento: UseCase no implementado, aún no se puede editar");
  }

  async eliminarDepartamento(id: number) {
    console.warn("Eliminar Departamento: UseCase no implementado, aún no se puede eliminar");
  }
}
