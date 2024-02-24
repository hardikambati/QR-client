import { useNavigate } from 'react-router-dom';
import React from 'react';
import QRCode from 'react-qr-code';


export default function QR() {
    
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');
    
    React.useEffect(() => {
        const ENDPOINT = `ws://localhost:8001/ws/redirect/`;
        var socket = new WebSocket(ENDPOINT);

        socket.onopen = () => {
            console.log('--- Websocket opened ---');
        }

        socket.onmessage = e => {
            const data = JSON.parse(e.data);

            if (data.message !== undefined) {
                const message = data.message;
                console.log(data);
                setValue(message);
            }
            
            if (data.status !== undefined) {
                console.log(data);
                if (data.status === "redirect") {
                    navigate('/completed');
                }
            }
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
            <div id="help-text">Scan QR to auto redirect</div>

            {value === '' ?
                <div></div>
                :
                <div className='img'>
                    <QRCode
                        value={value}
                        bgColor="white"
                        fgcolor="black"
                        size={400}
                        />
                </div>
            }

        </div>
    );
}