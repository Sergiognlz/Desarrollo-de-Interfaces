import { PersonaUIModel } from "@/src/UI/Models/PersonaUIModel";
import { IPersonaRepository } from "../../Interfaces/Repositories/IPersonaRepository";

export class GetPersonaUseCase {
  constructor(private repo: IPersonaRepository) {}

  async execute(): Promise<PersonaUIModel[]> {
    const personas = await this.repo.GetListadoPersonasCompleto();

    // Convertimos a UIModel
    const personasUI = personas.map(p => PersonaUIModel.fromDomain(p));

    const day = new Date().getDay();

    // Viernes (5) y sábado (6): solo mayores de 18
    if (day === 5 || day === 6) {
      return personasUI.filter(p => p.edad >= 18);
    }

    return personasUI;
  }
}
