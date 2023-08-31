import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Page = styled(motion.main)`
  background: linear-gradient(24deg, #05161a 50.62%, #294d61 85.61%);
  min-height: 100vh;

  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`
