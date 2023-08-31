import { Caixa, Icones, IconesS, Box, Button, DivButton, Page } from './styles'
import { useNavigate } from 'react-router-dom'
import Typetypescript from '../../../assets/svg/typescript.svg'
import React from '../../../assets/svg/react.svg'
import javascript from '../../../assets/svg/javascript.svg'
import Node from '../../../assets/svg/node.svg'
import Frame from '../../../assets/svg/Framer.svg'
import styled from '../../../assets/svg/styled.svg'

export default function AboutPage() {
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
        <h1>Informações</h1>
        <p>
          Olá, estou cursando o 6º semestre de Engenharia de Software na UNB, tenho afinidade com
          novas tecnologias e vontade de aprender e experimentar novos segmentos da área. Estou apto
          para trabalhar em ambientes variados e adquirir habilidades e experiências nos desafios
          atuais do setor.
        </p>
        <p>Meu foco é desenvolvedor de aplicações web.</p>
        <p>Principais tecnologias que utilizo:</p>
        <Icones>
          <Caixa>
            <p>
              <img src={Typetypescript} alt='typescript' />
              TypeScript
            </p>
          </Caixa>
          <Caixa>
            <p>
              <img src={javascript} alt='typescript' />
              JavaScript
            </p>
          </Caixa>
          <Caixa>
            <p>
              <img src={React} alt='React' />
              React.js
            </p>
          </Caixa>
          <Caixa>
            <p>
              <img src={Node} alt='typescript' />
              Node.js
            </p>
          </Caixa>
        </Icones>
        <p>Principais bibliotecas que utilizo para estilização:</p>
        <IconesS>
          <Caixa>
            <p>
              <img src={Frame} alt='Framer Motion' />
              Framer Motion{' '}
            </p>
          </Caixa>
          <IconesS>
            <Caixa>
              <p>
                <img src={styled} alt='styled-components' />
                Styled-components
              </p>
            </Caixa>
          </IconesS>
        </IconesS>
        <DivButton>
          <Button onClick={ClickPortfólio}>
            <h1>Voltar</h1>
          </Button>
        </DivButton>
      </Box>
    </Page>
  )
}
