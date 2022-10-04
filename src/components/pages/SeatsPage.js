import { useState } from 'react';
import styled from 'styled-components';
import Button from '../generics/Button';

const seats = {
  "id": 1,
  "name": "15:00",
  "day": {
    "id": 24062021,
    "weekday": "Quinta-feira",
    "date": "24/06/2021",
  },
  "movie": {
      "id": 1,
      "title": "2067",
      "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
      "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
      "releaseDate": "2020-10-01T00:00:00.000Z",
  },
  "seats": [
      {
          "id": 1,
          "name": "1",
          "isAvailable": false,
      },
      {
          "id": 2,
          "name": "2",
          "isAvailable": true,
      },
      {
          "id": 3,
          "name": "3",
          "isAvailable": true,
      },
      {
          "id": 4,
          "name": "4",
          "isAvailable": true,
      },
      {
          "id": 5,
          "name": "5",
          "isAvailable": true,
      },
      {
          "id": 6,
          "name": "6",
          "isAvailable": true,
      },
      {
          "id": 7,
          "name": "7",
          "isAvailable": true,
      },
      {
          "id": 8,
          "name": "8",
          "isAvailable": true,
      },
      {
          "id": 9,
          "name": "9",
          "isAvailable": true,
      },
      {
          "id": 10,
          "name": "10",
          "isAvailable": true,
      },
      {
          "id": 11,
          "name": "11",
          "isAvailable": true,
      },
      {
          "id": 12,
          "name": "12",
          "isAvailable": true,
      },
      {
          "id": 13,
          "name": "13",
          "isAvailable": true,
      },
      {
          "id": 14,
          "name": "14",
          "isAvailable": true,
      },
      {
          "id": 15,
          "name": "15",
          "isAvailable": true,
      },
      {
          "id": 16,
          "name": "16",
          "isAvailable": true,
      },
      {
          "id": 17,
          "name": "17",
          "isAvailable": true,
      },
      {
          "id": 18,
          "name": "18",
          "isAvailable": true,
      },
      {
          "id": 19,
          "name": "19",
          "isAvailable": true,
      },
      {
          "id": 20,
          "name": "20",
          "isAvailable": true,
      },
      {
          "id": 21,
          "name": "21",
          "isAvailable": true,
      },
      {
          "id": 22,
          "name": "22",
          "isAvailable": true,
      },
      {
          "id": 23,
          "name": "23",
          "isAvailable": true,
      },
      {
          "id": 24,
          "name": "24",
          "isAvailable": true,
      },
      {
          "id": 25,
          "name": "25",
          "isAvailable": true,
      },
      {
          "id": 26,
          "name": "26",
          "isAvailable": true,
      },
      {
          "id": 27,
          "name": "27",
          "isAvailable": true,
      },
      {
          "id": 28,
          "name": "28",
          "isAvailable": true,
      },
      {
          "id": 29,
          "name": "29",
          "isAvailable": true,
      },
      {
          "id": 30,
          "name": "30",
          "isAvailable": true,
      },
      {
          "id": 31,
          "name": "31",
          "isAvailable": true,
      },
      {
          "id": 32,
          "name": "32",
          "isAvailable": true,
      },
      {
          "id": 33,
          "name": "33",
          "isAvailable": true,
      },
      {
          "id": 34,
          "name": "34",
          "isAvailable": true,
      },
      {
          "id": 35,
          "name": "35",
          "isAvailable": true,
      },
      {
          "id": 36,
          "name": "36",
          "isAvailable": true,
      },
      {
          "id": 37,
          "name": "37",
          "isAvailable": true,
      },
      {
          "id": 38,
          "name": "38",
          "isAvailable": true,
      },
      {
          "id": 39,
          "name": "39",
          "isAvailable": true,
      },
      {
          "id": 40,
          "name": "40",
          "isAvailable": true,
      },
      {
          "id": 41,
          "name": "41",
          "isAvailable": true,
      },
      {
          "id": 42,
          "name": "42",
          "isAvailable": true,
      },
      {
          "id": 43,
          "name": "43",
          "isAvailable": true,
      },
      {
          "id": 44,
          "name": "44",
          "isAvailable": true,
      },
      {
          "id": 45,
          "name": "45",
          "isAvailable": true,
      },
      {
          "id": 46,
          "name": "46",
          "isAvailable": true,
      },
      {
          "id": 47,
          "name": "47",
          "isAvailable": true,
      },
      {
          "id": 48,
          "name": "48",
          "isAvailable": true,
      },
      {
          "id": 49,
          "name": "49",
          "isAvailable": true,
      },
      {
          "id": 50,
          "name": "50",
          "isAvailable": true,
      },
  ]
};

export default function SeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  return (
    <Style>
      <h1>Selecione o(s) assento(s)</h1>
      <SeatsStyle>
        {seats.seats.map(e => 
          (e.isAvailable)
          ? (selectedSeats.includes(e.name))
            ? <Selected key={e.id} onClick={() => selectSeat(e.name)}>{e.name}</Selected>
            : <Available key={e.id} onClick={() => selectSeat(e.name)}>{e.name}</Available>
          : <Unavailable key={e.id}>{e.name}</Unavailable>
        )}
      </SeatsStyle>

      <SeatsLegend>
        <div> <Selected/> Selecionado </div>
        <div> <Available/> Disponível </div>
        <div> <Unavailable/> Indisponível </div>
      </SeatsLegend>

      <Field/>
      <Button>Reservar assento(s)</Button>

      <Footer>
        <div><img src={seats.movie.posterURL} alt="" /></div>
        <h3>{seats.movie.title}</h3>
      </Footer>
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

const Available = styled(Seat)`
  background-color: var(--avail-back);
  border: 1px solid var(--avail-border);
`;

const Unavailable = styled(Available)`
  background-color: var(--unavail-back);
  border: 1px solid var(--unavail-border);
`;

const Selected = styled(Available)`
  background-color: var(--selec-back);
  border: 1px solid var(--selec-border);
`;

function Field() {
  return (
    <FieldStyle>
      <div>Nome do comprador:</div>
      <input type="text" placeholder="Digite seu nome..."/>
    </FieldStyle>
  );
}

const FieldStyle = styled.div`
  padding: 0 32px;
  width: 100vw;
  margin-bottom: 32px;
  
  div {
    margin-bottom: 4px;
    font-size: 18px;
  }

  input {
    font-family: 'Roboto', sans-serif;
    padding: 0 12px;
    width: 100%;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-size: 18px;
  }

  input::placeholder {
    font-style: italic;
    font-size: 18px;
    color: #AFAFAF;
  }
`;

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