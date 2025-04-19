"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/products"
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/framer-animations"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter()
  const product = products.find((p) => p.slug === params.slug)
  const [activeImage, setActiveImage] = useState(product?.image || "/placeholder.svg")

  if (!product) {
    router.push("/products")
    return null
  }

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-lg border dark:border-zinc-700"
            >
              <motion.img
                src={activeImage}
                alt={product.name}
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex gap-2 overflow-x-auto pb-2"
            >
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                  activeImage === product.image ? "border-emerald-500" : "border-transparent"
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image || "/placeholder.svg"} alt="Thumbnail" className="w-16 h-16 object-cover" />
              </motion.div>

              {/* Additional thumbnails would be added here in a real product */}
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer rounded-md overflow-hidden border-2 border-transparent"
                  onClick={() => setActiveImage(product.image)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt="Thumbnail"
                    className="w-16 h-16 object-cover opacity-70"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
              >
                {product.category}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-3xl font-bold"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-zinc-600 dark:text-zinc-300"
              >
                {product.description}
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-3xl font-bold"
                >
                  ${product.price.toFixed(2)}
                </motion.span>
                {product.originalPrice && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="ml-2 text-lg text-zinc-500 line-through dark:text-zinc-400"
                  >
                    ${product.originalPrice.toFixed(2)}
                  </motion.span>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center text-sm text-emerald-600 dark:text-emerald-400"
              >
                <Check className="mr-1 h-4 w-4" />
                In stock
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2">
              <AnimatedButton className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </AnimatedButton>
              <AnimatedButton variant="outline" className="w-full">
                Buy Now
              </AnimatedButton>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-lg border p-4 dark:border-zinc-700">
              <h3 className="font-medium">Product Includes:</h3>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300"
              >
                {product.features.map((feature, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-center">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                      <Check className="mr-2 h-4 w-4 text-emerald-500" />
                    </motion.div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6 space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-bold"
              >
                Product Details
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-zinc-600 dark:text-zinc-300"
              >
                {product.longDescription || product.description}
              </motion.p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
              >
                {product.specifications?.map((spec, index) => (
                  <motion.div key={index} variants={fadeInUp} className="rounded-lg border p-4 dark:border-zinc-700">
                    <h4 className="font-medium">{spec.name}</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{spec.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-bold"
                >
                  Customer Reviews
                </motion.h3>
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                  {product.reviews?.map((review, index) => (
                    <motion.div key={index} variants={fadeInUp} className="rounded-lg border p-4 dark:border-zinc-700">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">{review.date}</div>
                      </div>
                      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{review.comment}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="faq" className="mt-6">
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-bold"
                >
                  Frequently Asked Questions
                </motion.h3>
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                  {product.faqs?.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.01 }}
                      className="rounded-lg border p-4 dark:border-zinc-700"
                    >
                      <h4 className="font-medium">{faq.question}</h4>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{faq.answer}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold">Related Products</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <AnimatedCard key={relatedProduct.id} delay={index * 0.1}>
                  <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md dark:bg-zinc-850 dark:border-zinc-700">
                    <Link href={`/products/${relatedProduct.slug}`} className="block">
                      <div className="aspect-video overflow-hidden">
                        <motion.img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">{relatedProduct.name}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-bold">${relatedProduct.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
