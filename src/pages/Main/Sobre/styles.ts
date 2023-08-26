import { motion } from "framer-motion";
import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Caixa = styled.div`
width: 8vw;
border-radius: 30px;
&:hover{
  background: #294D61;
  transform: translateX(5px) scale(1.02);
}
img{
  width: 5rem;
  height: 5rem;
  padding: 1rem;
}
`
export const Icones= styled.div`
display: flex;
text-align:center;
justify-content:space-evenly;
`
export const IconesS= styled.div`
display: flex;
text-align:center;
justify-content: center;
margin-right: 25px;
margin-left: 55px;
`
export const Box = styled(motion.div)`
width: 50vw;
border-radius: 30px;
box-shadow: 1px 1px 50px #424449;
padding: 1rem;
h1,
p{
  text-align:center;
}
`
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`
export const Button = styled.button`
width: 20vw;
height: 8vh;
background: linear-gradient(24deg, #05161A 50.62%, #294D61 85.61%);
border-radius: 20px;
cursor: pointer;
border: none;
h1{
  color: white;
}
&:hover{
  transform: translateX(5px) scale(1.02);
}
`
