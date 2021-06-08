import React from 'react'
import styled from 'styled-components';
import SlideShow from '../HomeComps/SlideShow';
import ProductComp from '../HomeComps/ProductComp';
import Recommend from '../HomeComps/recommended';
import NewDisney from '../HomeComps/NewDisney+';
import Originals from '../HomeComps/Originals';
import Trending from '../HomeComps/Trending';
import db from '../firebase.js';
import {setMovies} from '../features/movies/movieSlice';
import {selectUserName} from '../features/userSlice';
import {useEffect} from 'react';
import{useDispatch, useSelector} from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });


    dispatch(setMovies({
      recommend: recommends,
      newDisney: newDisneys,
      original:originals,
      trending:trending,



    })
  );
});
},[userName]);




  return (
    <Wrapper>

<SlideShow/>
<ProductComp/>
<Recommend/>
<NewDisney/>
<Originals/>
<Trending/>

    </Wrapper>


  );
};

export default Home

const Wrapper = styled.div`
position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images-20210504T142301Z-001/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
