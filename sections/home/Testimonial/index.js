import React from "react";
import styled from "styled-components";
import testimonialIcon from "../../../assets/icons/testimonial-icon.svg";
import Image from "next/image";

const StyledTestimonial = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  .title {
    color: white;
    font-size:30px
  }
  .testimonial_wrap {
    display: flex;
    flex-wrap: wrap;
    margin:2rem 0
  }
`;
const StyledTestimonialBox = styled.div`
  display: flex;
  flex-direction:column;
  color:white;
  padding:1rem;
  width: 360px;
  height: 232px;
  margin: 1rem;
  background: linear-gradient(
      112.53deg,
      rgba(0, 97, 243, 0.2) 0%,
      rgba(0, 0, 0, 0.146) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),
    #222222;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  .testimonial_name{
    font-size:20px;
    font-weight:500;
    padding: 1rem 0;
  }
  .testimonial_detail{
    font-size:14px;
  }
`;
export default function Testimonial() {
  const TESTIMONIAL = [
    {
      image: "image",
      name: "Pragati Patel",
      detail:
        " ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlore",
    },
    {
      image: "image",
      name: "Pragati Patel",
      detail:
        " ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlore",
    },
    {
      image: "image",
      name: "Pragati Patel",
      detail:
        " ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlore",
    },
    {
      image: "image",
      name: "Pragati Patel",
      detail:
        " ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlore",
    },
    {
      image: "image",
      name: "Pragati Patel",
      detail:
        " ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlore",
    },
  ];
  return (
    <StyledTestimonial>
      <h1 className="title">Testimonials</h1>
      <div className="testimonial_wrap">
        {TESTIMONIAL?.map((item) => {
          return (
            <StyledTestimonialBox>
              <div>
                <Image src={testimonialIcon} />
              </div>
              <div className="testimonial_name">{item.name}</div>
              <div className="testimonial_detail">{item.detail}</div>
            </StyledTestimonialBox>
          );
        })}
      </div>
    </StyledTestimonial>
  );
}
