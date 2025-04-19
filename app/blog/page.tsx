import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-posts"

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
          <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400">
            Insights, tutorials, and resources for creative professionals.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="rounded-lg border overflow-hidden dark:border-zinc-700">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  width={800}
                  height={500}
                  alt={blogPosts[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">{blogPosts[0].date}</span>
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-2xl font-bold md:text-3xl">{blogPosts[0].title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-300">{blogPosts[0].excerpt}</p>
                  <div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border overflow-hidden bg-white dark:bg-zinc-850 dark:border-zinc-700 transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">{post.date}</span>
                  <span className="text-zinc-300 dark:text-zinc-600">•</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{post.category}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
