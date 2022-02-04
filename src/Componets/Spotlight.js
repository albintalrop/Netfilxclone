import React, { useEffect,useState } from 'react';
import styled from "styled-components";
import axios from "../Componets/constants/axios";
import {API_KEY,imageUrl} from "../Componets/constants/constants"


export default function Spotlight() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios
            .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovies(response.data.results[0])
                console.log(movies);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const myStyle={
        backgroundImage: 
        `url(${ imageUrl+movies.backdrop_path })`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
    }
    return (
      <Bannersection style={myStyle} >    
            <Content>   
                <Head>{movies.title}</Head>
                <Buttons>
                    <Fristbutton>play</Fristbutton>
                    <Secondbutton>My list</Secondbutton>
                </Buttons>
                <Description>{movies.overview}
                </Description>
            </Content>
            <Fade className='hello'>

            </Fade>
      </Bannersection>
  );
}
const Bannersection=styled.section`
    `
const Content=styled.div`
    padding-top:200px;
    width: 90%;
    margin: 0 auto;
    `
const Head=styled.h1`
    font-size: 35px;
    `
const Buttons=styled.div`
    display:flex;
    width:30%;
    margin-top:60px;
    
    `
const Fristbutton=styled.button`
    display:block;
    outline: none;
    border:none;
    font-weight:800;
    width: 40%;
    border-radius: 5px;
    padding: 10px 15px;
    margin-right: 20px;
    background-color: rgba(51,51,51,.5);
    &:hover{
        background: #FFF;

    }
    `
const Secondbutton=styled.button`
    display:block;
    outline: none;
    border:none;
    font-weight:800;
    width: 40%;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: rgba(51,51,51,0.5);
    background-color: rgba(51,51,51,0.5);
    &:hover{
        background: #FFF;

    }
    `
const Description=styled.p`
    width:40%;
    font-size:20px;
    margin-top:60px;
    color:#fff;`
const Fade =styled.div`
    height: 5.4em;
    background-image: linear-gradient(180deg,transparent,rgb(17 17 17),#090808);

    `