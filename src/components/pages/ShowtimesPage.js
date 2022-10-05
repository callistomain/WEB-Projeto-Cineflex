import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../generics/Button';
import axios from "axios";
import { useParams, Link } from "react-router-dom"

export default function ShowtimesPage({setInfo}) {
  const [showtime, setShowtime] = useState({});
  const { idFilme } = useParams();

  useEffect(() => {
      const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
      axios.get(url)
      .then(r => setShowtime(r.data))
      .catch(e => console.log(e.response.data));
  }, [idFilme]);

  function updateInfo(date, time) {
    setInfo(info => ({...info, "session": `${date} ${time}`}))
  }

  if (showtime["id"] === undefined) {
    return (
      <div>Carregando</div>
    )
  }

  return (
    <Style>
      <h1>Selecione o horário</h1>
      
      {
        showtime.days.map(day =>
          <Day key={day.id}>
            <h2>{day.weekday} - {day.date}</h2>
            {day.showtimes.map(e => 
              <li key={e.id}>
                <Link to={`/assentos/${e.id}`}>
                  <Button onClick={() => updateInfo(day.date, e.name)}>{e.name}</Button>
                </Link>
              </li>
            )}
          </Day>
        )
      }

      <Footer>
        <div><img src={showtime.posterURL} alt="" /></div>
        <h3>{showtime.title}</h3>
      </Footer>
    </Style>
  );
}

const Style = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 67px;
  margin-bottom: 117px;
  padding: 32px 0;
  gap: 36px;

  h1 {
    font-size: 24px;
    text-align: center;
  }
`;

const Day = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  gap: 10px;
  padding: 0 36px;
  
  h2 {
    font-size: 20px;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  height: 117px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DFE6ED;
  border: 1px solid #9EADBA;
  font-size: 26px;
  padding: 0 10px;
  gap: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
      width: 48px;
      height: 72px;
    }
  }
`;