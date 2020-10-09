import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import getAllPosts from "../lib/blogApi";

interface Post {
  date: string;
  description: string;
  slug: string;
  title: string;
}

interface Props {
  allPosts: Post[];
}

const Home: React.FC<Props> = ({ allPosts }) => {
  console.log(allPosts);

  return (
    <div>
      <h1>Hello App</h1>

      <div>
        {allPosts.map((post: Post) => (
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`} key={post.slug}>
            <a href="#">{post.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["date", "slug", "description", "title"]);

  return {
    props: { allPosts },
  };
};
