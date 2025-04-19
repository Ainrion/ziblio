import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

import { blogPosts } from "@/lib/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="mr-1 h-4 w-4" />
                {post.category}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              width={1200}
              height={600}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>

          <div className="prose prose-zinc max-w-none dark:prose-invert">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-zinc-600 dark:text-zinc-300 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t dark:border-zinc-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="rounded-lg border p-6 dark:border-zinc-700">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
              <div>
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Content Writer at Ziblio</p>
              </div>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              A passionate writer and digital product enthusiast who loves creating content that helps creative
              professionals succeed in their projects.
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Related Posts</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogPosts
              .filter((p) => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-lg border overflow-hidden bg-white dark:bg-zinc-850 dark:border-zinc-700 transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{relatedPost.date}</div>
                    <h3 className="mt-1 font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
