import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import SeatsForm from './SeatsForm';
import SeatsFormItem from './SeatsFormItem';
import SeatsFooter from './SeatsFooter';
import Loading from './Loading';

export default function SeatsPage({info, setInfo}) {
  const [selectedSeats, setSelectedSeats] = useState({});
  const [seats, setSeats] = useState({});
  const { idSessao } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    axios.get(url)
    .then(r => setSeats(r.data))
    .catch(e => console.log(e.response.data));
  }, [idSessao]);

  function selectSeat({id, name}) {
    const obj = {...selectedSeats};
    obj[id] = selectedSeats[id] ? undefined : name;
    setSelectedSeats(obj);
  }

  // NOT LOADED
  if (seats["id"] === undefined) return <Loading/>;  

  function submit(e) {
    e.preventDefault();
    const values = Object.values(selectedSeats).filter(e => e && e);
    const keys = Object.keys(selectedSeats).filter(e => selectedSeats[e] && e);
    const obj = {...info, 
      "seats":values,
      "final":true,
      "name":e.target.name.value,
      "cpf":e.target.cpf.value,
      "history":[...info.history, `/assentos/${idSessao}`
    ]};
    setInfo(obj);
    
    const url = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    axios.post(url, {
      ids: keys,
      name: obj.name,
      cpf: obj.cpf.replace(/\D/g,'')
    })
    .then(r => navigate("/sucesso"))
    .catch(e => console.log(e));
  }

  // LOADED
  return (
    <Style>
      <h1>Selecione o(s) assento(s)</h1>
      <SeatsStyle>
        {seats.seats.map(e => 
          (e.isAvailable)
          ? (selectedSeats[e.id])
            ? <Selected pointer={true} key={e.id} onClick={() => selectSeat(e)}>{e.name}</Selected>
            : <Available pointer={true} key={e.id} onClick={() => selectSeat(e)}>{e.name}</Available>
          : <Unavailable key={e.id}>{e.name}</Unavailable>
        )}
      </SeatsStyle>

      <SeatsLegend>
        <div> <Selected/> Selecionado </div>
        <div> <Available/> Disponível </div>
        <div> <Unavailable/> Indisponível </div>
      </SeatsLegend>

      <SeatsForm onSubmit={e => submit(e)}>
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