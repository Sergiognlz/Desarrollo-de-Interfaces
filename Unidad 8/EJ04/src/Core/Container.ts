import { DepartamentosRepository } from "../Data/Repositories/DepartamentoRepository";
import { PersonasRepository } from "../Data/Repositories/PersonaRepository";
import { TYPES } from "./Types";

import { AddPersonaUseCase } from "../Domain/UseCases/Persona/AddPersonaUseCase";
import { DeletePersonaUseCase } from "../Domain/UseCases/Persona/DeletePersonaUseCase";
import { GetPersonaUseCase } from "../Domain/UseCases/Persona/GetPersonaUseCase";
import { UpdatePersonaUseCase } from "../Domain/UseCases/Persona/UpdatePersonaUseCase";

import { AddDepartamentoUseCase } from "../Domain/UseCases/Departamento/AddDepartamentoUseCase";
import { GetDepartamentoUseCase } from "../Domain/UseCases/Departamento/GetDepartamentoUseCase";

class Container {
  private instances = new Map<symbol, any>();

  constructor() {
    // Repositories
    this.instances.set(TYPES.IPersonaRepository, new PersonasRepository());
    this.instances.set(TYPES.IDepartamentoRepository, new DepartamentosRepository());

    // UseCases Persona
    this.instances.set(
      TYPES.GetPersonaUseCase,
      new GetPersonaUseCase(this.get(TYPES.IPersonaRepository))
    );
    this.instances.set(
      TYPES.AddPersonaUseCase,
      new AddPersonaUseCase(this.get(TYPES.IPersonaRepository))
    );
    this.instances.set(
      TYPES.UpdatePersonaUseCase,
      new UpdatePersonaUseCase(this.get(TYPES.IPersonaRepository))
    );
    this.instances.set(
      TYPES.DeletePersonaUseCase,
      new DeletePersonaUseCase(this.get(TYPES.IPersonaRepository))
    );

    // UseCases Departamento
    this.instances.set(
      TYPES.GetDepartamentoUseCase,
      new GetDepartamentoUseCase(this.get(TYPES.IDepartamentoRepository))
    );
    this.instances.set(
      TYPES.AddDepartamentoUseCase,
      new AddDepartamentoUseCase(this.get(TYPES.IDepartamentoRepository))
    );
  }

  get<T>(type: symbol): T {
    const instance = this.instances.get(type);
    if (!instance) {
      throw new Error(`No instance found for type ${type.toString()}`);
    }
    return instance;
  }
}

export const container = new Container();
