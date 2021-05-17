import styled from 'styled-components'

const CustomP = styled.p`
  color: var(--gray-750);
  font: 400 1rem "Inter";
  line-height: 1.75rem;
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
  pading; 1rem;
  background: var(--light-blue);
  border-left: 6px solid var(--main-blue);
  border-radius: 0.5rem;
  padding-left: 0.8rem;
`

const MDXComponents = {
  p: (props) => <CustomP {...props} />,
  li: (props) => <CustomLi {...props} />,
  code: (props) => <CustomCode {...props} />,
  blockquote: (props) => <CustomQuote {...props} />
}

export default MDXComponents
