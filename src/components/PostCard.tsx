import { Container } from '../styles/components/post-card'
import { Post } from '../types'
import Link from 'next/link'

type PostProps = {
  postData: Post
  href: string;
}

export function PostCard({ postData, href }: PostProps) {
  return (
    <Link href={href}>
      <Container>
        <section>
          <h2>{postData.data.title}</h2>
          <div>
            <time>{postData.data.createdAt}</time>
          </div>
        </section>

        <section>
          <p>{postData.data.description}</p>
        </section>
      </Container>
    </Link>
  )
}
