import styled from "styled-components";

export default function SeatsFormItem() {
  return ( // Fieldset - legend
    <div>
      <Field>
        <h2>Nome do comprador:</h2>
        <input type="text" id="name" placeholder="Digite seu nome..." required />
      </Field>
      <Field>
        <h2>CPF do comprador:</h2>
        <input type="text" id="cpf" placeholder="Digite seu CPF..." pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" required/>
      </Field>
    </div>
  );
}

const Field = styled.div`
  padding: 0 32px;
  width: 100vw;
  margin-bottom: 32px;
  
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