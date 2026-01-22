// Data/Services/Connection.ts
import { IMensajeRepository } from '../../Core/Type';
import { MensajeUsuario } from '../../Domain/Entities/MensajeUsuario';

export class Connection implements IMensajeRepository {
    private mensajes: MensajeUsuario[] = [];

    // Simula enviar mensaje a Azure
    async send(mensaje: MensajeUsuario): Promise<void> {
        console.log(`Enviando mensaje: ${mensaje.getContenidoMensaje()} de ${mensaje.getNombreUsuario()}`);
        this.mensajes.push(mensaje);
        // Aquí pondrías la lógica real de Azure (HTTP o WebSocket)
    }

    // Simula obtener mensajes de Azure
    async fetch(): Promise<MensajeUsuario[]> {
        // Aquí pondrías la lógica real de Azure
        return this.mensajes;
    }
}
