import styled from "styled-components";
import Button from '../generics/Button';
import { Link } from "react-router-dom"

export default function SeatsForm({children, onSubmit, final}) {
  return (
    <Style onSubmit={onSubmit}>
      {children}
      {final
        ? <Link to={final ? "/sucesso" : null}> ME MAMA </Link>
        : <Button>Reservar assento(s)</Button>
      }
    </Style>
  );
}

const Style = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;