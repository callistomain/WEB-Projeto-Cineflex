import styled from 'styled-components';

export default function Button({children, dataIdentifier, onClick}) {
  return (
    <Style data-identifier={dataIdentifier} onClick={onClick}>
      {children}
    </Style>
  );
} 

const Style = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  padding: 12px 19px;
  justify-content: center;
  background-color: #E8833A;
  border-radius: 3px;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;