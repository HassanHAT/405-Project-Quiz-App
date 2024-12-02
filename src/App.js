import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Home from './components/Quiz';
import Home from './components/Results';


function App() {
  return (
    <BrowserRouter>

      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            </Routes>
            </main>
          </div>

        </BrowserRouter>
        );
}


export default App;
