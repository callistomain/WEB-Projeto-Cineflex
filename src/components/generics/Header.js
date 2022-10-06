import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from './Button';

export default function Header({history, setInfo}) {
  const navigate = useNavigate();

  function returnPage() {
    if (!history.length) return;
    const page = history[history.length-1];
    const arr = [...history];
    arr.pop();
    setInfo(info => ({...info, "history": arr}));
    navigate(page);
  }

  function toHome() {
    setInfo(info => ({...info, "history": []}));
    navigate("/");
  }

  return (
    <Style>
      <Button onClick={returnPage}>Voltar</Button>
      <h1 onClick={toHome}>CINEFLIX</h1>
    </Style>
  );
}

const Style = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 67px;
  font-size: 34px;
  border: 1px solid #9EADBA;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C3CFD9;
  color: #E8833A;

  button {
    position: absolute;
    left: 10px;
  }

  h1 {
    cursor: pointer;
  }
`;