

export class MensajeUsuario {
    private nombreUsuario: string;
    private contenidoMensaje: string;

    constructor(nombreUsuario: string, contenidoMensaje: string) {
        this.nombreUsuario = nombreUsuario;
        this.contenidoMensaje = contenidoMensaje;
    }   

    public getNombreUsuario(): string {
        return this.nombreUsuario;
    }
    public getContenidoMensaje(): string {
        return this.contenidoMensaje;
    }
}