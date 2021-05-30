import { GetStaticProps, GetStaticPaths } from 'next'
import { getPosts, getPost } from '../../api/posts'
import { Post as TPost } from '../../types'

import { Container, Wrapper } from '../../styles/pages/post'
import { Header } from '../../components/Header'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

type PostProps = {
  post: TPost
  source: any
}

export default function Post({ post, source }: PostProps) {
  return (
    <Container>
      <Header />

      <Wrapper>
        <h1>{post.data.title}</h1>

        <div>
          <time>{post.data.createdAt}</time>
        </div>

        <img src={post.data.image} alt="Banner" />

        <MDXRemote {...source} />
      </Wrapper>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts()
  const paths = posts.map(post => {
    return {
      params: { slug: post.data.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPost(String(params.slug))
  const source = await serialize(post.content, {scope: post.data})

  return {
    props: {
      post,
      source
    },
    revalidate: 60 * 60 * 24
  }
}

