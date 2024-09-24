import React from "react";
import getCategoryColor from "../helpers/get-category-color";
import Image from "next/image";
import styles from "./style.module.sass";
import fetchBlogs from "../helpers/fetch-articles";
import config from "../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetail = async (props: any) => {
  const articles = await fetchBlogs(`&filters[Slug][$eq]=${props.params.slug}`);

  if (articles.data.length === 0) return null;

  const article = articles.data[0];

  return (
    <>
      <div className="pb-80 container">
        <div className="row">
          <div className="col col_9">
            <div className={`h6 mb-20 c-${getCategoryColor(article.Category)}`}>
              {article.Category}
            </div>
            <h2 className="mb-50">{article.Title}</h2>
            <Image
              className={`${styles.featuredImage} mb-50`}
              src={`${config.api}/${article.FeaturedImage.url}`}
              alt={article.Title}
              width="1280"
              height="387"
            />
            <div>
              <div
                className="col col_9"
                dangerouslySetInnerHTML={{ __html: article.Content }}
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
  const articles = await fetchBlogs();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return articles.data.map((article: any) => ({
    slug: article.Slug,
  }));
}

export default BlogDetail;
