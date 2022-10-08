import styled from 'styled-components';
import loading from "../../assets/img/loading.gif"

export default function Loading() {
  return (
    <Style>
      <img src={loading} alt="" />
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
`;