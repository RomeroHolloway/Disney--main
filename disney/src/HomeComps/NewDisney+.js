import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";



const NewDisney = (props) => {
  return (

    <Wrapper>

<h3>New to Disney+</h3>

<WrapperContent>

<Wrap>

<Link to="/">
  <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3B4A75F38E50D3A56E8F72616F1C854FCFD1BB5F5930BDEF05AD270651FDD704/scale?width=400&aspectRatio=1.78&format=jpeg'/>

</Link>

</Wrap>
<Wrap>

<Link to="/">
  <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A4253ECDDD498026AF9D2263465EA23E729147B36EB3E1EAEE0A2C0909DED818/scale?width=400&aspectRatio=1.78&format=jpeg'/>

</Link>

</Wrap>
<Wrap>

<Link to="/">
  <img src=''/>

</Link>

</Wrap>
<Wrap>

<Link to="/">
  <img src=''/>

</Link>

</Wrap>


</WrapperContent>

    </Wrapper>



  );

};

export default NewDisney

const Wrapper = styled.div`
padding:0 0 26px

`;

const WrapperContent =styled.div`
display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));


  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));




`;


const Wrap =styled.div`
padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

img {
inset:0px;
display:block;
height:100%;
object-fit:cover;
opacity:1;
position:absolute;
transition: opacity 500ms ease-in-out 0s;
z-index:1;
top:0;

}

&:hover{
  box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  transform: scale(1.05);
  border-color:white;
}




`;
