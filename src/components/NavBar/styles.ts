import { motion } from "framer-motion";
import styled from "styled-components";

export const Bar = styled.div`
font-size: 2rem;
margin-left: 10px;`

export const AA = styled.a`
padding:20px;
cursor: pointer;
`

export const Logo = styled.a`
font-size: 3rem;
font-weight: 600;
cursor: pointer;
`
export const Header = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 90%;
padding: 2rem 9%;
display: flex;
justify-content: space-between;
align-items: center;
`
