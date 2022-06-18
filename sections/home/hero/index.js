import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../../../assets/homepage/hero.svg";
import instagram from "../../../assets/icons/instagram.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import git from "../../../assets/icons/git.svg";
import Image from "next/image";
const HeroContainer = styled.div`
  section.hero {
    padding: 17px 24px;
    .hero_img {
    }
    .hero_text {
      .hero_head {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        .hero_head1 {
          font-size: 32px;
          line-height: 39px;
          padding-bottom: 19px;
          color: #fff;
          font-style: normal;
          span {
            color: #2a7fff;
          }
        }
        .hero_head2 {
          font-size: 24px;
          line-height: 29px;
          text-transform: capitalize;
          padding-bottom: 9px;
          color: #ffffff;
          opacity: 0.87;
        }
      }
      .hero_subhead {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        padding-bottom: 28px;
        color: rgba(255, 255, 255, 0.87);
        max-width: 340px;
        letter-spacing: 0.01em;
        span {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #fff;
        }
      }
      .hero_btn {
        padding-bottom: 28px;
        .btn {
          border: 1px solid #2a7fff;
          border-radius: 6px;
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          padding: 16px 40px;
        }
        .btn-primary {
          color: #2a7fff;
          background-color: transparent;
        }
      }
      .hero_social {
        display: flex;
        gap: 14px;
        width: 35%;
        .hero_instagram {
        }
        .hero_linkedin {
        }
        .hero_git {
        }
      }
    }
  }
`;
export default function Hero() {
  return (
    <HeroContainer>
      <section className="hero">
        <div className="hero_img">
          <Image src={hero} alt="hero" />
        </div>
        <div className="hero_text">
          <div className="hero_head">
            <div className="hero_head1">
              HI, I&apos;M
              <span> Atul Bhatt</span>
            </div>
            <div className="hero_head2">
              My passion is to build useful Product.
            </div>
          </div>
          <div className="hero_subhead">
            <span>i’m Frontend developer & technical blogger. </span>I’ve always
            been a lover of tech and that love brought me into the software
            development field. I’ve been into programming since 2016.
          </div>
          <div className="hero_btn">
            <Button>Let&apos;s Connect</Button>
          </div>
          <div className="hero_social">
            <div className="hero_instagram">
              <Image src={instagram} alt="hero" />
            </div>
            <div className="hero_linkedin">
              <Image src={linkedin} alt="hero" />
            </div>
            <div className="hero_git">
              <Image src={git} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </HeroContainer>
  );
}
