// Core/Type.ts
import { MensajeUsuario } from '../Domain/Entities/MensajeUsuario';

export interface IMensajeRepository {
    send(mensaje: MensajeUsuario): Promise<void>;
    fetch(): Promise<MensajeUsuario[]>;
}
