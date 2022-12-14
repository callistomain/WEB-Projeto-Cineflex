import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../generics/Card';
import axios from "axios";
import { Link } from "react-router-dom"
import Loading from './Loading';

const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

export default function HomePage({setInfo}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url)
    .then(r => setMovies(r.data))
    .catch(e => console.log(e.response.data));
  }, []);

  if (!movies.length) return <Loading/>;

  return (
    <Style>
      <h1>Selecione o filme</h1>
      <ul>
        {movies.map(e =>
          <Link key={e.id} to={`/sessoes/${e.id}`}>
            <Card onClick={() => setInfo(info => ({...info, "title":e.title, "history":[...info.history, "/"]}))} width="145px" height="209px" img={e.posterURL}/>
          </Link>
        )}
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