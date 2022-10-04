import styled from 'styled-components';
import Card from '../generics/Card';

const movies = [
	{
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    }
];

export default function HomePage({setPage, setInfo}) {
  function toShowtimes(id) {
    setPage("showtimes");
    setInfo(info => ({...info, "id": id}));
  }

  return (
    <Style>
      <h1>Selecione o filme</h1>
      <ul>
        {movies.map(e => <Card key={e.id} onClick={() => toShowtimes(e.id)} width="145px" height="209px" img={e.posterURL}/>)}
      </ul>
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

  h1 {
    font-size: 24px;
    margin-bottom: 36px;
    text-align: center;
  }

  ul {
    padding: 0 25px;
    padding-bottom: 36px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 30px;
  }
`;