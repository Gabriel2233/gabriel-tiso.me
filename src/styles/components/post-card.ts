import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #8c8c8c;
  border-radius: 0.35rem;
  transition: border-color 0.2s, color 0.4s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--main-blue);
    color: var(--main-blue);
    transform: translateY(-4px);
  }

  section:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.25rem 0;

    h2 {
      font-size: 1.25rem;
      font-weight: 400;
    }

    div {
      display: flex;
      justify-content: center;
      color: var(--gray-250);
      font-size: 0.8rem;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font: 400 0.85rem "Inter";
      color: var(--gray-250);
      margin: 0.5rem 0;
    }
  }
`
