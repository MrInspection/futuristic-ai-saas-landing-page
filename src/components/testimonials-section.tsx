"use client"

import Profile1 from "@/assets/avatars/ashwin-santiago.jpg"
import Profile2 from "@/assets/avatars/alec-whitten.jpg"
import Profile3 from "@/assets/avatars/rene-wells.jpg"
import Profile4 from "@/assets/avatars/julien-gournay.jpeg"
import {SectionWrapperBorder, SectionWrapperContent} from "@/components/section-wrapper";
import {useState} from "react";
import Image from "next/image";
import {QuoteIcon} from "lucide-react";
import {AnimatePresence, LayoutGroup, motion} from "motion/react"

export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote: "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
      from: "Julien Gournay",
      position: "Chief Operating Officer",
      profile_picture: Profile4,
    },
    {
      quote: "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
      from: "Ashwin Santiago",
      position: "Operations Manager",
      profile_picture: Profile1,
    },
    {
      quote: "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
      from: "Alec Whitten",
      position: "Lead Developer",
      profile_picture: Profile2,
    },
    {
      quote: "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
      from: "Rene Wells",
      position: "Customer Success Manager",
      profile_picture: Profile3,
    }
  ]

  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient border-3 rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex max-md:flex-col gap-12 md:mx-10 lg:mx-20"
              >
                <QuoteIcon className="size-20 -rotate-180 text-violet-400 fill-current absolute top-0 -translate-y-1/2"/>
                <AnimatePresence mode="wait" initial={false}>
                  {TESTIMONIALS.map((testimonial, index) => (
                    selectedTestimonialIndex === index ? (
                      <motion.blockquote
                        initial={{opacity: 0, y: 25}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 25}}
                        transition={{duration: 0.5}}
                        className="flex flex-col lg:flex-row gap-12"
                        layout
                        key={index}
                      >
                        <p className="text-xl md:text-2xl font-medium"> {testimonial.quote}</p>
                        <cite className="not-italic">
                          <Image
                            src={testimonial.profile_picture} alt={testimonial.from}
                            className="rounded-xl size-28 max-w-none lg:ml-auto"
                          />
                          <div className="font-bold mt-4 lg:text-right lg:w-36">{testimonial.from}</div>
                          <div className="text-xs text-muted-foreground mt-1 lg:text-right lg:w-36">
                            {testimonial.position}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  ))}
                </AnimatePresence>
                <motion.div className="flex md:flex-col gap-2" layout="position">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedTestimonialIndex(index)}
                    >
                      {selectedTestimonialIndex === index && (
                        <motion.div
                          layoutId="testimonial-dot" style={{animationDuration: "0.5s"}}
                          className="absolute border-gradient border-3 size-full rounded-full -z-10"
                        />
                      )}
                      <div className="size-1.5 bg-white rounded-full"/>
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  )
}
