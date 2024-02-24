import { useNavigate } from "react-router-dom";

export default function Redirected() {
    
    const navigate = useNavigate();
    
    return (
        <div className='container'>
            <div id="help-text">Redirected Successfully!</div>
            <div className="btn-container-qr">
                <button onClick={e => navigate('/')} className="btn">Home</button>
            </div>
        </div>
    );
}