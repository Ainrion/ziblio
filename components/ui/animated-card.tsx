"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cardHover } from "@/lib/framer-animations"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay,
          },
        },
      }}
      whileHover="hover"
      variants={cardHover}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  )
}
