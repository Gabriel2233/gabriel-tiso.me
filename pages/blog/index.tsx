import PostElement from "../../components/PostElement";

import { Heading, Box, Flex, Button, Icon } from "@chakra-ui/core";
import Link from "next/link";
import { GetStaticProps } from "next";
import getAllPosts from "../../lib/blogApi";
import Header from "../../components/Header";
import { PageWithPostArr } from "../../types/types";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

const Blog: React.FC<PageWithPostArr> = ({ posts }) => {
  return (
    <Flex width="100vw" height="100vh" flexDir="column" alignItems="center">
      <Header>
        <BackButton />
      </Header>

      <Flex width={"70%"} flexDir="column" justifyContent="center">
        <Heading size="xl" m={6}>
          Blog
        </Heading>
        {posts.map((post) => (
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={post.slug}>
            <Box>
              <PostElement postData={post} />
            </Box>
          </Link>
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "slug", "title", "description", "author"]);

  return {
    props: { posts },
  };
};
