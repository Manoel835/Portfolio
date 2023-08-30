import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled(motion.main)`
  background: linear-gradient(24deg, #05161A 50.62%, #294D61 85.61%);
  min-height: 100vh;
  @media screen and (min-width: 320px) and (max-width: 800px){
    width: 100%;
    height: 100%;
  }
`

