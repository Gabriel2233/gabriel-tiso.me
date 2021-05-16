import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  max-width: 1480px;

  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    width: 100%;
    padding: 1.25rem;
  }
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
    line-height: 1.5rem;
    text-align: start;
    margin-bottom: 1.85rem;
  }
`
