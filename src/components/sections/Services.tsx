'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { services } from '@/data/services'
import { ArrowUpRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="services" className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F6F6F5]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader label="SERVICES" watermark="SERVICES" />
          
          <div className="mt-16 flex flex-col">
            {services.map((service, index) => {
              const isActive = activeIndex === index
              return (
                <div key={index} className={cn(
                  "border-b border-[#141414]/10 last:border-b-0 transition-all duration-300",
                  isActive && "shadow-xl shadow-[#22C55E]/10 rounded-2xl bg-white/50",
                  !isActive && "hover:bg-white/40 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 rounded-2xl px-2"
                )}>
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full py-8 px-4 flex items-center justify-between group text-left cursor-pointer"
                  >
                    <h3 className="font-display text-[24px] font-bold text-[#141414] group-hover:text-[#22C55E] transition-colors">
                      {service.title}
                    </h3>
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-[350ms]",
                      isActive ? "bg-[#141414] text-white" : "bg-[#141414]/5 text-[#141414] group-hover:bg-[#22C55E] group-hover:text-white"
                    )}>
                      <AnimatePresence mode="wait">
                        {isActive ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X size={20} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="arrow"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowUpRight size={20} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-[350ms] ease-in-out px-4",
                      isActive ? "max-h-[500px] mb-8 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="bg-[#141414] rounded-xl p-8 md:p-10">
                      <p className="text-[#F6F6F5]/80 text-lg md:text-xl font-body max-w-3xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
