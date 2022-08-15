import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import About from "./pages/covid/About";
import CardIndonesia from "./pages/covid/CardIndonesia";
import TableProvinces from "./pages/covid/TableProvinces";
import Home from "./pages/Home";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<CardIndonesia />} />
            <Route path="/covid/provinsi" element={<TableProvinces />} />
            <Route path="/covid/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
