import React from 'react'
import styled from 'styled-components'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
      db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setDetailData(doc.data());
          } else {
            console.log("no such document in firebase 🔥");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }, [id]);


  return (
    <Wrapper>
      <Background>

      <img alt={detailData.title} src={detailData.backgroundImg} />


      </Background>

      <ImageTitle>
      <img src={detailData.titleImg} alt={detailData.title}/>



      </ImageTitle>


        <Description>


          <Buttons>

          <PlayButton>

          <img src='\images-20210504T142301Z-001\play-icon-black.png' alt=""/>
          <span>Play</span>

          </PlayButton>

          <PlayTrailerButton>
          <img src='\images-20210504T142301Z-001\play-icon-white.png' alt=""/>
          <span>Trailer</span>

          </PlayTrailerButton>

          <AddButton>

   <img src='\images-20210504T142301Z-001\watchlist-icon.svg' alt=""/>

          </AddButton>

          <GroupButton>

           <img src='\images-20210504T142301Z-001\group-icon.png' alt=""/>

          </GroupButton>



          </Buttons>

          <Subtitle> {detailData.subTitle}   </Subtitle>


          <MovieInfo> {detailData.description} </MovieInfo>


        </Description>



    </Wrapper>
  )
}

export default Detail

const Wrapper = styled.div`
position:relative;
min-height: calc(100vh-250px);
overflow-x:hidden;
display:block;
top:72px;
padding: 0 calc(3.5vw + 5px);

`

const Background = styled.div`
left:0px;
opacity: 0.8;
position:fixed;
right:10px;
top:0px;
z-index:-1;

  img{
    width:100vw;
    height:100vh;
  }

  @media (max-width:768px) {
    width:initial;
  }


`

const ImageTitle = styled.div`
align-items: flex-end;
display:flex;
-webkit-box-pack:start;
justify-content:flex-start;
margin: 0px auto;
height:30vw;
min-height:170px;
padding-bottom:24px;
width:100%;

img {
  max-width:600px;
  min-width:200px;
  width:35vw;
}


`

const Description = styled.div`
max-width:874px;


`



const Buttons = styled.div`
align-items:center;
display:flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height:56px;

`

const PlayButton = styled.button`
font-size:15px;
margin: 0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius:8px;
align-items:center;
cursor:pointer;
display:flex;
justify-content: center;
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background: rgb(249,249,249);
border:none;
color: rgb(0,0,0);

  img {
    width:32px;
  }

  &:hover {
    background:grey;
  }

  @media (max-width:768px) {
    height:45px;
    padding:0px 22px;
    font-size:12px;
    margin: 0px 10px 0px 0px;

  }



`


const PlayTrailerButton = styled.button`
font-size:15px;
margin: 0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius:8px;
align-items:center;
cursor:pointer;
display:flex;
justify-content: center;
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background: rgba(0,0,0,0.5);
border: 2px solid white;
color: white;

  img {
    width:32px;
  }

  &:hover {
    background:black;
  }

  @media (max-width:768px) {
    height:45px;
    padding:0px 22px;
    font-size:12px;
    margin: 0px 10px 0px 0px;

  }



`


const AddButton = styled.button `

margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border: 2px solid white;
border-radius:50%;
cursor:pointer;

  img {
    width:20px;
  }

  &:hover {
    background:black;
  }



  }

`

const GroupButton = styled.button `

margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border: 2px solid white;
border-radius:50%;
cursor:pointer;



  &:hover {
    background:black;
  }


  img{
    width:100%;
  }

  div {
    height:40px;
    width:40px;
    background: rgb(0,0,0);
    border-radius: 50%;
  }



  }

`


const Subtitle = styled.div `
color: rgb(249,249,249);
min-height:20px;
fontsize:15px;


@media(max-width: 768px){

  font-size:12px;

}

`



const MovieInfo = styled.div `
line-height:1.4;
font-size:20px;
padding: 16px 8px;
color: rgb(249,249,249);

@media(max-width: 768px){

  font-size:16px;

}



`
