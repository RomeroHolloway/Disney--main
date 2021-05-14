import React from 'react'
import styled from 'styled-components'
import SlideShow from '../HomeComps/SlideShow'
import ProductComp from '../HomeComps/ProductComp'

const Home = (props) => {
  return (
    <Wrapper>

<SlideShow/>
<ProductComp/>
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
