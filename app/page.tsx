import ArticleItemList from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()

  console.log(articles)
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>jufa blog</h1>
        <p className="text-lg p-4">Hello, I am Juan Cruz, a software developer with a degree in Computer Science. I am currently a fullstack developer, but I like many sectors of programming such as AI, Machine Learning, video game development and low-level programming. I have a wide variety of languages ​​that I know how to use, but I am always looking to learn and in this blog I will be talking about my process and about the things that I am going to learn. In addition to things about algorithms, projects and others.</p>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  )
}

export default HomePage
