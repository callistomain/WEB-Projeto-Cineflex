import styled from "styled-components";

export default function SeatsFormItem({name}) {
  return ( // Fieldset - legend
    <Style>
      <legend>Assento {name}</legend>
      <Field>
        <h2>Nome do comprador:</h2>
        <input type="text" id="name" placeholder="Digite seu nome..." required />
      </Field>
      <Field>
        <h2>CPF do comprador:</h2>
        <input type="text" id="cpf" placeholder="Digite seu CPF..." pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" required/>
      </Field>
    </Style>
  );
}

const Style = styled.fieldset`
  width: 80vw;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  padding: 32px;
  padding-top: 24px;

  legend {
    /* border: 3px solid black; */
    /* background-color: #1aae9e; */
    /* color: white; */
    font-size: 24px;
    font-weight: bold;
    padding: 12px;
  }
`;

const Field = styled.div`
  width: 100%;
  
  h2 {
    margin-bottom: 4px;
    font-size: 18px;
  }

  input {
    font-family: 'Roboto', sans-serif;
    padding: 0 12px;
    width: 100%;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-size: 18px;
  }

  input::placeholder {
    font-style: italic;
    font-size: 18px;
    color: #AFAFAF;
  }
`;