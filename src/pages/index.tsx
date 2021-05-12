import { Container, Wrapper } from '../styles/pages/home'

import { Logo } from '../components/Logo'
import { PostCard } from '../components/PostCard'

export default function Home() {

  return (
    <Container>
      <header>
        <Logo />
      </header>

      <Wrapper>
        <h1>Posts</h1>

        {[1, 2, 3].map(id => (
          <PostCard key={id} />
        ))}
      </Wrapper>
    </Container>
  )
}

