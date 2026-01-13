import { injectable } from "inversify";
import { container } from "../../Core/Container";
import { TYPES } from "../../Core/Types";
import { Persona } from "../Entities/Persona";
import { IPersonaRepository } from "../Interfaces/IPersonaRepository";

@injectable()
export class PersonasUseCases {
    private personaRepository: IPersonaRepository;

    constructor() {
        this.personaRepository = container.get<IPersonaRepository>(TYPES.IPersonaRepository);
    }

    async getListadoCompletoPersonas(): Promise<Persona[]> {
        // Llamada asincrónica al repositorio (API)
        return await this.personaRepository.getListadoCompletoPersonas();
    }

    async getPersonaById(id: number): Promise<Persona | null> {
        // Llamada asincrónica al repositorio (API)
        const persona = await this.personaRepository.getPersonaById(id);
        return persona || null;
    }
}
