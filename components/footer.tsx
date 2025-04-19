"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { navigationLinks } from "@/lib/navigation"

export default function Footer() {
  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ]

  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ]

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t bg-background"
    >
      <div className="container px-4 md:px-6 py-12">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-600">
                Ziblio
              </span>
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Premium digital products for creative professionals.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <motion.ul variants={staggerChildren} className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <motion.li key={link.name} variants={fadeInUp}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <motion.ul variants={staggerChildren} className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <motion.li key={link.name} variants={fadeInUp}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <motion.ul variants={staggerChildren} className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <motion.li key={link.name} variants={fadeInUp}>
                  <motion.a
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border-t pt-8"
        >
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Ziblio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
