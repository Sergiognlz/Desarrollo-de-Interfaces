import { container } from "../../../Core/Container";
import { TYPES } from "../../../Core/Types";
import { Persona } from "../../../Domain/Entities/Persona";
import { PersonaUIModel } from "../../Models/PersonaUIModel";

export class PersonaViewModel {
  private static instance: PersonaViewModel;

  personas: PersonaUIModel[] = [];
  personaSeleccionada: PersonaUIModel | null = null;
  private callbacks: (() => void)[] = [];

  private getPersonasUseCase = container.get<any>(TYPES.GetPersonaUseCase);
  private addPersonaUseCase = container.get<any>(TYPES.AddPersonaUseCase);
  private updatePersonaUseCase = container.get<any>(TYPES.UpdatePersonaUseCase);
  private deletePersonaUseCase = container.get<any>(TYPES.DeletePersonaUseCase);

  private constructor() {}

  static getInstance(): PersonaViewModel {
    if (!this.instance) this.instance = new PersonaViewModel();
    return this.instance;
  }

  onChange(callback: () => void) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };
  }

  private notify() {
    this.callbacks.forEach(cb => cb());
  }

  async cargarPersonas() {
    const data = await this.getPersonasUseCase.execute();
    this.personas = data.map(PersonaUIModel.fromDomain);
    this.notify();
  }

  seleccionarPersona(p: PersonaUIModel) {
    this.personaSeleccionada = p;
  }

  limpiarSeleccion() {
    this.personaSeleccionada = null;
  }

  async crearPersona(persona: Persona) {
    await this.addPersonaUseCase.execute(persona);
    await this.cargarPersonas();
  }

  async actualizarPersona(persona: Persona) {
    await this.updatePersonaUseCase.execute(persona);
    await this.cargarPersonas();
  }

  async eliminarPersona(id: number) {
    try {
      // Ejecuta UseCase, que puede lanzar error si es domingo
      await this.deletePersonaUseCase.execute(id);
      // Actualiza el array local para refrescar FlatList
      this.personas = this.personas.filter(p => p.id !== id);
      this.notify();
    } catch (error) {
      // Propaga el error para mostrar en la vista
      throw error;
    }
  }
}
