import styled from 'styled-components';
import Button from '../generics/Button';

export default function SuccessPage() {
  return (
    <Style>
      <h1>Pedido feito com sucesso!</h1>
      <section>
        <div>
          <h2>Filme e sessão</h2>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div>
          <h2>Ingressos</h2>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div>
          <h2>Comprador</h2>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.456.789-10</p>
        </div>
      </section>
      <Button>Voltar pra Home</Button>
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
  }
`;

