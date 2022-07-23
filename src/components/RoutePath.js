import { Route, Routes } from 'react-router-dom';
import Home  from './Home';
import QR from './QR';
import  Pathway from './Pathway';

export default function RoutePath() {
    return (
        <div>
            <Routes>
                <Route path="/" exact strict element={<Home />} />
                <Route path="/qr" exact strict element={<QR />} />
                <Route path="/pathway" exact strict element={<Pathway />} />
            </Routes>
        </div>
    );
}