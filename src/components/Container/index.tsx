import {Box, Text, P, Foto, Container } from './styles';
import  Git  from '../../assets/Git.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Instagram from '../../assets/Instagram.svg'
import Perfil from "./../../assets/Manoel.jpg"

export function BoxMain (){
  return (
    <Container>
      <Foto src={Perfil} alt='Minhafoto' />
    <Box>
      <Text>Olá, Meu nome é Manoel Felipe!</Text>
      <P>Tenho afinidade com Front-end mas estou aprentendo Back-end. Aqui você poderá conhecer mais sobre mim, minhas experiências e meus projetos</P>
      <a href='https://github.com/Manoel835'> <img src={Git} alt="github" /></a>
      <a href='https://www.linkedin.com/in/manoel-felipe-84194b231/'> <img src={Linkedin} alt='Linkedin'></img></a>
      <a href='https://www.instagram.com/mftneto/'> <img src={Instagram} alt='Linkedin'></img></a>
    </Box>
    </Container>
  )
}
