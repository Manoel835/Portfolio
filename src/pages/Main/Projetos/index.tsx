import { Card, Container, Icones, ImgProject, Info, ImgDiv, Page } from './styles'
import icheckbox from '../../../assets/images/icheckbox.png'
import Exemplo from '../../../assets/images/Exemplo.png'

export default function Project() {
  return (
    <Page>
      <Container>
        <Card>
          <h1>Api-GitHub</h1>
          <ImgDiv>
            <ImgProject src={Exemplo} />
            <Info>
              <p>
                Consulta perfis no GitHub através do login do usuário. E retorna todos os
                repositórios do usuário mostrando a descrição e qual linguagem é utilizada.
              </p>
              <h2>Demonstração: <a href='https://api-git-pied.vercel.app/'>https://api-git-pied.vercel.app/</a></h2>
              <h2>GitHub: <a href='https://github.com/Manoel835/Api-Git'>https://github.com/Manoel835/Api-Git</a></h2>
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
      </Container>
    </Page>
  )
}
