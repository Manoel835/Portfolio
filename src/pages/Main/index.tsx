import { Page } from './styles'
import { NavBar } from '../../components/NavBar'
import { BoxMain } from '../../components/Container'

export default function Main() {
  return (
    <Page exit={{x: -window.innerWidth}}>
      <NavBar></NavBar>
      <BoxMain></BoxMain>
    </Page>
  )
}
