import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import externalLinks from 'remark-external-links';
import { GetStaticPaths, GetStaticProps } from 'next';
import getAllPosts from '../../utils/blogApi';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Post as PostType } from '../../types/types';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { BlogSeo } from '../../components/BlogSeo';

const Post = (postData: PostType) => {
  const content = hydrate(postData.source);

  return (
    <>
      <BlogSeo
        url={`https://gabriel-tiso-blog.vercel.app/blog/${postData.slug}`}
        {...postData.frontMatter}
      />
      <Flex
        w="full"
        overflowY="hidden"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Header>
            <BackButton />
          </Header>

          <Flex
            w="70%"
            alignItems="flex-start"
            justifyContent="center"
            flexDir="column"
            py={6}
          >
            <Flex>
              <Heading>{postData.frontMatter.title}</Heading>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              w="full"
              py={6}
            >
              <Text fontSize="md">By {postData.frontMatter.author}</Text>
              <Text fontSize="md">{postData.readingTime.text}</Text>
            </Flex>
            {content}
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

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
  const postFilePath = path.join('src/_posts', `${params.slug}.mdx`);
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
