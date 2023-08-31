import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`
export const Card = styled(motion.div)`
  border-radius: 30px;
  box-shadow: 1px 1px 50px #424449;
  padding: 1rem;
  margin: 2rem;
  h1 {
    margin-left: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 100px) and (max-width: 800px) {
    h1,
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
    width: 80vw;
  }
`
export const ImgProject = styled.img`
  height: 45vh;
  padding: 1.5rem;
  @media screen and (min-width: 100px) and (max-width: 800px) {
    display: none;
  }
`
export const ImgDiv = styled.div`
  display: flex;
`
export const Info = styled.div`
  a {
    color: white;
  }
`
export const Icones = styled.div`
  display: flex;
  align-items: center;
`
