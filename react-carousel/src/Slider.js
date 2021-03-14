import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
const Container = styled.div`
  width: 20%; //전체 가로 사이즈를 조절해서 보여주는 수 조절
  overflow: hidden; //선 넘어간 이미지 보이지 않도록 처리
`;
const Button = styled.button`
  all: unset; //기본 스타일 값 초기화
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 50%;
  display: flex; //이미지 가로 나열
`;
const TOTAL_SLIDES = 9;
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더이상 넘어갈 슬라이드 없으면 초기화
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    //백틱을 사용해서 슬라이드로 이동하는 애니메이션
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  //아이디어
  // slide별로 index 값을 줘서 currentSlide와 비교해서 active 값 넘겨주기
  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={"./1.jpeg"}></Slide>
        <Slide img={"./2.jpeg"}></Slide>
        <Slide img={"./3.jpeg"}></Slide>
        <Slide img={"./4.jpeg"}></Slide>
        <Slide img={"./5.jpeg"}></Slide>
        <Slide img={"./6.jpeg"}></Slide>
        <Slide img={"./7.jpeg"}></Slide>
        <Slide img={"./8.jpeg"}></Slide>
        <Slide img={"./9.jpeg"}></Slide>
      </SliderContainer>
      <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
  );
}

export default Slider;
