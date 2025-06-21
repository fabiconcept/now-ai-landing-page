"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
  hover?: boolean
}

export function AnimatedCard({ children, className = "", delay = 0, index = 0, hover = true }: AnimatedCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const hoverVariants = hover
    ? {
        scale: 1.02,
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }
    : {}

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverVariants}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}
