import {Box,Foto, Container } from './styles';
import  Git  from '../../../assets/svg/Git.svg'
import Linkedin from '../../../assets/svg/Linkedin.svg'
import Instagram from '../../../assets/svg/Instagram.svg'
import Perfil from "./../../../assets/images/Manoel.jpg"
import { Page } from '../styles';

export function BoxMain (){
  return (
    <Page>
      <Container>
          <Foto src={Perfil} alt='Minhafoto' />
        <Box>
          <h1>Olá, Meu nome é <br/> Manoel Felipe !</h1>
          <p>Tenho afinidade com Front-end mas estou aprentendo Back-end. Aqui você poderá conhecer mais sobre mim, minhas experiências e meus projetos</p>
          <a href='https://github.com/Manoel835'> <img src={Git} alt="github" /></a>
          <a href='https://www.linkedin.com/in/manoel-felipe-84194b231/'> <img src={Linkedin} alt='Linkedin'></img></a>
          <a href='https://www.instagram.com/mftneto/'> <img src={Instagram} alt='Linkedin'></img></a>
        </Box>
      </Container>
    </Page>
  )
}
