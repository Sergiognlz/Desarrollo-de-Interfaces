import { Persona } from "../../Entities/Persona";
import { IPersonaRepository } from "../../Interfaces/Repositories/IPersonaRepository";

export class GetPersonaUseCase {
  constructor(private repo: IPersonaRepository) {}

  async execute(): Promise<Persona[]> {
    const personas = await this.repo.GetListadoPersonasCompleto();
    const day = new Date().getDay();

    // Viernes (5) y sábado (6)
    if (day === 5 || day === 6) {
      return personas.filter(p => p.edad >= 18);
    }

    return personas;
  }
}
