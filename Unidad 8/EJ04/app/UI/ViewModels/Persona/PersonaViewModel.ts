import { container } from "../../../Core/Container";
import { TYPES } from "../../../Core/Types";
import { PersonaUIModel } from "../../Models/PersonaUIModel";
import { Persona } from "../../../Domain/Entities/Persona";

export class PersonaViewModel {
  private static instance: PersonaViewModel;

  personas: PersonaUIModel[] = [];
  personaSeleccionada: PersonaUIModel | null = null;

  // UseCases inyectados
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

  // Cargar listado de personas
  async cargarPersonas() {
    const data = await this.getPersonasUseCase.execute();
    this.personas = data.map(PersonaUIModel.fromDomain);
  }

  // Seleccionar persona para editar
  seleccionarPersona(p: PersonaUIModel) {
    this.personaSeleccionada = p;
  }

  // Limpiar selección (para crear nueva)
  limpiarSeleccion() {
    this.personaSeleccionada = null;
  }

  // Crear nueva persona
  async crearPersona(persona: Persona) {
    await this.addPersonaUseCase.execute(persona);
    await this.cargarPersonas(); // refresca listado
  }

  // Actualizar persona existente
  async actualizarPersona(persona: Persona) {
    await this.updatePersonaUseCase.execute(persona);
    await this.cargarPersonas(); // refresca listado
  }

  // Eliminar persona
  async eliminarPersona(id: number) {
    await this.deletePersonaUseCase.execute(id);
    await this.cargarPersonas(); // refresca listado
  }
}
