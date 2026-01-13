import { IPokeUseCase } from "../../Domain/Interfaces/UseCases/IPokeUseCase";
import { Pokemon } from "../../Domain/Entities/Pokemon";

export class ViewModel {
  constructor(private readonly pokeUseCase: IPokeUseCase) {}

  async getNext20(): Promise<Pokemon[]> {
    return this.pokeUseCase.getNext20();
  }
}
