import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import Youtube from "react-youtube"
import axios from "../Componets/constants/axios";
import {API_KEY,imageUrl} from "../Componets/constants/constants"

export default function Rowposter(props) {
    const [movies, setMovies] = useState([]);

    const [UrlId,setUrlId] =useState("")
    useEffect(() => {
        axios
            .get(props.url)
            .then((response) => {
                setMovies(response.data.results)
                console.log(movies);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        } 
    }
    const handleMovie =(id)=>{
        console.log("hhhh");
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
            else{
                console.log("array empty");
            }

        })

    }

  return (
      <Rowcontainer>
          <Rowwrapper>
              <Title>{props.title}</Title>
              <Posters className=''>
                    {movies.map((obj) =>
                         <Post onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small' :"poster" } src={`${imageUrl+obj.backdrop_path}`} />
                        
                    )}
              </Posters>
              {UrlId && <Youtube videoId={UrlId.key} opts={opts} />}
          </Rowwrapper>   
      </Rowcontainer>
  );
}
const Rowcontainer=styled.div`
    margin-left:20px;
    color:#fff;
    `
const Rowwrapper=styled.div``
const Title=styled.h1`
`
const Posters=styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    
    `
const Post=styled.img`
    
`
