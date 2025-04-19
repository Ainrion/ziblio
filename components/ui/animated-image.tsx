"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, className, priority = false }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("object-cover", className)}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  )
}
