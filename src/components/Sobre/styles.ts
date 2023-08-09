import styled from "styled-components";
import { motion } from 'framer-motion';


export const Info = styled(motion.div)`
width: 50vw;
height: 60vh;
background-color: #1C1C1C;
border-radius: 30px;
box-shadow: 1px 1px 50px #DCDCDC;
padding: 2rem;
h1,
p{
  text-align:center;
}
`
export const Caixa = styled.div`
width: 10rem;
height: 10rem;
border-radius: 30px;
background-color: ${(props) => props.theme.colors.gray800};
img{
  width: 5rem;
  height: 5rem;
  padding: 1rem;
}
`
export const Icones= styled.div`
display: flex;
text-align:center;
justify-content:space-evenly
`
