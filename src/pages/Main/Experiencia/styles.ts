import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
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
  width: 75vw;
  height: 73vh;
  display: flex;
  border-radius: 30px;
  box-shadow: 1px 1px 50px #424449;
  padding: 1rem;
`
export const Foto = styled.img`
  width: 8vw;
  padding-left: 3rem;
`
export const Card = styled.div`
  display: flex;
  height: 20vh;
  border-radius: 30px;
  margin: 0 2rem;
  background: ${(props) => props.theme.colors.gray800};
  align-items: center;
  padding: 0 1rem;
  h1,
  h2 {
    padding-right: 1rem;
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
  background: linear-gradient(24deg, #05161a 50.62%, #294d61 85.61%);
  border-radius: 20px;
  cursor: pointer;
  border: none;
  h1 {
    color: white;
  }
  &:hover {
    transform: translateX(5px) scale(1.02);
  }
`
export const ButtonCerficado = styled.button`
  width: 10vw;
  height: 6vh;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  border-color: white;
  p{
    color:white
  }
`
export const DivCard = styled.div`
  flex-direction: column;
`
