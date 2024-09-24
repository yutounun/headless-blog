import Card from "@/app/components/card/Card";
import { IconTypes } from "./components/button/Button";
import { ArticleType } from "./type";
import fetchArticles from "./helpers/fetch-articles";

export default async function Home() {
  const articles = await fetchArticles();
  const filteredArticles = await fetchArticles({
    filters: "isFavorite[equals]true",
  });

  return (
    <div className="container">
      {filteredArticles.contents?.map((filteredArticle: ArticleType) => (
        <Card
          key={filteredArticle.title}
          title={filteredArticle.title}
          btnLabel="Read More"
          btnIcon={IconTypes.ARROW_ROGHT}
          summary={filteredArticle.summary}
          href={`/${filteredArticle.id}`}
          label={filteredArticle.category.name}
          imgAlt={filteredArticle.title}
          imgSrc={filteredArticle.eyecatch.url}
          className="mb-30"
        />
      ))}
      <div className="row">
        {articles.contents?.map((article: ArticleType) => (
          <div key={article.title} className="col col_4">
            <Card
              title={article.title}
              btnLabel="Read More"
              btnIcon={IconTypes.ARROW_ROGHT}
              summary={article.summary}
              href={`/${article.id}`}
              label={article.category.name}
              imgAlt={article.title}
              imgSrc={article.eyecatch.url}
              className="mb-30 m-mw-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
