import styled from 'styled-components';
import imgTest from "../../assets/img/img-card.png"

export default function SchedulePage() {
  return (
    <Style>
      <h1>Selecione o horário</h1>
      <Day>
        <h2>Quinta-feira - 24/06/2021</h2>
        <Button>15:00</Button>
        <Button>19:00</Button>
      </Day>

      <Footer>
        <div><img src={imgTest} alt="" /></div>
        <h3>Enola Holmes</h3>
      </Footer>
    </Style>
  );
}

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

const Day = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  gap: 10px;
  padding: 0 36px;
  
  h2 {
    font-size: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
`

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