"use client";

import { QuoteIcon } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Profile2 from "@/assets/avatars/alec-whitten.jpg";
import Profile1 from "@/assets/avatars/ashwin-santiago.jpg";
import Profile4 from "@/assets/avatars/julien-gournay.jpeg";
import Profile3 from "@/assets/avatars/rene-wells.jpg";
import {
  SectionWrapperBorder,
  SectionWrapperContent,
} from "@/components/section-wrapper";

export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote:
        "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
      from: "Julien Gournay",
      position: "Chief Operating Officer",
      profile_picture: Profile4,
    },
    {
      quote:
        "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
      from: "Ashwin Santiago",
      position: "Operations Manager",
      profile_picture: Profile1,
    },
    {
      quote:
        "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
      from: "Alec Whitten",
      position: "Lead Developer",
      profile_picture: Profile2,
    },
    {
      quote:
        "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
      from: "Rene Wells",
      position: "Customer Success Manager",
      profile_picture: Profile3,
    },
  ];

  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent>
            <LayoutGroup>
              <motion.div
                layout
                className="relative flex gap-12 rounded-3xl border-3 border-gradient px-6 py-16 max-md:flex-col md:mx-10 md:px-10 lg:mx-20 lg:px-16 lg:py-24"
              >
                <QuoteIcon className="-rotate-180 -translate-y-1/2 absolute top-0 size-20 fill-current text-violet-400" />
                <AnimatePresence mode="wait" initial={false}>
                  {TESTIMONIALS.map((testimonial, index) =>
                    selectedTestimonialIndex === index ? (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-12 lg:flex-row"
                        layout
                        key={index}
                      >
                        <p className="font-medium text-xl md:text-2xl">
                          {" "}
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic">
                          <Image
                            src={testimonial.profile_picture}
                            alt={testimonial.from}
                            className="size-28 max-w-none rounded-xl lg:ml-auto"
                          />
                          <div className="mt-4 font-bold lg:w-36 lg:text-right">
                            {testimonial.from}
                          </div>
                          <div className="mt-1 text-muted-foreground text-xs lg:w-36 lg:text-right">
                            {testimonial.position}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null,
                  )}
                </AnimatePresence>
                <motion.div
                  className="flex gap-2 md:flex-col"
                  layout="position"
                >
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className="relative isolate inline-flex size-6 cursor-pointer items-center justify-center"
                      onClick={() => setSelectedTestimonialIndex(index)}
                    >
                      {selectedTestimonialIndex === index && (
                        <motion.div
                          layoutId="testimonial-dot"
                          style={{ animationDuration: "0.5s" }}
                          className="-z-10 absolute size-full rounded-full border-3 border-gradient"
                        />
                      )}
                      <div className="size-1.5 rounded-full bg-white" />
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  );
}
