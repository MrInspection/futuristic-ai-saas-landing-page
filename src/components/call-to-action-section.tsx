"use client"

import {SectionWrapperBorder, SectionWrapperContent} from "@/components/section-wrapper";
import UnderlineImage from "@/assets/images/underline.svg?url"

import {Button} from "@/components/ui/button";
import {OrbitCircle} from "@/components/orbit-circle";
import {MiniGlobe} from "@/components/mini-globe";
import {useMousePosition} from "@/hooks/use-mouse-position";
import {useSpring, useTransform, motion} from "motion/react";

export function CallToActionSection() {
  const {xProgress, yProgress} = useMousePosition()

  const springX = useSpring(xProgress)
  const springY = useSpring(yProgress)

  const translateLargeGlobeX = useTransform(springX, [0, 1], ["-25%", "25%"])
  const translateLargeGlobeY = useTransform(springY, [0, 1], ["-25%", "25%"])
  const translateMediumGlobeX = useTransform(springX, [0, 1], ["-50%", "50%"])
  const translateMediumGlobeY = useTransform(springY, [0, 1], ["-50%", "50%"])
  const translateSmallGlobeX = useTransform(springX, [0, 1], ["-200%", "200%"])
  const translateSmallGlobeY = useTransform(springY, [0, 1], ["-200%", "200%"])

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"/>
            <div className="absolute inset-0 -z-10">
              <OrbitCircle className="size-[200px] border-white/30"/>
              <OrbitCircle className="size-[350px] border-white/30"/>
              <OrbitCircle className="size-[500px] border-white/30"/>
              <OrbitCircle className="size-[650px] border-white/30"/>
              <OrbitCircle className="size-[800px] border-white/30"/>
            </div>
            <div className="absolute-center -z-10">
              <motion.div style={{x: translateLargeGlobeX, y: translateLargeGlobeY}}>
                <MiniGlobe size="lg" className="translate-y-[200px] -translate-x-[200px] rotate-45" />
              </motion.div>
              <motion.div style={{x: translateLargeGlobeX, y: translateLargeGlobeY}}>
                <MiniGlobe size="lg" className="-translate-y-[200px] translate-x-[200px] -rotate-135" />
              </motion.div>
              <motion.div style={{x: translateMediumGlobeX, y: translateMediumGlobeY}}>
                <MiniGlobe size="md" color="teal" className="-translate-x-[500px] rotate-90" />
              </motion.div>
              <motion.div style={{x: translateMediumGlobeX, y: translateMediumGlobeY}}>
                <MiniGlobe size="md" color="teal" className="translate-x-[500px] -translate-y-[100px] -rotate-135" />
              </motion.div>
              <motion.div style={{x: translateSmallGlobeX, y: translateSmallGlobeY}}>
                <MiniGlobe size="sm" color="fuchsia" className="-translate-x-[400px] -translate-y-[250px] rotate-135" />
              </motion.div>
              <motion.div style={{x: translateSmallGlobeX, y: translateSmallGlobeY}}>
                <MiniGlobe size="sm" color="fuchsia" className="translate-x-[400px] translate-y-[150px] -rotate-45" />
              </motion.div>
            </div>
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-center max-w-(--breakpoint-md) mx-auto">
              Join the AI Revolution with <span className="relative isolate">
              <span>Sphereal</span>
              <span
                className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                style={{
                  maskImage: `url(${UnderlineImage.src})`,
                  maskSize: "contain",
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                }}
              />
            </span>
            </h2>
            <p className="text-xl md:text-xl mt-8 text-center max-w-2xl text-pretty mx-auto">
              Experience the transformative power of AI with Sphereal. Boost your productivty and streamline your
              workflow with our AI chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button size="lg">
                Get Started
              </Button>
            </div>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  )
}
