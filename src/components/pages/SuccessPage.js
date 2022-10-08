import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../generics/Button';

export default function SuccessPage({info}) {
  const navigate = useNavigate();

  if (!info.final) {
    return (
      <div style={{"margin":"200px"}}>Você deve preencher selecionar e preencher os campos.</div>
    );
  }

  const {title, session, seats, selectedSeats} = info;
  return (
    <Style>
      <h1>Pedido feito com sucesso!</h1>
      <section>
        <div>
          <h2>Filme e sessão</h2>
          <p data-identifier="movie-session-infos-reserve-finished">{title}</p>
          <p data-identifier="movie-session-infos-reserve-finished">{session}</p>
        </div>
        <div>
          <h2>Ingressos</h2>
          {seats.compradores.map((e, i) =>
            <fieldset key={e.idAssento}>
              <legend data-identifier="seat-infos-reserve-finished">Assento {selectedSeats[i].name}</legend>
              <p data-identifier="buyer-infos-reserve-finished">Nome: {e.nome}</p>
              <p data-identifier="buyer-infos-reserve-finished">CPF: {e.cpf}</p>
            </fieldset>
          )}
        </div>
      </section>
      <Button dataIdentifier="back-to-home-btn" onClick={() => navigate("/")}>Voltar pra Home</Button>
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
  font-size: 24px;

  h1 {
    margin-bottom: 48px;
    text-align: center;
    font-weight: bold;
    color: #247A6B;
  }

  section {
    width: 100vw;
    padding: 0 32px;
    margin-bottom: 64px;
  }

  div {
    margin-bottom: 36px;

    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 22px;
      margin-bottom: 5px;
    }

    fieldset {
      width: 80vw;
      border: 3px solid black;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 24px;
      padding-top: 10px;
      margin-bottom: 16px;

      p {
        margin: 0;
      }

      legend {
        font-size: 24px;
        font-weight: bold;
        padding: 12px;
      }
    }
  }
`;

