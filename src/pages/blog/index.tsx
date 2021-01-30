import Link from 'next/link';
import Header from '../../components/Header';
import getAllPosts from '../../_lib/blogApi';
import React from 'react';
import { PageWithPostArr, PostCardProps } from '../../types/types';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { Heading, Flex, Input, Text } from '@chakra-ui/react';
import { Footer } from '../../components/Footer';
import { BackButton } from '../../components/BackButton';
import { Meta } from '../../components/meta';
import { Wrapper } from '../../components/Wrapper';
import { MainCard } from '../../components/MainCard';
import { formatDate } from '../../utils/formatDate';

const title = 'Blog - Gabriel Tiso';
const url = 'https://gabriel-tiso-blog.vercel.app/blog';
const description =
  'This is where I share my ideas and knowledgements with the world.';

const Blog: React.FC<PageWithPostArr> = ({ posts }) => {
  return (
    <>
      <Meta />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Flex width="100vw" height="100vh" flexDir="column" alignItems="center">
        <Header>
          <BackButton />
        </Header>

        <Wrapper>
          <Heading size="xl" m={6}>
            Blog
          </Heading>
          {posts.map((post: PostCardProps, idx) => (
            <MainCard
              title={post.title}
              description={post.description}
              linkTo={`blog/${post.slug}`}
            >
              <Text color="gray.600" pl={8} pr={4} py={[4, null, 0]}>
                {formatDate(post.date)} ago
              </Text>
            </MainCard>
          ))}
        </Wrapper>
        <Footer />
      </Flex>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'slug', 'title', 'description', 'author']);

  return {
    props: { posts },
  };
};
