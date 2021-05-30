import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  max-width: 1260px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Wrapper = styled.section`
  width: 60%;
  max-width: 1480px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin: 1.25rem 0;  

  h1 {
    font: 900 2.5rem "Inter", sans-serif;
    margin-bottom: 1.85rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    time, p {
      font: 400 0.95rem "Inter", sans-serif;
      color: var(--gray-250);
    }
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin: 0.875rem 0;
    border: 0;
    border-radius: 0.5rem;
    margin: 3rem 0;
  }

  @media(max-width: 768px) {
    width: 95%;
  }
`
