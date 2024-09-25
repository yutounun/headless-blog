import React from "react";
import getCategoryColor from "../helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.sass";
import { client } from "../helpers/client";
import fetchArticles from "../helpers/fetch-articles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetail = async (props: any) => {
  const data = await client.get({
    endpoint: "blogs",
    contentId: props.params.slug,
  });
  const article = data;

  return (
    <>
      <div className="pb-80 container">
        <div>
          <div className="col col_9">
            <div
              className={`h6 mb-20 c-${getCategoryColor(
                article.category.name
              )}`}
            >
              {article.category.name}
            </div>
            <h2 className="mb-50">{article.title}</h2>
            <Image
              className={`${styles.featuredImage} mb-50`}
              src={article.eyecatch.url}
              alt={article.title}
              width="1280"
              height="387"
            />
            <div className={styles.codeBlockContainer}>
              <div
                className="col col_9"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Doesn't give any props to the component, but just creates static page in build time.
export async function generateStaticParams() {
  const articles = await fetchArticles();

  if (articles.contents?.length === 0) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return articles.contents.map((article: any) => ({
    slug: article.id,
  }));
}

export default BlogDetail;
