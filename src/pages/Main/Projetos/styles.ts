import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled.main`
  background: linear-gradient(24deg, #141518 50.62%, #424449 85.61%);
`

export const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Card = styled(motion.div)`
  width: 80vw;
  border-radius: 30px;
  box-shadow: 1px 1px 50px #424449;
  padding: 1rem;
  h1{
    margin-left: 2rem;
  }
`
export const ImgProject = styled.img`
  height: 45vh;
  padding: 1.5rem;
`
export const ImgDiv = styled.div`
  display: flex;
  p{
    font-size:1.5rem;
  }
`
export const Info = styled.div`
a{
  color: white;
}
`
export const Icones= styled.div`
display: flex;
align-items: center;
`
