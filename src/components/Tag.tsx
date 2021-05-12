import { Container } from '../styles/components/tag'

type TagProps = {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <Container>
      <p>#{title}</p>
    </Container>
  )
}
