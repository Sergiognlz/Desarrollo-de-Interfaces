// domain/usecases/DeletePersonaUseCase.ts
import { IPersonaRepository } from "../../Interfaces/Repositories/IPersonaRepository";


export class DeletePersonaUseCase {
  constructor(private repo: IPersonaRepository) {}

  async execute(id: number): Promise<number> {
    const day = new Date().getDay();

    if (day === 0) {
      throw new Error("No se permite eliminar personas en domingo");
    }

    return this.repo.DeletePersona(id);
  }
}

