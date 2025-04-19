import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Ziblio</h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400">
            Premium digital products for creative professionals
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            width={1200}
            height={600}
            alt="Ziblio Team"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Ziblio was founded in 2023 with a simple mission: to provide high-quality digital products that help
            creative professionals work more efficiently and effectively. What started as a small collection of UI
            templates has grown into a comprehensive marketplace offering a wide range of digital resources.
          </p>
          <p className="text-zinc-600 dark:text-zinc-300">
            Our team consists of designers, developers, and digital creators who understand the challenges faced by
            modern professionals. We're passionate about creating products that not only look great but also solve real
            problems.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            At Ziblio, we believe that great design and functionality should be accessible to everyone. Our mission is
            to empower creative professionals with the tools they need to bring their ideas to life, without spending
            countless hours building everything from scratch.
          </p>
          <p className="text-zinc-600 dark:text-zinc-300">
            We're committed to maintaining the highest standards of quality in everything we create, providing
            exceptional customer support, and continuously innovating to meet the evolving needs of our community.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border p-6 dark:border-zinc-700">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                We never compromise on quality. Every product undergoes rigorous testing and refinement before it
                reaches our marketplace.
              </p>
            </div>
            <div className="rounded-lg border p-6 dark:border-zinc-700">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                We're constantly exploring new ideas and technologies to create products that push the boundaries of
                what's possible.
              </p>
            </div>
            <div className="rounded-lg border p-6 dark:border-zinc-700">
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Our customers are at the heart of everything we do. We listen to your feedback and strive to exceed your
                expectations.
              </p>
            </div>
            <div className="rounded-lg border p-6 dark:border-zinc-700">
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                We believe in transparent business practices and honest communication with our customers and partners.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">Alex Johnson</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">Samantha Lee</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Lead Designer</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  width={128}
                  height={128}
                  alt="Team Member"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">David Chen</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
