import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} />
    </div>
  )
}

export async function getStaticProps() {
  const source = ""
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
