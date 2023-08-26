import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const Certificate = styled(motion.div)`
  text-align: center;
  width: 50vw;
`
export const Experiencia = styled(motion.div)`
  text-align: center;
  width: 50vw;
`
export const Box = styled(motion.div)`
width: 55vw;
height: 73vh;
display: flex;
border-radius: 30px;
box-shadow: 1px 1px 50px #424449;
padding: 1rem;
`

export const Card = styled.div`
  height: 20vh;
  border-radius: 30px;
  margin: 0 2rem;
  background: ${(props) => props.theme.colors.gray800};
`
