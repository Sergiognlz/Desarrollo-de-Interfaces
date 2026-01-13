import { Pokemon } from "../../Entities/Pokemon";

export interface IPokeUseCase {
  getNext20(): Promise<Pokemon[]>;
}
