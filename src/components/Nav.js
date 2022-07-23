import {BrowserRouter as Router } from 'react-router-dom'
import RoutePath from "./RoutePath";

export default function Nav() {
    return (
        <div>
            <Router>
                <RoutePath />
            </Router>
        </div>
    );
}