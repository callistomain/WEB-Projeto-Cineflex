import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonForm from "../generics/ButtonForm";

export default function SeatsForm({children, onSubmit}) {
  const [validity, setValidity] = useState(false);

  useEffect(() => {
    const form = document.querySelector("form");
    if(form.children.length > 1) setValidity(form.checkValidity());
  }, [children])

  return (
    <Style onSubmit={onSubmit} onChange={e => setValidity(e.currentTarget.checkValidity())}>
      {children}
       <ButtonForm data-identifier="reservation-btn" valid={validity}>Reservar assento(s)</ButtonForm>
    </Style>
  );
}

const Style = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;