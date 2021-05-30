import { Container } from '../styles/components/logo'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" passHref>
      <Container>
        <div>
          <span>&bull;</span>
        </div>
        <h1>tiso</h1>
      </Container>
    </Link>
  )
}
