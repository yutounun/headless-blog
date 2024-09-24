import Card from "@/app/components/card/Card";
import { IconTypes } from "./components/button/Button";
// import fetchBlogs from "./helpers/fetch-articles";
import config from "@/app/config";
import { client } from "@/app/helpers/client";

type ArticleType = {
  Title: string;
  Summary: string;
  Slug: string;
  Category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FeaturedImage: any;
};

export default async function Home() {
  // const fetchfeaturedArticles = await fetchBlogs();
  // console.log("🚀 ~ Home ~ fetchfeaturedArticles:", fetchfeaturedArticles);
  // const articles = await fetchBlogs();
  const data = await client.get({ endpoint: "blog" });
  const fetchfeaturedArticles = data;
  const articles = data;

  return (
    <div className="container">
      {fetchfeaturedArticles.contents?.map((article: ArticleType) => (
        <Card
          key={article.Title}
          title={article.Title}
          btnLabel="Read More"
          btnIcon={IconTypes.ARROW_ROGHT}
          summary={article.Summary}
          href={`/${article.Slug}`}
          label={article.Category}
          imgSrc={`${config.api}${article.FeaturedImage.url}`}
          imgAlt={article.Title}
          className="mb-30"
        />
      ))}
      <div className="row">
        {articles.contents?.map((article: ArticleType) => (
          <div className="col col_4 m-mw-100" key={article.Title}>
            <Card
              title={article.Title}
              btnLabel="Read More"
              btnIcon={IconTypes.ARROW_ROGHT}
              summary={article.Summary}
              href={`/${article.Slug}`}
              label={article.Category}
              imgSrc={`${config.api}${article.FeaturedImage.url}`}
              imgAlt={article.Title}
              className="mb-30"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
