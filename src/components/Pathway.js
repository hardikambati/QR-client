import { useNavigate } from "react-router-dom";

export default function Pathway() {
    
    const navigate = useNavigate();
    
    return (
        <div className='container'>
            Pathway

            <div className="btn-container-qr">
                <button onClick={e => navigate('/')} className="btn">Home</button>
            </div>
        </div>
    );
}