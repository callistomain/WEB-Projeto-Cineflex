import styled from 'styled-components';
import Button from '../generics/Button';

const showtime = {
  "id": 1,
  "title": "2067",
  "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
  "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
  "releaseDate": "2020-10-01T00:00:00.000Z",
  "days": [
      {
          "id": 24062021,
          "weekday": "Quinta-feira",
          "date": "24/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 1
              },
              {
                  "name": "19:00",
                  "id": 2
              }
          ]
      },
      {
          "id": 25062021,
          "weekday": "Sexta-feira",
          "date": "25/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 3
              },
              {
                  "name": "19:00",
                  "id": 4
              }
          ]
      },
      {
          "id": 26062021,
          "weekday": "Sábado",
          "date": "26/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 5
              },
              {
                  "name": "19:00",
                  "id": 6
              }
          ]
      },
      {
          "id": 27062021,
          "weekday": "Domingo",
          "date": "27/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 7
              },
              {
                  "name": "19:00",
                  "id": 8
              }
          ]
      },
      {
          "id": 28062021,
          "weekday": "Segunda-feira",
          "date": "28/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 9
              },
              {
                  "name": "19:00",
                  "id": 10
              }
          ]
      },
      {
          "id": 29062021,
          "weekday": "Terça-feira",
          "date": "29/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 11
              },
              {
                  "name": "19:00",
                  "id": 12
              }
          ]
      },
      {
          "id": 30062021,
          "weekday": "Quarta-feira",
          "date": "30/06/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 13
              },
              {
                  "name": "19:00",
                  "id": 14
              }
          ]
      },
      {
          "id": 1072021,
          "weekday": "Quinta-feira",
          "date": "01/07/2021",
          "showtimes": [
              {
                  "name": "15:00",
                  "id": 15
              },
              {
                  "name": "19:00",
                  "id": 16
              }
          ]
      }
  ]
};

export default function ShowtimesPage({setPage, setInfo}) {
  function toSeats(date, time) {
    setPage("seats");
    setInfo(info => ({...info, "session": `${date} ${time}`}));
  }

  return (
    <Style>
      <h1>Selecione o horário</h1>
      
      {
        showtime.days.map(day =>
          <Day key={day.id}>
            <h2>{day.weekday} - {day.date}</h2>
            {day.showtimes.map(e => <li key={e.id}><Button onClick={() => toSeats(day.date, e.name)}>{e.name}</Button></li>)}
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