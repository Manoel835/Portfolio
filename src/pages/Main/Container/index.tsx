import { Box, Container, Page } from './styles'
import Icones from '../../../components/Icones/index'
import Card from '../../../components/Card'

export function BoxMain() {
  return (
    <Page>
      <Card />
      <Container>
        <Box>
          <h1>Olá, Meu nome é Manoel Felipe !</h1>
          <h1>Desenvolvedor full-stack</h1>
          <p>
            Como desenvolvedor full-stack, minha afinidade se estende desde a criação de interfaces elegantes e responsivas no front-end até o desenvolvimento de soluções robustas para o back-end. Minha jornada profissional é marcada por um compromisso contínuo com a aprendizagem e a excelência técnica, o que é evidenciado nos projetos que tenho o prazer de apresentar neste portfólio.
          </p>
        </Box>
        <Icones />
      </Container>

    </Page>
  )
}
