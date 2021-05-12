import { Container } from '../styles/components/post-card'

export function PostCard() {
  return (
    <Container>
      <section>
        <h2>How to create a simple CLI in Golang</h2>
        <div>
          <time>May 10</time>
          <span> &bull; 3 minute read</span>
        </div>
      </section>

      <section>
        <p>Create a simple command line interface</p>
      </section>
    </Container>
  )
}
