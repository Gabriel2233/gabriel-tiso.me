import styled from 'styled-components'
import { FiAlertTriangle } from 'react-icons/fi'

const CustomA = styled.a`
  color: var(--main-blue);
  text-decoration: none;

  &:hover {
      text-decoration: underline;
  }

  &:focus {
      color: var(--main-blue);
  }
`

const CustomP = styled.p`
  color: var(--gray-750);
  font: 400 1rem "Inter";
  margin: 1rem 0;
`

const CustomLi = styled.li`
  margin: 0.5rem 0 0.75rem 2rem;
  color: var(--gray-750);
`

const CustomCode = styled.code`
  display: block;
  background: var(--dark-blue);
  white-space: pre;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  max-width: 100%;
  width: 700px;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.7rem 0.5rem;
  min-width: 100px;
  color: white;

  @media(max-width: 1200px) {
      width: 500px;
  }

  @media(max-width: 425px) {
    width: 250px;
  }
`

const CustomQuote = styled.blockquote`
  width: 100%;
  padding: 1rem;
  background: var(--light-blue);
  border-left: 6px solid var(--main-blue);
  border-radius: 0.5rem;
  padding-left: 0.8rem;
`

const WarningContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--light-yellow);
  border-left: 6px solid var(--main-yellow);
  border-radius: 0.5rem;
  padding-left: 0.8rem;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    font-size: 1.5rem;
    margin: 0 0.85rem;
    color: var(--gray-500);
  }

  p {
      margin: 0 0.5rem;
  }
`

const WarningBox = () => {
  return (
    <WarningContainer>
      <span><FiAlertTriangle /></span>
      <p>I'm still writing this post, hopefully it'll be ready soon!</p>
    </WarningContainer>
  )
}

const MDXComponents = {
  p: (props) => <CustomP {...props} />,
  li: (props) => <CustomLi {...props} />,
  code: (props) => <CustomCode {...props} />,
  blockquote: (props) => <CustomQuote {...props} />,
  a: (props) => <CustomA {...props} />,
  WarningBox
}

export default MDXComponents
