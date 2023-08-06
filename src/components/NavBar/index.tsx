import { useNavigate } from "react-router-dom";
import { Bar, AA, Logo, Header } from "./styles";

export function NavBar() {
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
    <Header>
    <Logo>Portfólio</Logo>
    <Bar>
      <AA onClick={ClickProjetos}>Projetos</AA>
      <AA onClick={ClickExperiencia}>Experiência</AA>
      <AA onClick={ClickSobre}>Sobre</AA>
    </Bar>
    </Header>
  )
}
