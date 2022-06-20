import styled from "styled-components";
export const StyledProud = styled.div`
  padding: 2rem;
  .Heading {
    color: white;
    font-size: 32px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  .image_section{
      display:flex;
      width:40%;
      
    }
  .slider_arrows{
    display:flex;
    
  }
.left_arrow, .right_arrow{
  display:flex;
  border: 1px solid #2D69E7;
    padding:1rem;
    border-radius:50%;
    cursor:pointer;
}
.right_arrow{
  background-color:#2D69E7;
  margin-left:1.5rem
}
.slider_images{
  display:flex;
  margin-top:2rem
}
.slide_box_text{
  color:white;
  padding-top:1.5rem
}
`;
