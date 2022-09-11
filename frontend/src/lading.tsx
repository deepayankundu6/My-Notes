import './App.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AddNotes from './AddNotes';

function Landing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}> </Route>
                <Route path="/add" element={<AddNotes />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Landing;
