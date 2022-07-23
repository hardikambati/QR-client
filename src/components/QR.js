import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function QR() {
    
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if(!localStorage.getItem('userid')) {
            console.log('User ID not available in localstorage');
            return;
        }

        const user_id = localStorage.getItem('userid');
        const s_room = user_id;

        const ENDPOINT = `wss://0e0b-1-23-209-169.in.ngrok.io/qr/${s_room}/`;
        var socket = new WebSocket(ENDPOINT);

        socket.onopen = () => {
            console.log('--- Websocket opened ---');
        }

        socket.onmessage = e => {
            const data = JSON.parse(e.data);
            if(data.status === "REDIRECT") {
                navigate('/pathway');
            }
            console.log(data.status);   
        }
    
        socket.onclose = () => {
            console.log('--- Websocket closed ---');
        }

        return () => {
            if(socket.readyState === socket.OPEN) {
                socket.close();
            }
        }
    }, [navigate])
    
    return (
        <div className='container'>
            QR

            <div className='img'>
                <img src="/car-qr.png" width={400} alt="qr" />
            </div>         

            <div className="btn-container-qr">
                <button onClick={e => navigate('/pathway')} className="btn">Pathway</button>
            </div>
        </div>
    );
}