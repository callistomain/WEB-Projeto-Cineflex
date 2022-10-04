import styled from 'styled-components';
import Card from './Card';

export default function Home() {
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
  margin-top: 67px;

  h1 {
    font-size: 24px;
    padding: 36px 0;
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