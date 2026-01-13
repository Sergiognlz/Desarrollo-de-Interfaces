import { Connection } from "../Data/API/Connection";
import { PokemonRepo } from "../Data/Repositories/PokemonRepo";
import { PokeUseCase } from "../Domain/UseCases/PokeUseCase";
import { ViewModel } from "../Presenter/ViewModels/ViewModel";

const connection = new Connection();
const pokemonRepo = new PokemonRepo(connection);
const pokeUseCase = new PokeUseCase(pokemonRepo);

export const pokemonViewModel = new ViewModel(pokeUseCase);
