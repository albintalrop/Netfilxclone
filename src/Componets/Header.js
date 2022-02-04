import React from 'react';
import logo from "../../src/images/Netflixlogo.png"
import styled from "styled-components";

export default function () {
  return (
      <Headercontainer>
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
    padding-top:3%;
    position:fixed;`
const Headerwrapper=styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding:10px;`
const Leftcontainer=styled.div`
    `
const Logo =styled.img`
    width:10%;`
const Right=styled.div`
        margin-right: -173px;
    
`
const Avathar=styled.img`
    width:20%;
    `

