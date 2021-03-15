import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import styled from "styled-components";
const IMG = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
`;
//slider component의 slick-dots를 통해 custompagination css 조정
const Slide = styled(Slider)`
  position: relative;
  .slick-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0;
    margin: 0;
    list-style: none;
    transform: translate(-50%);
  }
`;
const Background1 = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("./1.jpeg");
  background-size: 100% 500px;
  position: relative;
`;
const Background2 = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("./2.jpeg");
  background-size: 100% 500px;
  position: relative;
`;
const Background3 = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("./3.jpeg");
  background-size: 100% 500px;
  position: relative;
`;

const url = ["./1.jpeg", "./2.jpeg", "./3.jpeg"];
function slick() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => {
      return (
        <div>
          <IMG alt="thumbnail" src={url[i]} />
        </div>
      );
    },
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Slide {...settings}>
        <Background1></Background1>
        <Background2></Background2>
        <Background3></Background3>
      </Slide>
    </div>
  );
}

export default slick;
