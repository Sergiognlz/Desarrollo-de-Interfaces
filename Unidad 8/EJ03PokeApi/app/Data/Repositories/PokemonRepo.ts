import { IPokemonRepo } from "../../Domain/Interfaces/Repositories/IPokemonRepo";
import { Pokemon } from "../../Domain/Entities/Pokemon";
import { Connection } from "../API/Connection";

export class PokemonRepo implements IPokemonRepo {
  private offset = 0;
  private readonly limit = 20;

  constructor(private readonly connection: Connection) {}

  async getNext20(): Promise<Pokemon[]> {
    // Construimos la URL
    this.connection.ConnectionString =
      `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`;

    const data = await this.connection.get();

    // Actualizamos offset para la siguiente llamada
    this.offset += this.limit;

    return data.results.map(
      (p: any) => new Pokemon(p.name)
    );
  }
}
