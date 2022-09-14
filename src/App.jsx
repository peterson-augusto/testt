// importar o roteamento
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./components/pages/cadastro/Cadastro";
import Login from "./components/pages/login/Login";

import "./components/pages/login/style-enter.css";
import "./style/style.css";

// usar o roteamento
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
