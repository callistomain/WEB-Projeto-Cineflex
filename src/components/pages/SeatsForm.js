import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonForm from "../generics/ButtonForm";

export default function SeatsForm({children, onSubmit}) {
  const [validity, setValidity] = useState(false);
  useEffect(() => {
    const form = document.querySelector("form");
    setValidity(form.checkValidity());
  }, [children])

  return (
    <Style onSubmit={onSubmit} onChange={e => setValidity(e.currentTarget.checkValidity())}>
      {children}
       <ButtonForm valid={validity}>Reservar assento(s)</ButtonForm>
    </Style>
  );
}

const Style = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;