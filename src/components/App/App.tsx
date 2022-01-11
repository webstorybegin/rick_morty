import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from 'components/Navbar/Navbar';
import { HomePage } from 'components/HomePage/HomePage';
import { CardsInfo } from 'components/Cards/CardsInfo/CardsInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CardsInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
