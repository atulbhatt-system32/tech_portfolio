import React from "react";
import styled from "styled-components";
import proudWorkImg from "../../../assets/homepage/proud-work-image.svg";
import quotes from '../../../assets/icons/quotes.svg'
import { StyledProud } from "./styles";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right:1rem;
`;
const StyledWorkSlider = styled.div`
  margin-top: 3rem;
  padding: 1rem 0;
  display: flex;
  flex-directon: column;
`;
const StyledSlideBox = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  padding:1.5rem;
  width: 190px;
  height: 190px;
  border-radius: 2px solid red;
  border-radius: 15px;
  margin-right: 1.5rem;
`;

export default function Proud() {
  const SLIDER_IMAGES = [
    { bg: "#20BBB0" , text:"Samadhan"},
    { bg: "#637387", text:"Shethink" },
    { bg: "#DD92A8" , text:"Relate"},
    { bg: "#E06A59", text:"IT Cubes" },
  ];

  return (
    <StyledProud>
      <h1 className="Heading">I’m Proud to work for</h1>
      <StyledWorkSlider>
        <div className="image_section">
          <Image src={proudWorkImg} alt="" />
        </div>
        <StyledSlider>
          <div className="slider_arrows">
            <div className="left_arrow">
              <AiOutlineLeft color="white" />
            </div>
            <div className="right_arrow">
              <AiOutlineRight color="white" />
            </div>
          </div>
          <div className="slider_images">
            {SLIDER_IMAGES?.map((item) => {
              console.log(item.bg);
              return (
                <StyledSlideBox
                  style={{ backgroundColor: `${item.bg}` }}
                >
                <Image src={quotes}/>
                <p className="slide_box_text">{item.text}</p>

                </StyledSlideBox>
              );
            })}
          </div>{" "}
        </StyledSlider>
      </StyledWorkSlider>
    </StyledProud>
  );
}
