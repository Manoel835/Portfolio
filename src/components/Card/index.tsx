import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'


export default function Card() {
  return (
    <Container>
      <Link to="/project">
        <h1>Projetos</h1>
        <p>Aqui verá os meus queridinhos.</p>
      </Link>
      <Link to="/Experience">
        <h1>Certificados</h1>
        <p>Onde esta minhas conquistas.</p>
      </Link>
      <Link to="/About">
        <h1>Sobre</h1>
        <p>Um pouco sobre mim.</p>
      </Link>
    </Container>
  )
}
