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
`
export const Box = styled.div`
width: 30vw;
padding: 2rem;
`

export const Foto = styled.img`
width: 19vw;
border-radius: 1.25rem;
border: 1px solid #000;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
