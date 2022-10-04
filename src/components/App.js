import GlobalStyled from "./GlobalStyled";
import Header from "./Header";
import Home from "./Home";
import Schedule from './Schedule';
import Seats from "./Seats";

export default function App() {
  return (
    <>
      <GlobalStyled/>
      <Header/>
      {/* <Home/> */}
      {/* <Schedule/> */}
      <Seats/>
    </>
  );
}