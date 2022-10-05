import GlobalStyled from "./GlobalStyled";
import Header from "./generics/Header";
import HomePage from "./pages/HomePage";
import ShowtimesPage from "./pages/ShowtimesPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  // const [page, setPage] = useState("home");
  const [info, setInfo] = useState({
    "final": false,
    "title": "title",
    "session": "date+time",
    "seats":[],
    "name": "name",
    "cpf": null
  });

  console.log(info);

  // function renderPage() {
  //   switch (page) {
  //     case "home": return <HomePage setPage={setPage} setInfo={setInfo}/>;
  //     case "showtimes": return <ShowtimesPage setPage={setPage} info={info} setInfo={setInfo}/>;
  //     case "seats": return <SeatsPage setPage={setPage} info={info} setInfo={setInfo}/>;
  //     case "success": return <SuccessPage info={info}/>;
  //     default: return <HomePage setPage={setPage} setInfo={setInfo}/>;
  //   }
  // }

  return (
    <BrowserRouter>
      <GlobalStyled/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sessoes/:idFilme" element={<ShowtimesPage setInfo={setInfo}/>} />
        <Route path="/assentos/:idSessao" element={<SeatsPage final={info.final} setInfo={setInfo}/>} />
        <Route path="/sucesso" element={<SuccessPage info={info}/>} />
      </Routes>
    </BrowserRouter>
  );
}

const Test = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`