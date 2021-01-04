import Link from "next/link"
import Head from "next/head"
import {useState} from "react"
import DateFormatter from "./date-formatter"

export default function PostLayout({children, meta: pageMeta}) {
  const [theme, setTheme] = useState("okaidia")
  const meta = {
    title: "",
    description: "",
    socialImage: "",
    ...pageMeta,
  }

  return (
    <div className="px-5">
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.socialImage} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>
      <div id="skip">
        <section className="max-w-2xl m-auto my-4 sm:my-16">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold mb-4">{meta.title}</h1>
            <div className="flex gap-3 font-semibold">
              <p>
                <DateFormatter dateString={meta.date} />
              </p>
              <p>•</p>
              <p className="text-indigo-500">{meta.readTime} Min Read</p>
            </div>
          </div>

          <article
            className="prose"
            dangerouslySetInnerHTML={{__html: children}}
          />
        </section>
      </div>
    </div>
  )
}
