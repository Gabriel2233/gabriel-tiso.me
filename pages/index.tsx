import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/core";
import { GetStaticProps } from "next";
import Link from "next/link";
import PostElement, { PostCardProps } from "../components/PostElement";
import getAllPosts from "../lib/blogApi";

interface PageProps {
  allPosts: PostCardProps[];
}

const Home: React.FC<PageProps> = ({ allPosts }) => {
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
        <Flex w="100%" alignItems="center" justifyContent="space-between">
          <Heading size="lg" color="black.300" paddingY={16}>
            Hey, I'm Gabriel Tiso 🚀
          </Heading>

          <Flex>
            <Button borderRadius="sm" marginX={2}>
              Projects
            </Button>
            <Button borderRadius="sm" marginX={2}>
              About
            </Button>
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
          </Flex>
        </Flex>
        <Flex flexDir="column" w="100%">
          {allPosts.map((post: PostCardProps) => (
            <Link
              href="/posts/[slug]"
              as={`/posts/${post.slug}`}
              key={post.slug}
            >
              <Box>
                <PostElement postData={post} />
              </Box>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    "date",
    "slug",
    "description",
    "title",
    "author",
  ]);

  return {
    props: { allPosts },
  };
};
