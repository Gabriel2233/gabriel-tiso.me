import matter from "gray-matter";
import fs from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";
import externalLinks from "remark-external-links";
import { GetStaticPaths, GetStaticProps } from "next";
import getAllPosts from "../../lib/blogApi";
import { Flex } from "@chakra-ui/core";
import { Post as PostType } from "../../types/types";

const Post = (postData: PostType) => {
  const content = hydrate(postData.source);

  console.log(postData);

  return (
    <Flex w="full" overflowY="hidden">
      <div>{content}</div>
    </Flex>
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
