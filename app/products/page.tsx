"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { products } from "@/lib/products"
import { staggerContainer } from "@/lib/framer-animations"
import { useState } from "react"

export default function ProductsPage() {
  const [category, setCategory] = useState("All Products")
  const categories = ["All Products", ...new Set(products.map((p) => p.category))]

  const filteredProducts = category === "All Products" ? products : products.filter((p) => p.category === category)

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <SectionHeading
          title="Our Products"
          description="Browse our collection of premium digital products designed for creative professionals."
        />

        {/* Filter/Category Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={category === cat ? "default" : "ghost"}
                className="rounded-full"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product, index) => (
            <AnimatedCard key={product.id} delay={index * 0.05}>
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
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2 flex-grow">
                      {product.description}
                    </p>
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

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Try selecting a different category</p>
            <AnimatedButton onClick={() => setCategory("All Products")}>View All Products</AnimatedButton>
          </motion.div>
        )}
      </div>
    </div>
  )
}
