import React from 'react'
import { BoxC, BoxP, BoxS, Container, LineP, LineS } from './styles'
import { useNavigate } from 'react-router-dom'

export default function Card() {
  const navigate = useNavigate();
  const ClickProjetos = () => {
    return navigate("/project");
  }
  const ClickExperiencia = () => {
    return navigate("/Experience");
  }
  const ClickSobre = () => {
    return navigate("/About");
  }
  return (
    <Container>
      <LineP className='LineP'/>
      <BoxP onClick={ClickProjetos}>
        <h1>Projetos</h1>
        <p>Aqui verá os meus queridinhos.</p>
      </BoxP>
      <BoxC onClick={ClickExperiencia}>
        <h1>Certificados</h1>
        <p>Onde esta minhas conquistas. </p>
      </BoxC>
      <BoxS onClick={ClickSobre}>
        <h1>Sobre</h1>
        <p>Um pouco sobre mim.</p>
      </BoxS>
      <LineS className='LineS'/>
    </Container>
  )
}
