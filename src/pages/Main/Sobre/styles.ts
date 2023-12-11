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

export const Caixa = styled.div`
  width: 8vw;
  border-radius: 30px;
  &:hover {
    transform: translateX(5px) scale(1.02);
  }
  img {
    width: 5rem;
    height: 5rem;
    padding: 1rem;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: auto;
  }
`
export const Icones = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;

  @media screen and (min-width: 320px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const IconesS = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 25px;
  margin-left: 55px;
  @media screen and (min-width: 320px) {
    margin-right: 0px;
    margin-left: 0px;
    justify-content: space-evenly;
  }
`
export const Box = styled(motion.div)`
  width: 50vw;
  border-radius: 30px;
  box-shadow: 1px 1px 50px #424449;
  padding: 1rem;
  h1,
  p {
    text-align: center;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 80vw;
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
  background: linear-gradient(24deg, #000000 50.62%, #333333 85.61%);
  border-radius: 20px;
  cursor: pointer;
  border: none;
  h1 {
    color: white;
  }
  &:hover {
    transform: translateX(5px) scale(1.02);
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: auto;
  }
`
