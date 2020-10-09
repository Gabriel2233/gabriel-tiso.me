import matter from "gray-matter";
import fs from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";
import externalLinks from "remark-external-links";
import { GetStaticPaths, GetStaticProps } from "next";
import getAllPosts, { getPostBySlug, getPostSlugs } from "../../lib/blogApi";

const Post = (props) => {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const postFilePath = path.join("_posts", `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [externalLinks],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
    },
  };
};
