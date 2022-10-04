import styled from 'styled-components';
import imgTest from "../../assets/img/img-card.png"

const arr = Array.apply(null, Array(50))
export default function SeatsPage() {
  return (
    <Style>
      <h1>Selecione o(s) assento(s)</h1>
      <SeatsStyle>
        {arr.map((e, i) => <Seat>{i+1}</Seat>)}
      </SeatsStyle>

      <SeatsLegend>
        <div>
          <div></div>
          Selecionado
        </div>
        <div>
          <div></div>
          Selecionado
        </div>
        <div>
          <div></div>
          Selecionado
        </div>
      </SeatsLegend>

      <Field/>

      <Button>Reservar assento(s)</Button>

      <Footer>
        <div><img src={imgTest} alt="" /></div>
        <h3>Enola Holmes</h3>
      </Footer>
    </Style>
  );
}

function Field() {
  return (
    <FieldStyle>
      <div>Nome do comprador:</div>
      <input type="text" placeholder="Digite seu nome..."/>
    </FieldStyle>
  );
}

const FieldStyle = styled.div`
  padding: 0 32px;
  width: 100vw;
  margin-bottom: 32px;
  
  div {
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

const SeatsLegend = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 48px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    gap: 8px;

    div {
      width: 25px;
      height: 25px;
      background-color: #8DD7CF;
      border: 1px solid #1AAE9E;
      border-radius: 17px;
    }
  }
`;

const Style = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
  margin-bottom: 117px;
  padding: 32px 0;

  h1 {
    font-size: 24px;
    margin-bottom: 36px;
    text-align: center;
  }
`;

const SeatsStyle = styled.ul`
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  margin-bottom: 32px;
`;

const Seat = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  width: 26px;
  height: 26px;
  background-color: #C3CFD9;
  border: 1px solid #808F9D;
  border-radius: 12px;
`;

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 42px;
  background-color: #E8833A;
  border-radius: 3px;
  font-size: 18px;
  color: white;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  height: 117px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DFE6ED;
  border: 1px solid #9EADBA;
  font-size: 26px;
  padding: 0 10px;
  gap: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
      width: 48px;
      height: 72px;
    }
  }
`;