import {
  Certificate,
  Experiencia,
  Box,
  Card,
  DivCard,
  DivButton,
  ButtonCerficado,
  Page,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button/styles'

export default function Experience() {
  const navigate = useNavigate()
  const ClickPortfólio = () => {
    return navigate('/')
  }
  return (
    <Page>
      <Box
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Certificate>
          <h1>Certificados</h1>
          <Card>
            <DivCard>
              <h1>Curso JavaScript Completo</h1>
              <h2>Carga Horária 14 horas</h2>
            </DivCard>
            <ButtonCerficado>
              <a
                href='https://cursos.dankicode.com/api/certificados/14daf2bf-0263-436c-9db5-59f9733940c9'
                target='_blank'
                rel='noreferrer'
              >
                <p>Certificado</p>
              </a>
            </ButtonCerficado>
          </Card>
          <Card>
            <DivCard>
              <h1>Curso Front-end Completo</h1>
              <h2>Carga Horária 10 horas</h2>
            </DivCard>
            <ButtonCerficado>
              <a
                href='https://cursos.dankicode.com/api/certificados/fd3d3c1c-591e-47c8-a377-84fc3b47074c'
                target='_blank'
                rel='noreferrer'
              >
                <p>Certificado</p>
              </a>
            </ButtonCerficado>
          </Card>
          <Card>
            <DivCard>
              <h1>JavaScript Avançado</h1>
              <h2>Carga Horária 8 horas</h2>
            </DivCard>
            <ButtonCerficado>
              <a
                href='https://class.devsamurai.com.br/certificates/c3056c7f-e370-4cdc-86fd-8198e86f0cf8'
                target='_blank'
                rel='noreferrer'
              >
                <p>Certificado</p>
              </a>
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
          </Card>
          <Card>
            <DivCard>
              <h1>Cria Incubator</h1>
              <h2>(Outubro de 2023 - Atual)</h2>
            </DivCard>
          </Card>
          <DivButton>
            <Button onClick={ClickPortfólio}>
              <h1>Voltar</h1>
            </Button>
          </DivButton>
        </Experiencia>
      </Box>
    </Page>
  )
}
