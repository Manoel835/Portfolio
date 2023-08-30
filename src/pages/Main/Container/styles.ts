import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
width: 90vw;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
h1{
  color: #FFF;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  }
  p{
    color: #FFF;
  text-align: justify;
  font-family: Inter;
  font-size: 1.5625rem;
  font-weight: 400;
  }
  @media screen  and (min-width: 320px) and (max-width: 800px){
  flex-direction: column;
  width: 100vw;
  height: 54vh;

}

`
export const Box = styled.div`
width: 30vw;
padding: 2rem;
  @media screen and (min-width: 320px) and (max-width: 800px){
    h1,p{
      font-size: 1.1rem;
    }
    height: 8rem;
    width: 15rem;
  }
`

export const Foto = styled.img`
width: 19vw;
border-radius: 1.25rem;
border: 1px solid #000;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
@media screen  and (min-width: 320px) and (max-width: 800px){
  background: pink;
}
`

