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
  const ClickPortfólio = () => {
    return navigate("/");
  }
  return (
    <Header
    initial={{opacity: 0}}
    animate={{opacity: 3}}
    exit={{opacity: 0}} >
    <Logo onClick={ClickPortfólio}>Portfólio</Logo>
    <Bar>
      <AA onClick={ClickProjetos}>Projetos</AA>
      <AA onClick={ClickExperiencia}>Experiência</AA>
      <AA onClick={ClickSobre}>Sobre</AA>
    </Bar>
    </Header>
  )
}
