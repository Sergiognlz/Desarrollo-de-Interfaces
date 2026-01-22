// Domain/UseCases/SendMessage.ts
import { IMensajeRepository } from '../../Core/Type';
import { MensajeUsuario } from '../Entities/MensajeUsuario';

export class SendMessage {
  private mensajeRepo: IMensajeRepository;

  constructor(mensajeRepo: IMensajeRepository) {
    this.mensajeRepo = mensajeRepo;
  }

  async execute(nombreUsuario: string, contenidoMensaje: string): Promise<MensajeUsuario> {
    const mensaje = new MensajeUsuario(nombreUsuario, contenidoMensaje);
    await this.mensajeRepo.send(mensaje);
    return mensaje;
  }
}
