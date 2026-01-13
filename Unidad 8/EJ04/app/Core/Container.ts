import { TYPES } from "./Types";
import { PersonasRepository } from "../Data/Repositories/PersonaRepository";
import { DepartamentosRepository } from "../Data/Repositories/DepartamentoRepository";

import { GetPersonaUseCase } from "../Domain/UseCases/Persona/GetPersonaUseCase";
import { AddPersonaUseCase } from "../Domain/UseCases/Persona/AddPersonaUseCase";
import { UpdatePersonaUseCase } from "../Domain/UseCases/Persona/UpdatePersonaUseCase";
import { DeletePersonaUseCase } from "../Domain/UseCases/Persona/DeletePersonaUseCase";
   

class Container {
  private instances = new Map<symbol, any>();

  constructor() {
    // Repositories
    this.instances.set(
      TYPES.IPersonaRepository,
      new PersonasRepository()
    );

    this.instances.set(
      TYPES.IDepartamentoRepository,
      new DepartamentosRepository()
    );

    // UseCases
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
  }

  get<T>(type: symbol): T {
    return this.instances.get(type);
  }
}

export const container = new Container();
