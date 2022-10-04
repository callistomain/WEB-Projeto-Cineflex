import GlobalStyled from "./GlobalStyled";
import Header from "./generics/Header";
import HomePage from "./pages/HomePage";
import ShowtimesPage from "./pages/ShowtimesPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [page, setPage] = useState("home");
  const [info, setInfo] = useState({
    "id": null,
    "title": "title",
    "session": "date+time",
    "seats":[],
    "name": "name",
    "cpf": null
  });
  console.log(info);

  function renderPage() {
    switch (page) {
      case "home": return <HomePage setPage={setPage} setInfo={setInfo}/>;
      case "showtimes": return <ShowtimesPage setPage={setPage} setInfo={setInfo}/>;
      case "seats": return <SeatsPage setPage={setPage} setInfo={setInfo}/>;
      case "success": return <SuccessPage info={info}/>;
      default: return <HomePage setPage={setPage} setInfo={setInfo}/>;
    }
  }

  return (
    <>
      <GlobalStyled/>
      <Header/>

      {/* <Test onClick={
        () => {
          setInfo(info => ({...info, "name":"memama"}));
        }
      }/> */}

      {renderPage()}
    </>
  );
}

const Test = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`