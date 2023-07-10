import React from 'react';
import styled from 'styled-components';

const MovieContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
box-shadow:0 3px 10px 0 #aaa;
width:280px;
cursor:pointer;

`;

const CoverImage=styled.img`
    height:362px;
    // width:300px;
    object-fit:cover;
`

const MovieName=styled.span`
    font-size:18px;
    font-weight:600;
    color:black;
    margin:15px 0;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`

const InfoColumn=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const MovieInfo=styled.span`
    font-size:16px;
    font-weight:500;
    color:black;  
    text-transform:capitalize;
`

const MovieComponent = (props) => {
    const {Title,Year,imdbID,Type,Poster}=props.movie;
  return (
    <MovieContainer onClick={() =>props.onMovieSelect(imdbID)}>
        <CoverImage src={Poster!=="N/A" ? Poster :"https://static.vecteezy.com/system/resources/previews/006/827/537/original/holding-signboard-404-not-found-lemon-cartoon-mascot-vector.jpg"}/>
        <MovieName>{Title}</MovieName>
        <InfoColumn>
            <MovieInfo>Year: {Year}</MovieInfo>
            <MovieInfo>Type: {Type}</MovieInfo>
        </InfoColumn>
      
    </MovieContainer>
  )
}

export default MovieComponent;
// <CoverImage src={Poster!="NA" ? Poster :"https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"}/>