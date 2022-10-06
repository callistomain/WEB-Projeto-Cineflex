import GlobalStyled from "./GlobalStyled";
import Header from "./generics/Header";
import HomePage from "./pages/HomePage";
import ShowtimesPage from "./pages/ShowtimesPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  // const [page, setPage] = useState("home");
  const [info, setInfo] = useState({
    "final": false,
    "title": "title",
    "session": "date+time",
    "seats":[],
    "name": "name",
    "cpf": null,
    "history" : []
  });

  return (
    <BrowserRouter>
      <GlobalStyled/>
      <Header history={info.history} setInfo={setInfo}/>
      <Routes>
        <Route path="/" element={<HomePage setInfo={setInfo}/>} />
        <Route path="/sessoes/:idFilme" element={<ShowtimesPage setInfo={setInfo}/>} />
        <Route path="/assentos/:idSessao" element={<SeatsPage info={info} setInfo={setInfo}/>} />
        <Route path="/sucesso" element={<SuccessPage info={info}/>} />
      </Routes>
    </BrowserRouter>
  );
}