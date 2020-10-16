import { NextSeo, ArticleJsonLd } from "next-seo";
import { BlogSeoProps } from "../types/types";

export const BlogSeo: React.FC<BlogSeoProps> = ({
  title,
  date,
  description,
  author,
  url,
}) => {
  return (
    <>
      <NextSeo
        title={`${title} - ${author}`}
        description={description}
        canonical={url}
        openGraph={{
          type: "article",
          article: { publishedTime: date },
          url,
          title,
          description,
        }}
      />
      <ArticleJsonLd
        authorName="Gabriel Tiso"
        dateModified={date}
        datePublished={date}
        description={description}
        images={[]}
        publisherLogo="/favicon/blog-icon.png"
        publisherName="Gabriel Tiso"
        title={title}
        url={url}
      />
    </>
  );
};
