import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Style>
      <h1 onClick={() => navigate("/")}>CINEFLIX</h1>
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

  h1 {
    cursor: pointer;
  }
`;