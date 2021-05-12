import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  div {
    width: 40px;
    height: 40px;
    margin: 0 1rem;
    background: var(--main-blue);
    color: var(--white);
    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    span {
      font-size: 1.75rem;
    }
  }

  h1 {
    font: 700 2rem "Itim", sans-serif;
  }
`
