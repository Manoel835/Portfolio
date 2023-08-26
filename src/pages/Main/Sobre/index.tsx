import { Page } from "../styles"
import {Caixa, Icones, IconesS, Container, Box, Button, DivButton} from "./styles"
import { useNavigate } from "react-router-dom"
import  Typetypescript  from '../../../assets/svg/typescript.svg'
import React from '../../../assets/svg/react.svg'
import javascript from '../../../assets/svg/javascript.svg'
import Node from '../../../assets/svg/node.svg'
import Frame from '../../../assets/svg/Framer.svg'
import styled from '../../../assets/svg/styled.svg'


export default function AboutPage(){
  const navigate = useNavigate();
  const ClickPortfólio = () => {
    return navigate("/");
  }
  return(
    <Page>
      <Container>
        <Box>
          <h1>Informações</h1>
          <p>Olá, estou cursando o 6º semestre de Engenharia de Software na UNB, tenho afinidade com novas tecnologias e vontade de aprender e experimentar novos segmentos da área. Estou apto para trabalhar em ambientes variados e adquirir habilidades e experiências nos desafios atuais do setor.</p>
          <p>Meu foco é desenvolvedor de aplicações web e mobile</p>
          <p>Principais tecnologias que utilizo:</p>
          <Icones>
            <Caixa><a><img src={Typetypescript} alt="typescript" />TypeScript</a></Caixa>
            <Caixa><a><img src={javascript} alt="typescript"/>JavaScript</a></Caixa>
            <Caixa><a><img src={React} alt="React"/>React.js</a></Caixa>
            <Caixa><a><img src={Node} alt="typescript"/>Node.js</a></Caixa>
          </Icones>
          <p>Principais bibliotecas que utilizo para estilização:</p>
          <IconesS>
            <Caixa><a><img src={Frame} alt="Framer Motion"/>Framer Motion </a></Caixa>
            <IconesS>
            <Caixa><a><img src={styled} alt="styled-components" />Styled-components</a></Caixa>
            </IconesS>
          </IconesS>
          <DivButton>
          <Button onClick={ClickPortfólio}>
            <h1>Voltar</h1>
          </Button>
          </DivButton>
        </Box>
      </Container>
    </Page>
  )
}
