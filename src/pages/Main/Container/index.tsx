import { Box, Container, Page } from './styles'
import Icones from '../../../components/Icones/index'
import Card from '../../../components/Card'

export function BoxMain() {
  return (
    <Page>
      <Card />
      <Container>
        <Box>
          <h1>Olá, meu nome é Manoel Felipe!</h1>
          <h2>Desenvolvedor Back-End</h2>
          <p>
            Sou um desenvolvedor Back-End. Minha carreira é caracterizada por um comprometimento constante com a aprendizagem contínua e a busca pela excelência técnica.
          </p>
          <p>
            Tenho experiência com Docker, AWS, Node.js, Django e Google Cloud, ferramentas essas que me permitem criar e gerenciar aplicações escaláveis e de alta disponibilidade. Este portfólio é um reflexo do meu percurso profissional e do impacto positivo que minhas habilidades podem trazer para os projetos em que me envolvo.
          </p>
          </Box>
        <Icones />
      </Container>

    </Page>
  )
}
