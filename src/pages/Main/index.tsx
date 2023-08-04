import { Container, P, Page, Text} from './styles'
import { Box } from '../../components/box'
import Perfil from "./../../assets/Manoel.jpg"
import { Foto } from '../../components/img'
import { Logo, Header } from '../../components/Header'
import { AA, NavBar } from '../../components/NavBar'
import  Git  from '../../assets/Git.svg'


export default function Main() {
  return (
    <Page>
        <Header>
          <Logo>Portfólio</Logo>
          <NavBar>
            <AA>Projetos</AA>
            <AA>Experiência</AA>
            <AA>Sobre</AA>
          </NavBar>
        </Header>
      <Container>
        <Foto src={Perfil} alt='Minha foto' />
        <Box>
          <Text>Olá, Meu nome é Manoel Felipe!</Text>
          <P>Tenho afinidade com Front-end mas estou aprentendo Back-end. Aqui você poderá conhecer mais sobre mim, minhas experiências e meus projetos</P>
          <a href='https://github.com/Manoel835'> <img src={Git} alt="github" /></a>
        </Box>
      </Container>
    </Page>
  )
}
