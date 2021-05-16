import { GetStaticProps } from 'next'

import { Container, Wrapper } from '../styles/pages/home'

import { Logo } from '../components/Logo'
import PostCard from '../components/PostCard'

import { getPosts } from '../api/posts'
import { Post } from '../types'

type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Container>
      <header>
        <Logo />
      </header>

      <Wrapper>
        <h1>Posts</h1>

        {posts.map((post, idx) => (
          <PostCard postData={post} href={`/posts/${post.data.slug}`} key={idx} />
        ))}
      </Wrapper>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}
