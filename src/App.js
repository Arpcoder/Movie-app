import styled from 'styled-components';
import './App.css';
import MovieComponent from "./components/MovieComponent";
import { useState } from 'react';
import axios from 'axios';
import MovieInfoComponent from './components/MovieInfoComponent';
export const API_KEY="c47dc06e"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  
`;

const Header = styled.div`
display:flex;
flex-direction:row;
background-color:black;
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;
justify-content:space-between;
align-items:center;

`;

const SearchInput=styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left: 10px;
width:100%;
text-overflow:ellipsis;
overflow:hidden;
`;

const SearchBox = styled.div`
  display:flex;
  flex-direction:row;
  padding:11px 5px;
  background-color:white;
  border-radius:6px;
  margin-left:auto;
  width:30%;
  
`

const MovieListContainer=styled.div`
  display:flex;
  flex-direction:row;
  padding:30px;
  flex-wrap:wrap;
  justify-content:center;
  font-weight: bold;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
  // border: 2px solid black;
  object-fit: cover;
  // background:gray;
`

const Demo=styled.img`
width: auto;
height: 50%; 
object-fit: cover;
`

function App() {
  const [searchQuery,updateSearchQuery]=useState();
  const [timeoutId,updateTimeoutId]=useState();
  const [movieList,updateMovieList]=useState([]);
  const [selectedMovie,onMovieSelect]=useState();

const fetchData=async (searchString) => {
  const response=await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);

  
  updateMovieList(response.data.Search);
}

  const onTextChange= (event)=>{
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout=setTimeout(() =>fetchData(event.target.value),500);
    updateTimeoutId(timeout);
  }
  return (
    <Container>
      <Header>
        {/* <AppName> */}
        <img src={'https://media4.giphy.com/media/lojqWfJ0HXZ6Gj3461/giphy.gif?cid=6c09b9520fd3d5dbb3654215f8720e8b3fece9faa23f9ebf&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s'}
          alt="logo" style={{ width: 55 }} />
          Movie App
          <SearchBox>
          <img src={'https://static.thenounproject.com/png/1446108-200.png'}alt="logo" style={{ width:30}} />
          <SearchInput placeholder='Search Movie' value={searchQuery} onChange={onTextChange}/>
          </SearchBox>
        {/* </AppName> */}
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}
      />}
      
      <MovieListContainer>
        {
          movieList?.length? movieList.map((movie,index)=><MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>):<Demo src="/image2.gif"></Demo>
        }
        
      </MovieListContainer>

      
      
    {/* <div>Build by Arpcoder</div> */}

    </Container>
  );
}

export default App;
// 