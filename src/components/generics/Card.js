import styled from 'styled-components';
import imgTest from "../../assets/img/img-card.png"

export default function Card({width, height, img}) {
  return (
    <Style width={width} height={height}>
      <img src={imgTest} alt="" />
    </Style>
  );
}

const Style = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 89%;
    height: 92%;
  }
`;