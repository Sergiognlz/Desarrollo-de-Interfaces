import { container } from "../../../Core/Container";
import { TYPES } from "../../../Core/Types";
import { Persona } from "../../../Domain/Entities/Persona";
import { PersonaUIModel } from "../../Models/PersonaUIModel";

export class PersonaViewModel {
  private static instance: PersonaViewModel;

  personas: PersonaUIModel[] = [];
  personaSeleccionada: PersonaUIModel | null = null;

  private callbacks: (() => void)[] = []; // suscriptores

  private getPersonasUseCase = container.get<any>(TYPES.GetPersonaUseCase);
  private addPersonaUseCase = container.get<any>(TYPES.AddPersonaUseCase);
  private updatePersonaUseCase = container.get<any>(TYPES.UpdatePersonaUseCase);
  private deletePersonaUseCase = container.get<any>(TYPES.DeletePersonaUseCase);

  private constructor() {}

  static getInstance(): PersonaViewModel {
    if (!this.instance) {
      this.instance = new PersonaViewModel();
    }
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
    try {
      const data = await this.getPersonasUseCase.execute();
      this.personas = data.map(PersonaUIModel.fromDomain);
      this.notify();
    } catch (error: any) {
      console.error("Error al cargar personas:", error);
      throw error;
    }
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
    await this.deletePersonaUseCase.execute(id);
    await this.cargarPersonas();
  }
}
