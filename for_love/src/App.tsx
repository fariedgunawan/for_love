import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Satu from "./page/satu";
import Dua from "./page/Dua";
import Tiga from "./page/Tiga";
import Empat from "./page/Empat";
import Lima from "./page/Lima";
import Enam from "./page/Enam";
import Tujuh from "./page/Tujuh";
import Delapan from "./page/Delapan";
import Sembilan from "./page/Sembilan";
import Sepuluh from "./page/Sepuluh";
import Sebelas from "./page/Sebelas";
import Duabelas from "./page/Duabelas";
import TigaBelas from "./page/Tigabelas";
import EmpatBelas from "./page/Empatbelas";
import LimaBelas from "./page/Limabelas";
import EnamBelas from "./page/Enambelas";
import TujuhBelas from "./page/Tujuhbelas";
import DelapanBelas from "./page/Delapanbelas";
import SembilanBelas from "./page/Sembilanbelas";
import DuaPuluh from "./page/Duapuluh";
import Duapuluhsatu from "./page/Duapuluhsatu";
import Duapuluhdua from "./page/Duapuluhdua";
import Duapuluhtiga from "./page/Duapuluhtiga";
import Duapuluhempat from "./page/Duapuluhempat";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/1" element={<Satu />} />
        <Route path="/2" element={<Dua />} />
        <Route path="/3" element={<Tiga />} />
        <Route path="/4" element={<Empat />} />
        <Route path="/5" element={<Lima />} />
        <Route path="/6" element={<Enam />} />
        <Route path="/7" element={<Tujuh />} />
        <Route path="/8" element={<Delapan />} />
        <Route path="/9" element={<Sembilan />} />
        <Route path="/10" element={<Sepuluh />} />
        <Route path="/11" element={<Sebelas />} />
        <Route path="/12" element={<Duabelas />} />
        <Route path="/13" element={<TigaBelas />} />
        <Route path="/14" element={<EmpatBelas />} />
        <Route path="/15" element={<LimaBelas />} />
        <Route path="/16" element={<EnamBelas />} />
        <Route path="/17" element={<TujuhBelas />} />
        <Route path="/18" element={<DelapanBelas />} />
        <Route path="/19" element={<SembilanBelas />} />
        <Route path="/20" element={<DuaPuluh />} />
        <Route path="/21" element={<Duapuluhsatu />} />
        <Route path="/22" element={<Duapuluhdua />} />
        <Route path="/23" element={<Duapuluhtiga />} />
        <Route path="/24" element={<Duapuluhempat />} />
      </Routes>
    </Router>
  );
}

export default App;
