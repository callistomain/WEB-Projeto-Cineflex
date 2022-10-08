import styled from 'styled-components';

export default function Card({width, height, img, onClick}) {
  return (
    <Style onClick={onClick} width={width} height={height} data-identifier="movie-outdoor">
      <img src={img} alt="" />
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