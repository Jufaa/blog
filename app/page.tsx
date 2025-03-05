import ArticleItemList from "@/components/ArticleListItem"
import { getCategorisedArticles } from "@/lib/articles"

const HomePage = () => {
  const articles = getCategorisedArticles()

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-opensans font-light text-6xl text-neutral-900 text-center">
        <h1>jufa blog</h1>
        <p className="text-lg p-4">hello, i am Juan Cruz, a software developer with a degree in computer science. i am currently a fullstack developer, but i like many sectors of programming such as, machine learning, video game development and low-level programming. i have a wide variety of languages ​​that i know how to use, but i am always looking to learn and in this blog i will be talking about my process and about the things that i am going to learn. In addition to things about algorithms, projects and others.</p>
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
