import { Page } from "../styles"
import { Container } from "../Container/styles"
import { Info, Caixa, Icones, IconesS } from "./styles"
import  Type  from '../../../assets/typescript.svg'
import React from '../../../assets/react.svg'
import javascript from '../../../assets/javascript.svg'
import Node from '../../../assets/node.svg'
import Frame from '../../../assets/Framer.svg'
import styled from '../../../assets/styled.svg'
import { NavBar } from "../../../components/NavBar"
import { Box } from "../../../components/Box/styled"

export default function AboutPage(){

  return(
    <Page>
      <Container>
      <NavBar></NavBar>
        <Box>
          <h1>Informações</h1>
          <p>Olá, estou cursando o 6º semestre de Engenharia de Software na UNB, tenho afinidade com novas tecnologias e vontade de aprender e experimentar novos segmentos da área. Estou apto para trabalhar em ambientes variados e adquirir habilidades e experiências nos desafios atuais do setor.</p>
          <p>Meu foco é desenvolvedor de aplicações web e mobile</p>
          <p>Principais tecnologias que utilizo:</p>
          <Icones>
            <Caixa><a><img src={Type} alt="typescript" />TypeScript</a></Caixa>
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
        </Box>
      </Container>
    </Page>
  )
}
