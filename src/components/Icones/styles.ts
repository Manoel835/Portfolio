import styled from 'styled-components'
export const Container = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .line {
    margin-right: 5px;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 100vw;
    flex-direction: row;
    align-items: center;
    margin-top: 130px;
  }
`
export const Line = styled.div`
  width: 2.5px;
  height: 45px;
  background-color: white;
  border-radius: 30px;
  &:hover {
    background: black;
    transform: scale(1.1);
  }
`
