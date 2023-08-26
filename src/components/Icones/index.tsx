import React from 'react'
import { Container, Line } from './styles'
import Git from '../../assets/svg/Git.svg'
import Linkedin from '../../assets/svg/Linkedin.svg'
import Instagram from '../../assets/svg/Instagram.svg'

export default function Icones() {
  return (
    <Container>
      <Line>
        <span className='line'></span>
        <a href='https://github.com/Manoel835'>
          <img src={Git} alt='github' />
        </a>
      </Line>
      <Line>
      <span className='line'></span>
        <a href='https://www.linkedin.com/in/manoel-felipe-84194b231/'>
          <img src={Linkedin} alt='Linkedin'></img>
        </a>
      </Line>
      <Line>
      <span className='line'></span>
        <a href='https://www.instagram.com/mftneto/'>
          <img src={Instagram} alt='Linkedin'></img>
        </a>
      </Line>
    </Container>
  )
}
