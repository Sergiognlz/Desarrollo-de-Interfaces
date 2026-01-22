// app/index.tsx
import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from '../Core/Container';
import { MensajeUsuario } from '../Domain/Entities/MensajeUsuario';

const chatVM = Container.buildChatViewModel();

const App = () => {
    const [mensajes, setMensajes] = useState<MensajeUsuario[]>([]);
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [mensaje, setMensaje] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Carga inicial de mensajes
        chatVM.cargarMensajes().then(() => setMensajes([...chatVM.mensajes]));
    }, []);

    const enviar = async () => {
        if (!nombreUsuario.trim() || !mensaje.trim()) return;

        // Enviar mensaje y recibir solo el mensaje nuevo
        const nuevoMensaje = await chatVM.enviarMensaje(nombreUsuario, mensaje);

        // Actualiza la lista de mensajes en React (sin duplicar)
        setMensajes(prev => [...prev, nuevoMensaje]);
        setMensaje('');

        // Scroll automático al final
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f2f5',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    width: '400px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>ChatClean</h1>

                <div
                    ref={scrollRef}
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px',
                        height: '250px',
                        marginBottom: '12px',
                        backgroundColor: '#fafafa',
                    }}
                >
                    {mensajes.map((m, i) => (
                        <div key={i} style={{ marginBottom: '8px' }}>
                            <b>{m.getNombreUsuario()}:</b> {m.getContenidoMensaje()}
                        </div>
                    ))}
                </div>

                <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombreUsuario}
                    onChange={e => setNombreUsuario(e.target.value)}
                    style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                    }}
                />
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && enviar()}
                    style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    onClick={enviar}
                    style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

// Renderiza solo en navegador
if (typeof window !== 'undefined') {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const root = createRoot(rootElement);
        root.render(<App />);
    }
}
