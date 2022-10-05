import styled from "styled-components";
import Button from '../generics/Button';

export default function SeatsForm({children, onSubmit}) {
  return (
    <Style onSubmit={onSubmit}>
      {children}
       <Button>Reservar assento(s)</Button>
    </Style>
  );
}

const Style = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;