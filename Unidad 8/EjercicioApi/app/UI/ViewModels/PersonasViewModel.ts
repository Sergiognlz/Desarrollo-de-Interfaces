import { makeAutoObservable } from "mobx";
import { Persona } from "../../Domain/Entities/Persona";
import { PersonasUseCases } from "../../Domain/UseCases/PersonasUseCases";

export class PersonasViewModel {
    personas: Persona[] = [];
    selectedPersona: Persona | null = null;

    private personasUseCases: PersonasUseCases;

    constructor() {
        this.personasUseCases = new PersonasUseCases();
        makeAutoObservable(this);
        this.loadPersonas();
    }

    loadPersonas() {
        this.personas = this.personasUseCases.getListadoCompletoPersonas();
    }

    selectPersona(persona: Persona) {
        this.selectedPersona = persona;
    }
}
