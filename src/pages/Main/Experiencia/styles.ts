import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  background: #000000;
  --gap: 5em;
  --line: 1px;
  --color: rgba(255, 255, 255, 0.2);

  background-image: linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    );
  background-size: var(--gap) var(--gap);

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
  align-items: center;
  justify-content: center;
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
