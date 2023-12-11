import styled from "styled-components";

export const Button = styled.button`
  width: 20vw;
  background: linear-gradient(24deg, #000000 50.62%, #333333 85.61%);
  border-radius: 20px;
  cursor: pointer;
  border: none;
  h1 {
    color: white;
  }
  &:hover {
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (min-width: 100px) and (max-width:800px){
    width: auto;
    h1{
      font-size:2rem;
    }
  }
`
