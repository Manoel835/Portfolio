import styled from "styled-components";

export const Caixa = styled.div`
width: 8vw;
border-radius: 30px;
background-color: ${(props) => props.theme.colors.gray800};

&:hover{
  background: ${(props) => props.theme.colors.gray600};
  transform: translateX(5px) scale(1.02);
}
img{
  width: 5rem;
  height: 5rem;
  padding: 1rem;
}

`
export const Icones= styled.div`
display: flex;
text-align:center;
justify-content:space-evenly;
`
export const IconesS= styled.div`
display: flex;
text-align:center;
justify-content: center;
margin-right: 25px;
margin-left: 55px;
`
