import { Box, Foto, Container, Page } from './styles'
import Icones from '../../../components/Icones/index'
import Perfil from './../../../assets/images/Manoel.jpg'
import Card from '../../../components/Card'

export function BoxMain() {
  return (
    <Page>
      <Container>
        <Foto src={Perfil} alt='Minhafoto' />
        <Box>
          <h1>Olá, Meu nome é Manoel Felipe !</h1>
          <p>
            Tenho afinidade com Front-end mas estou aprentendo Back-end. Aqui você poderá conhecer
            mais sobre mim, minhas experiências e meus projetos.
          </p>
        </Box>
        <Icones />
      </Container>
      <Card />
    </Page>
  )
}
