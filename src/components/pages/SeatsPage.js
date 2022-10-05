import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useParams } from "react-router-dom"
import SeatsForm from './SeatsForm';
import SeatsFormItem from './SeatsFormItem';
import SeatsFooter from './SeatsFooter';

export default function SeatsPage({final, setInfo}) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState({});
  const { idSessao } = useParams();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    axios.get(url)
    .then(r => setSeats(r.data))
    .catch(e => console.log(e.response.data));
  }, [idSessao]);

  function selectSeat(name) {
    const index = selectedSeats.indexOf(name);
    if (index === -1) {
      const seats = [...selectedSeats, name];
      setSelectedSeats(seats);
    } else {
      const seats = [...selectedSeats];
      seats.splice(index, 1); 
      setSelectedSeats(seats);
    }
  }

  // NOT LOADED
  if (seats["id"] === undefined) {
    return (
      <div>Carregando</div>
    )
  }

  function submit(e) {
    e.preventDefault();
    setInfo(info => ({...info, "seats":selectedSeats, "final":true}));
  }

  // LOADED
  return (
    <Style>
      <h1>Selecione o(s) assento(s)</h1>
      <SeatsStyle>
        {seats.seats.map(e => 
          (e.isAvailable)
          ? (selectedSeats.includes(e.name))
            ? <Selected pointer={true} key={e.id} onClick={() => selectSeat(e.name)}>{e.name}</Selected>
            : <Available pointer={true} key={e.id} onClick={() => selectSeat(e.name)}>{e.name}</Available>
          : <Unavailable key={e.id}>{e.name}</Unavailable>
        )}
      </SeatsStyle>

      <SeatsLegend>
        <div> <Selected/> Selecionado </div>
        <div> <Available/> Disponível </div>
        <div> <Unavailable/> Indisponível </div>
      </SeatsLegend>

      <SeatsForm onSubmit={e => submit(e)} final={final}>
        <SeatsFormItem/>
      </SeatsForm>

      <SeatsFooter img={seats.movie.posterURL} title={seats.movie.title}/>
    </Style>
  );
}

const Style = styled.main`
  --avail-back: #C3CFD9;
  --avail-border: #7B8B99;
  --unavail-back: #FBE192;
  --unavail-border: #F7C52B;
  --selec-back: #1AAE9E;
  --selec-border: #0E7D71;

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
`;

const SeatsStyle = styled.ul`
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  margin-bottom: 32px;
`;

const Seat = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  width: 26px;
  height: 26px;
  border-radius: 17px;
  line-height: 0;
  user-select: none;
`;

const Available = styled(Seat)`
  background-color: var(--avail-back);
  border: 1px solid var(--avail-border);
  cursor: ${props => props.pointer && "pointer"};
`;

const Unavailable = styled(Available)`
  background-color: var(--unavail-back);
  border: 1px solid var(--unavail-border);
`;

const Selected = styled(Available)`
  background-color: var(--selec-back);
  border: 1px solid var(--selec-border);
  cursor: ${props => props.pointer && "pointer"};
`;

const SeatsLegend = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 48px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    gap: 8px;
  }
`;