"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 text-pretty">
            Have questions about our phones or need support? We're here to help you find the perfect device.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
