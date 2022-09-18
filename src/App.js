import Pocetna from "./strane/Pocetna";
import Register from "./strane/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from "./strane/Welcome";
import AdminDashboard from "./strane/AdminDashboard";
import Prisustva from "./strane/Prisustva";
import Kasnjenja from "./strane/Kasnjenja";
import Zaposleni from "./strane/Zaposleni";

function App() {

  console.log("u 4 se poziva ka serveru i kupi kod svih zaposlenih, da li im je $login false, ako jeste dodaje im odsustvo")

  var date = new Date()
  console.log(date)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/prisustva" element={<Prisustva />} />
          <Route path="/kasnjenja" element={<Kasnjenja />} />
          <Route path="/zaposleni" element={<Zaposleni />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
