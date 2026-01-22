// Presenter/ViewModels/ChatViewModel.ts
import { SendMessage } from '../../Domain/UseCases/SendMessage';
import { FetchMessages } from '../../Domain/UseCases/FetchMessage';
import { MensajeUsuario } from '../../Domain/Entities/MensajeUsuario';

export class ChatViewModel {
    public mensajes: MensajeUsuario[] = [];

    constructor(
        private sendMessageUC: SendMessage,
        private fetchMessagesUC: FetchMessages
    ) {}

    async enviarMensaje(nombreUsuario: string, contenidoMensaje: string): Promise<MensajeUsuario> {
        // Solo ejecuta el caso de uso
        const mensaje = await this.sendMessageUC.execute(nombreUsuario, contenidoMensaje);
        // NO hacer push aquí
        return mensaje;
    }

    async cargarMensajes(): Promise<void> {
        this.mensajes = await this.fetchMessagesUC.execute();
    }
}
