import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const navigate = useNavigate();
    
    return (
        <div className='container'>
            Home

            <div className="btn-container">
                <button onClick={e => navigate('/qr')} className="btn">QR</button>
            </div>
        </div>
    );
}