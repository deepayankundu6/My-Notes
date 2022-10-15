import './App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNotes from './AddNotes';
import EditDialogue from './editNotes';

function Landing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}> </Route>
                <Route path="/add" element={<AddNotes />}> </Route>
                <Route path="/:id" element={<EditDialogue />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Landing;
