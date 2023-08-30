import { Card, Container, Icones, ImgProject, Info, ImgDiv } from './styles'
import icheckbox from '../../../assets/images/icheckbox.png'
import Github from '../../../assets/images/Exemplo.png'
import Sonda from '../../../assets/images/Sonda.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button/styles'
import { Page } from '../styles'

export default function Project() {
  const navigate = useNavigate()
  const ClickPortfólio = () => {
    return navigate('/')
  }
  return (
    <Page>
      <Container
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Card>
          <h1>Api-GitHub</h1>
          <ImgDiv>
            <ImgProject src={Github} />
            <Info>
              <p>
                Consulta perfis no GitHub através do login do usuário. E retorna todos os
                repositórios do usuário mostrando a descrição e qual linguagem é utilizada.
              </p>
              <h2>
                Demonstração:{' '}
                <a href='https://api-git-pied.vercel.app/'>https://api-git-pied.vercel.app/</a>
              </h2>
              <h2>
                GitHub:{' '}
                <a href='https://github.com/Manoel835/Api-Git'>
                  https://github.com/Manoel835/Api-Git
                </a>
              </h2>
              <Icones>
                <img src={icheckbox}></img>
                <a>TypeScript</a>
              </Icones>
              <Icones>
                <img src={icheckbox}></img>
                <a>React.JS</a>
              </Icones>
              <Icones>
                <img src={icheckbox}></img>
                <a>Styled-Components</a>
              </Icones>
            </Info>
          </ImgDiv>
        </Card>
        <Card>
          <h1>Sonda Engenharia</h1>
          <ImgDiv>
            <ImgProject src={Sonda} />
            <Info>
              <p>
                Aplicação web que mantem o controle das Normas Regulamentadora. A onde tem como
                adicionar o certificado das Normas Regulamentadora e saber quando esta perto de
                vencer.
              </p>
              <h2>
                Demonstração:{' '}
                <a href='https://sonda-engenharia-nr.vercel.app/'>
                  https://sonda-engenharia-nr.vercel.app/
                </a>
              </h2>
              <h2>
                GitHub:{' '}
                <a href='https://github.com/mdsreq-fga-unb/2023.1-NRControl'>
                  https://github.com/mdsreq-fga-unb/2023.1-NRControl
                </a>
              </h2>
              <Icones>
                <img src={icheckbox}></img>
                <a>JavaScript</a>
              </Icones>
              <Icones>
                <img src={icheckbox}></img>
                <a>React.JS</a>
              </Icones>
            </Info>
          </ImgDiv>
        </Card>
        <Button onClick={ClickPortfólio}>
          <h1>Voltar</h1>
        </Button>
      </Container>
    </Page>
  )
}
