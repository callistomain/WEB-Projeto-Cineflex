import styled from 'styled-components';

export default function Loading() {
  return (
    <Style>
      Carregando
    </Style>
  );
}

const Style = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  font-weight: bold;
`;