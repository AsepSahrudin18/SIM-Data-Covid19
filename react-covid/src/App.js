import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/covid/About";
import CardIndonesia from "./pages/covid/CardIndonesia";
import TableProvinces from "./pages/covid/TableProvinces";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<CardIndonesia />} />
          <Route path="/covid/provinsi" element={<TableProvinces />} />
          <Route path="/covid/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
