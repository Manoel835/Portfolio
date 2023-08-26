import { Page } from '../styles'
import {
  Certificate,
  Container,
  Experiencia,
  Box,
  Card,
  Foto,
  DivCard,
  Button,
  DivButton,
  ButtonCerficado
} from './styles'
import Unb from '../../../assets/images/Unb.png'
import { useNavigate } from 'react-router-dom'

export default function Experience() {
  const navigate = useNavigate()
  const ClickPortfólio = () => {
    return navigate('/')
  }
  const ClickJava = () => {
    return navigate("https://cursos.dankicode.com/api/certificados/14daf2bf-0263-436c-9db5-59f9733940c9")
  }
  return (
    <Page>
      <Container>
        <Box>
          <Certificate>
            <h1>Certificados</h1>
            <Card>
              <DivCard>
              <h1>Curso JavaScript Completo</h1>
              <h2>Carga Horária 14 horas</h2>
              </DivCard>
              <ButtonCerficado>
                <a href='https://cursos.dankicode.com/api/certificados/14daf2bf-0263-436c-9db5-59f9733940c9' target="_blank" rel="noreferrer"><p>Certificado</p></a>
              </ButtonCerficado>
            </Card>
          </Certificate>
          <Experiencia>
            <h1>Experiencia</h1>
            <Card>
              <DivCard>
                <h1>Universidade de Brasilia</h1>
                <h2>(Julho de 2021 - Atual)</h2>
              </DivCard>
              <Foto src={Unb}></Foto>
            </Card>
            <DivButton>
              <Button onClick={ClickPortfólio}>
                <h1>Voltar</h1>
              </Button>
            </DivButton>
          </Experiencia>
        </Box>
      </Container>
    </Page>
  )
}
