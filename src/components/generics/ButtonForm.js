import styled from 'styled-components';

const ButtonForm = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  padding: 12px 19px;
  justify-content: center;
  border-radius: 3px;
  font-size: 18px;
  color: white;
  cursor: pointer;

  background-color: ${props => props.valid ? "#E8833A" : "lightgray"};
`;

export default ButtonForm;