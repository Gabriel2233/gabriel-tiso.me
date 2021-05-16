import { GetStaticProps, GetStaticPaths } from 'next'
import { getPosts, getPost } from '../../api/posts'
import { Post as TPost } from '../../types'

type PostProps = {
  post: TPost
}

export default function Post({ post }: PostProps) {
  return (
    <>
      {post.data.title}
    </>
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

  return {
    props: {
      post
    }
  }
}
