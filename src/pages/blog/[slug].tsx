import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import readingTime from 'reading-time';
import externalLinks from 'remark-external-links';
import Header from '../../components/Header';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import { Post as PostType } from '../../types/types';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { BlogSeo } from '../../components/BlogSeo';
import getAllPosts from '../../_lib/blogApi';
import { Wrapper } from '../../components/Wrapper';
import Badge from '../../components/Badge';

const Post = (postData: PostType) => {
  const content = hydrate(postData.source);
  const { colorMode } = useColorMode();

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

          <Wrapper>
            <Flex w="full" align="center">
              {postData.frontMatter.tags.map((tag) => (
                <Badge data={tag} key={tag} />
              ))}
            </Flex>

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

            <img
              src={postData.thumbnailUrl}
              alt={postData.frontMatter.title}
              width="100%"
              height="200px"
              style={{
                marginTop: '1rem',
                marginBottom: '1rem',
                borderRadius: '16px',
                boxShadow: `0 4px 14px ${
                  colorMode === 'light'
                    ? 'rgba(0, 0, 0, 0.5)'
                    : 'rgba(255, 255, 255, 0.18)'
                }`,
              }}
            />
          </Wrapper>

          <Flex w={['90%', null, '48%']} flexDir="column">
            {content}
          </Flex>
        </Flex>

        <Footer />
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
    },
    scope: data,
  });

  const thumbnailUrl =
    process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/thumbnail?title=${data.title}&thumbnail_bg=1b1b1b`
      : `${process.env.NEXT_PUBLIC_PROD_URL}/api/thumbnail?title=${data.title}&thumbnail_bg=1b1b1b`;

  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      thumbnailUrl,
    },
  };
};
