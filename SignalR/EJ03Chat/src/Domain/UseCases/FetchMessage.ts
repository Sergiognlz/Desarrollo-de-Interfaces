// Domain/UseCases/FetchMessages.ts
import { IMensajeRepository } from '../../Core/Type';
import { MensajeUsuario } from '../Entities/MensajeUsuario';

export class FetchMessages {
    constructor(private mensajeRepo: IMensajeRepository) {}

    async execute(): Promise<MensajeUsuario[]> {
        return this.mensajeRepo.fetch();
    }
}
