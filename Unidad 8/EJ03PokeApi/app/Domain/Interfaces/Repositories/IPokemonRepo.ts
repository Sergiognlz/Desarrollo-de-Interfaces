import { Pokemon } from "../../Entities/Pokemon";

export interface IPokemonRepo {
  getNext20(): Promise<Pokemon[]>;
}
