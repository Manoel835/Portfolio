import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled.main`
  display: flex;
  justify-content: center;

  align-items: center;
  background: linear-gradient(24deg, #05161a 50.62%, #294d61 85.61%);
`
export const Certificate = styled(motion.div)`
  text-align: center;
  width: 50vw;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 85vw;
  }
`
export const Experiencia = styled(motion.div)`
  text-align: center;
  width: 50vw;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 85vw;
  }
`
export const Box = styled(motion.div)`
  width: 75vw;
  display: flex;
  border-radius: 30px;
  box-shadow: 1px 1px 50px #424449;
  padding: 1rem;

  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    width: auto;
  }
`
export const Foto = styled.img`
  width: 8vw;
  padding-left: 3rem;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    display: none;
  }
`
export const Card = styled.div`
  display: flex;
  height: 20vh;
  border-radius: 30px;
  margin: 1rem 2rem;
  background: ${(props) => props.theme.colors.gray800};
  align-items: center;
  padding: 0 1rem;
  h1,
  h2 {
    padding-right: 1rem;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    h1,
    h2 {
      font-size: 1.2rem;
    }
  }
`
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`

export const ButtonCerficado = styled.button`
  width: 10vw;
  height: 6vh;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  border-color: white;
  p {
    color: white;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    height: auto;
    width: auto;
    text-align: center;
    margin-bottom: 10px;
  }
`
export const DivCard = styled.div`
  flex-direction: column;
`
