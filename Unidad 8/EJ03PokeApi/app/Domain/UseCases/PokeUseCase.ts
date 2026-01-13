import { IPokeUseCase } from "../Interfaces/UseCases/IPokeUseCase";
import { IPokemonRepo } from "../Interfaces/Repositories/IPokemonRepo";
import { Pokemon } from "../Entities/Pokemon";

export class PokeUseCase implements IPokeUseCase {
  constructor(private readonly pokemonRepo: IPokemonRepo) {}

  async getNext20(): Promise<Pokemon[]> {
    return this.pokemonRepo.getNext20();
  }
}
