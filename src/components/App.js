import GlobalStyled from "./GlobalStyled";
import Header from "./generics/Header";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  function renderPage() {
    switch (page) {
      case "home": return <HomePage/>;
      case "schedule": return <SchedulePage/>;
      case "seats": return <SeatsPage/>;
      case "success": return <SuccessPage/>;
      default: return <HomePage/>;
    }
  }

  return (
    <>
      <GlobalStyled/>
      <Header/>
      {renderPage()}
    </>
  );
}