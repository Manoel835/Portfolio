import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  h1 {
    color: #fff;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;
