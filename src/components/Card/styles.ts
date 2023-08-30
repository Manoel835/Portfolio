import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-family: Inter;
    font-size: 2.5rem;
    font-weight: 400;
    align-items: center;
    padding-left: 10px;

  }
  p {
    font-family: Inter;
    font-size: 2rem;
    font-weight: 400;
    padding: 10px;
  }
  @media screen and (max-width: 800px){
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
    .LineP,
    .LineS{
      display: none;
    }
  }
`
export const BoxP = styled.div`
  width: 19.5rem;
  height: 13.3rem;
  border-radius: 0rem 1.25rem 1.25rem 0rem;
  background: #294d61;
  margin-right: 10rem;
  cursor: pointer;
  &:hover{
    transform: translateX(5px) scale(1.02);
  }
  @media screen and (max-width: 800px) {
  margin-right: 0;
  margin-bottom: 20px;
}
`
export const BoxC = styled.div`
  width: 19.5rem;
  height: 13.3rem;
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  background: #294d61;
  cursor: pointer;
  &:hover{
    transform: translateX(5px) scale(1.02);
  }

`
export const BoxS = styled.div`
  width: 19.5rem;
  height: 13.3rem;
  border-radius: 1.25rem 0rem 0rem 1.25rem;
  background: #294d61;
  margin-left: 10rem;
  cursor: pointer;
  &:hover{
    transform: translateX(5px) scale(1.02);
  }
  @media screen and (max-width: 800px) {
  margin-left: 0;
  margin-top: 20px;
}
`
export const LineP = styled.div`
  width: 2.5px;
  height: 13rem;
  background-color: white;
  border-radius: 30px;
  margin-right: 10px;
`
export const LineS = styled.div`
  width: 2.5px;
  height: 13rem;
  background-color: white;
  border-radius: 30px;
  margin: 0 10px 0 10px;
`
