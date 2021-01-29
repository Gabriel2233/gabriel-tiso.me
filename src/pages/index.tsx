import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Projects } from '../_data/projects';
import { PageWithPostArr } from '../types/types';
import { Footer } from '../components/Footer';
import { NextSeo } from 'next-seo';
import { Meta } from '../components/meta';
import { ExternalLink } from '../components/ExternalLink';
import { FiMoon, FiSun } from 'react-icons/fi';

import Link from 'next/link';
import Header from '../components/Header';
import ProjectElement from '../components/ProjectElement';
import PostElement from '../components/PostElement';
import getAllPosts from '../utils/blogApi';

const title = 'Gabriel Tiso - Developer';
const url = 'https://gabriel-tiso-blog.vercel.app';
const description =
  'My personal blog, where I share my thoughts and experiences regarding tech, projects and life.';

const Home: React.FC<PageWithPostArr> = ({ posts }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Meta />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ title, description, url }}
      />
      <Flex w="100vw" h="100vh" alignItems="center" flexDir="column">
        <Flex
          w={['100%', null, '70%']}
          height="100%"
          alignItems="center"
          justifyContent="flex-start"
          flexDir="column"
        >
          <Header>
            <IconButton
              aria-label={`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === 'dark' ? <FiMoon /> : <FiSun />}
            />
          </Header>
          <Flex flexDir="column" w="100%">
            <Flex flexDir="column">
              <Heading size="xl" m={6}>
                Hey, I'm Gabriel Tiso ⚡
              </Heading>
              <Text m={6} size="small">
                Welcome to my blog, where I talk about tech stuff and share my
                knowledgements and experiences with you guys. I built this blog
                using{' '}
                <ExternalLink href="https://nextjs.org"> NextJs</ExternalLink>,{' '}
                <ExternalLink href="https://mdxjs.com">MDX</ExternalLink> and{' '}
                <ExternalLink href="https://chakra-ui.com">
                  ChakraUI
                </ExternalLink>
                , and it was a wonderful experience. I'm more of a practical
                guy, so you'll often see applied examples and projects of
                basically everything that I'll talk about in my posts. Anyway,
                enjoy it :)
              </Text>
            </Flex>

            <>
              <Heading size="xl" m={6}>
                Blog
              </Heading>

              {posts.map((post) => (
                <Link
                  href="/blog/[slug]"
                  as={`/blog/${post.slug}`}
                  key={post.slug}
                >
                  <Box>
                    <PostElement postData={post} />
                  </Box>
                </Link>
              ))}
            </>
          </Flex>

          <Flex flexDir="column" w="full">
            <Heading size="xl" m={6}>
              Projects
            </Heading>

            {Projects.map((project) => (
              <ProjectElement projectData={project} key={project.githubLink} />
            ))}
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'slug', 'description', 'title', 'author']);

  return {
    props: { posts },
  };
};
