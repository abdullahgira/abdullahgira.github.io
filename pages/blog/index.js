import DateFormatter from "components/date-formatter"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="container my-10 mx-auto">
      <section className="flex items-center">
        <div className="h-16 w-16 bg-green-400 rounded-full mr-5"></div>
        <div>
          <h3 className="text-md">
            Personal blog by <strong>Abdullah Osama</strong>
          </h3>
          <small>I'm hooked to react.</small>
        </div>
      </section>
      <section className="mt-10">
        {allPosts.length > 0
          ? allPosts.map((post) => <PostPreview key={post.date} {...post} />)
          : null}
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug"])

  return {
    props: {allPosts},
  }
}
