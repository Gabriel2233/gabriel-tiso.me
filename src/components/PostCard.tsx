import { Container } from '../styles/components/post-card'
import { Post } from '../types'
import Link from 'next/link'

type PostProps = {
  postData: Post
  href: string;
}

export default function PostCard({ postData, href }: PostProps) {
  return (
    <Link href={href}>
      <Container>
        <section>
          <h2>{postData.data.title}</h2>
          <div>
            <time>{postData.data.createdAt}</time>
            <span>&bull; 3 minute read</span>
          </div>
        </section>

        <section>
          <p>{postData.data.short}</p>
        </section>
      </Container>
    </Link>
  )
}
