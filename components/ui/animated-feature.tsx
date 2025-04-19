"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  delay?: number
}

export function AnimatedFeature({ icon, title, description, className, delay = 0 }: AnimatedFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={cn("flex flex-col items-center space-y-2 text-center", className)}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
        className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-700"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
    </motion.div>
  )
}
