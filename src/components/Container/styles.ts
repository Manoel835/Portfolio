import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
width: 90vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
h1{
  font-size: 45px;}
p{
  font-size: 20px;
}
`
export const Box = styled.div`
width: 30vw;`

export const Foto = styled.img`
width: 15vw;
border-radius: 100px;
padding: 40px;
`
