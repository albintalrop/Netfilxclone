import React,{useState,useEffect} from 'react';
import logo from "../../src/images/Netflixlogo.png"
import styled from "styled-components";


export default function Header() {
    const[show,setShow]=useState(false)
    
    useEffect(() =>{
        window.addEventListener("scroll",scrolling)
    })
    const scrolling = () =>{
        if(window.scrollY > 100) {
            setShow(true)
        }else{
            setShow(false)
        }

    }
    
  return (
      <Headercontainer className={`${show &&"navblack"}`}>
          <Headerwrapper>
              <Leftcontainer>
                  <Logo src={logo}></Logo>
              </Leftcontainer>
              <Right>
                  <Avathar src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'></Avathar>
              </Right>
          </Headerwrapper>
      </Headercontainer>
    );
}
const Headercontainer=styled.div`
    padding-top:1%;
    top: 0;
    position:fixed;
`
const Headerwrapper=styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding:10px;`
const Leftcontainer=styled.div`
    `
const Logo =styled.img`
    width:8%;`
const Right=styled.div`
        margin-right: -173px;
    
`
const Avathar=styled.img`
    width:15%;
    `

