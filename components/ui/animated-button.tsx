"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { buttonHover } from "@/lib/framer-animations"
import type { ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(({ children, ...props }, ref) => {
  return (
    <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
      <Button ref={ref} {...props}>
        {children}
      </Button>
    </motion.div>
  )
})

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
