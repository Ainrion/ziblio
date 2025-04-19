"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedImage } from "@/components/ui/animated-image"
import { AnimatedFeature } from "@/components/ui/animated-feature"
import { products } from "@/lib/products"
import { staggerContainer, fadeInRight, fadeInLeft } from "@/lib/framer-animations"

export default function Home() {
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Premium Digital Products for Creative Professionals
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400"
                >
                  Elevate your projects with high-quality templates, tools, and resources designed for modern creators.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Link href="/products">
                  <AnimatedButton className="px-8">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/about">
                  <AnimatedButton variant="outline" className="px-8">
                    Learn More
                  </AnimatedButton>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="flex items-center justify-center"
            >
              <AnimatedImage
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Digital Products"
                className="rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Featured Products"
            description="Discover our most popular digital products, trusted by thousands of professionals worldwide."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Product Cards */}
            {featuredProducts.map((product, index) => (
              <AnimatedCard key={product.id} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:bg-zinc-850 dark:border-zinc-700 h-full">
                  <Link href={`/products/${product.slug}`} className="block h-full">
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="p-6 flex flex-col h-[calc(100%-33.33%)]">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-zinc-500 dark:text-zinc-400 mt-2 flex-grow">{product.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                        <AnimatedButton size="sm" className="rounded-full">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </AnimatedButton>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <Link href="/products">
              <AnimatedButton variant="outline" className="px-8">
                View All Products
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-800">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose Ziblio"
            description="We're committed to providing the highest quality digital products with exceptional customer support."
          />

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedFeature
              icon={<CheckCircle className="h-6 w-6 text-emerald-500" />}
              title="Premium Quality"
              description="All our products are meticulously crafted to meet professional standards."
              delay={0.1}
            />
            <AnimatedFeature
              icon={<CheckCircle className="h-6 w-6 text-emerald-500" />}
              title="Lifetime Updates"
              description="Purchase once and receive all future updates at no additional cost."
              delay={0.2}
            />
            <AnimatedFeature
              icon={<CheckCircle className="h-6 w-6 text-emerald-500" />}
              title="24/7 Support"
              description="Our dedicated support team is always ready to assist you with any questions."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="What Our Customers Say"
            description="Don't just take our word for it. Here's what our customers have to say about Ziblio."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                quote:
                  "The UI kit I purchased from Ziblio saved me countless hours of development time. The quality is outstanding!",
                name: "Sarah Johnson",
                title: "Web Developer",
              },
              {
                quote:
                  "The social media templates are incredibly versatile and easy to customize. My clients love the results!",
                name: "Michael Chen",
                title: "Marketing Specialist",
              },
              {
                quote:
                  "I've purchased e-book templates from several platforms, but Ziblio's are by far the most professional and well-designed.",
                name: "Emily Rodriguez",
                title: "Content Creator",
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-zinc-850 dark:border-zinc-700 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <svg
                      className="h-8 w-8 text-emerald-500/20 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </motion.div>
                  <p className="text-zinc-500 dark:text-zinc-400">{testimonial.quote}</p>
                  <div className="mt-4 flex items-center">
                    <motion.div
                      className="rounded-full bg-zinc-100 dark:bg-zinc-700 h-10 w-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    ></motion.div>
                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-800">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Stay Updated"
            description="Subscribe to our newsletter to receive updates on new products, special offers, and helpful resources."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md mx-auto space-y-2 mt-8"
          >
            <form className="flex flex-col sm:flex-row gap-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
              >
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AnimatedButton type="submit" className="sm:w-auto">
                  Subscribe
                </AnimatedButton>
              </motion.div>
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs text-zinc-500 dark:text-zinc-400"
            >
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
