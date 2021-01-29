export type PostCardProps = {
  title: string;
  date: string;
  slug: string;
  description: string;
  author: string;
};

export type PageWithPostCardProps = {
  postCardData: PostCardProps;
};

export type PageWithPostArr = {
  posts: PostCardProps[];
};

export type Post = {
  readingTime: {
    text: string;
  };
  frontMatter: {
    title: string;
    date: string;
    description: string;
    author: string;
  };
  slug: string;
  source: any;
};

export type Project = {
  name: string;
  badges: Array<string>;
  description: string;
  githubLink: string;
};

export type PageWithProject = {
  projectData: Project;
};

export type CardProps = {
  data: Project | PostCardProps;
};

export type BadgeProps = {
  data: string;
};

export type BlogSeoProps = {
  title: string;
  date: string;
  description: string;
  author: string;
  url: string;
};

export type Tech = {
  name: string;
  path: string;
};
