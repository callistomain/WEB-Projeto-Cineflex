import styled from 'styled-components';
import Card from '../generics/Card';

export default function HomePage() {
  return (
    <Style>
      <h1>Selecione o filme</h1>
      <ul>
        <Card width="145px" height="209px"/>
      </ul>
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

  ul {
    padding: 0 25px;
    padding-bottom: 36px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 30px;
  }
`;