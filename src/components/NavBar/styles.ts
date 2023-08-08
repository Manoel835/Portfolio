import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 90%;
padding: 2rem 9%;
display: flex;
justify-content: space-between;
align-items: center;

a{
  padding:20px;
  cursor: pointer;
}
h1{
  font-size: 3rem;
  font-weight: 600;
  cursor: pointer;
}
`

export const Bar = styled.div`
font-size: 2rem;
margin-left: 10px;`

