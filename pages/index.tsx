import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { GetStaticProps } from "next";
import Link from "next/link";
import Header from "../components/Header";
import ProjectElement from "../components/ProjectElement";
import PostElement from "../components/PostElement";
import getAllPosts from "../lib/blogApi";
import { AboutHomePage } from "../_data/about";
import { Projects } from "../_data/projects";
import { PageWithPostArr } from "../types/types";

const Home: React.FC<PageWithPostArr> = ({ posts }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100vw" h="100vh" alignItems="center" flexDir="column">
      <Flex
        w="70%"
        height="100%"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Header>
          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          />
        </Header>
        <Flex flexDir="column" w="100%">
          <Flex flexDir="column">
            <Heading size="xl" m={6}>
              Hey, I'm Gabriel Tiso ⚡
            </Heading>
            <Text m={6} size="small">
              {AboutHomePage}
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
      </Flex>
    </Flex>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "slug", "description", "title", "author"]);

  return {
    props: { posts },
  };
};
