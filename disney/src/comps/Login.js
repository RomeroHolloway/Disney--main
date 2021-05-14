import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Login = (props) => {
  return (


<Container>

  <Content>

  <Center>

<CenterLogoOne src="\images-20210504T142301Z-001\cta-logo-one.svg" alt=""/>


<SignUp>

Get The Disney Bundle

</SignUp>

<Services>

<p>Stream Now.

<a href=''> Terms Apply</a>

</p>




</Services>

<CenterLogoTwo src="\images-20210504T142301Z-001\cta-logo-two.png" alt=""/>

<SignUpDisney>

<a href=''> Sign up for Disney+ Only



</a>

<p> 7.99/Month </p>





</SignUpDisney>



  </Center>





  <BGImg/>









  </Content>

  <GroupWatch>

ghghghgh


  </GroupWatch>


  </Container>















  )
}

export default Login

const Container = styled.div `
display:flex;
overflow:hidden;
flex-direction:column;
text-align:center;
height:100vh;

`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px ;
height:100%;


`;

const BGImg =styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url('/images-20210504T142301Z-001/login-background.jpg');
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;


`;


const Center =styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction: column;
justify-content:center;
margin-top:auto;
align-items:center;
text-align:center;
margin-right:auto
margin-left:auto;
transition-timing-function:ease-out;
transition: opacity 0.2s;
width:100%




`;

const CenterLogoOne = styled.img`

width:150%;
margin-bottom:12px;
min-height:1px;
max-width:600px;
display:block;


`;


const SignUp = styled.div`
font-weight:bold;
background-color:#0063e5;
width:90%;
font-size:20px;
color:#f9f9f9;
margin-bottom:12px;
letter-spacing:1.5px;
padding: 16.5px 0;
border: 1px solid transparent ;
border-radius:6px;
cursor:pointer;
justify-content:center;


:hover {
  background-color:#3279D6;
}


`


const Services =styled.div `
font-size: 10px;


a {
  color:grey;
  text-decoration: underline;
}

`



const CenterLogoTwo =styled.img `
justify-content: center;
width:80%;
margin-bottom: 15px;

`

const SignUpDisney =styled.div `



a {
  font-size: 20px;
  text-decoration:underline;
}

p {
  fontsize:10px;
  color:#C0C0C0CC;
}

`

const GroupWatch = styled.div `


`
