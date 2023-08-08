import { useNavigate } from "react-router-dom";
import { Bar, Header } from "./styles";

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
    <h1 onClick={ClickPortfólio}>Portfólio</h1>
    <Bar>
      <a onClick={ClickProjetos}>Projetos</a>
      <a onClick={ClickExperiencia}>Experiência</a>
      <a onClick={ClickSobre}>Sobre</a>
    </Bar>
    </Header>
  )
}
