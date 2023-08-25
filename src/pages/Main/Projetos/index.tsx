import { NavBar } from "../../../components/NavBar";
import { Page } from "../styles";
import { Card, Container, Icones, ImgProject, Info, ImgDiv } from "./styles";
import icheckbox from "../../../assets/images/icheckbox.png"
import Exemplo from "../../../assets/images/Exemplo.png";

export default function Project (){
  return(
    <Page>
      <Container>
        <NavBar></NavBar>
        <Card>
          <h1>Api-GitHub</h1>
          <ImgDiv>
            <ImgProject src={Exemplo}/>
            <Info>
              <p>Consulta perfis no GitHub através do login do usuário. E retorna todos os repositórios do usuário mostrando a descrição e qual linguagem é utilizada.</p>
          <Icones>
            <img src={icheckbox}></img>
            <a>TypeScript</a>
          </Icones>
            </Info>
          </ImgDiv>
        </Card>
      </Container>
    </Page>
  )
}
