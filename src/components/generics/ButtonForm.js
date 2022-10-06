import styled from 'styled-components';
import Button from './Button';

const ButtonForm = styled(Button)`
  background-color: ${props => props.valid ? "#E8833A" : "lightgray"};
`;

export default ButtonForm;