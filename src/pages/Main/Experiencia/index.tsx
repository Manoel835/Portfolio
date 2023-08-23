import { Box } from "../../../components/Box/styled";
import { NavBar } from "../../../components/NavBar";
import { Page } from "../styles";
import { Certificate, Container } from "./styles";

export default function Experience (){
  return (
    <Page>
      <Container>
        <NavBar></NavBar>
        <Box>
          <Certificate>
            <h1>Certificados</h1>
            <h1>Experiencia</h1>
          </Certificate>
        </Box>
      </Container>
    </Page>
  )
}
