import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  max-width: 1260px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Wrapper = styled.section`
  width: 75%;
  max-width: 1480px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin: 1.25rem 0;  

  h1 {
    font: 900 2.5rem "Inter", sans-serif;
    text-align: start;
    margin-bottom: 1.85rem;
  }
`
