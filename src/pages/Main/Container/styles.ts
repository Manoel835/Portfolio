import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
export const Container = styled(motion.div)`
  width: 90vw;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
  }
  p {
    color: #fff;
    text-align: justify;
    font-family: Inter;
    font-size: 1.5625rem;
    font-weight: 400;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
  }
`
export const Box = styled.div`
  width: 50vw;
  padding: 2rem;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    h1,
    p {
      font-size: 1.1rem;
    }
    height: 8rem;
    width: 15rem;
  }
`

export const Foto = styled.img`
  width: 19vw;
  border-radius: 1.25rem;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
