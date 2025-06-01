"use client"

import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import Image from "next/image";
import RobotImage from "@/assets/images/robot.jpg"
import UnderlineImage from "@/assets/images/underline.svg?url"
import {OrbitCircle} from "@/components/orbit-circle";
import {MiniGlobe} from "@/components/mini-globe";
import {motion, useScroll, useSpring, useTransform} from "motion/react"
import {useRef} from "react";
import {useMousePosition} from "@/hooks/use-mouse-position";
import {SectionWrapperBorder, SectionWrapperContent} from "@/components/section-wrapper";

export function HeroSection() {
  const {xProgress, yProgress} = useMousePosition()
  const sectionRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"]
  })
  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200])

  const springX = useSpring(xProgress)
  const springY = useSpring(yProgress)

  const translateLargeGlobeX = useTransform(springX, [0, 1], ["-25%", "25%"])
  const translateLargeGlobeY = useTransform(springY, [0, 1], ["-25%", "25%"])
  const translateMediumGlobeX = useTransform(springX, [0, 1], ["-50%", "50%"])
  const translateMediumGlobeY = useTransform(springY, [0, 1], ["-50%", "50%"])
  const translateSmallGlobeX = useTransform(springX, [0, 1], ["-200%", "200%"])
  const translateSmallGlobeY = useTransform(springY, [0, 1], ["-200%", "200%"])

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionWrapperBorder>
          <SectionWrapperContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-violet-400)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]">
              <div className="absolute inset-0 -z-10">
                <OrbitCircle className="size-[350px] border-white/70"/>
                <OrbitCircle className="size-[600px] border-white/70"/>
                <OrbitCircle className="size-[850px] border-white/70"/>
                <OrbitCircle className="size-[1100px] border-white/70"/>
                <OrbitCircle className="size-[1350px] border-white/70"/>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-tight front-semibold text-center max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
                Unlock the Future of AI Conversations with {" "}
                <span className="relative">
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
              </h1>
              <p className="text-center text-lg md:text-xl text-white/70 mt-8 max-w-(--breakpoint-md)">
                Harness the power of AI with Sphereal. Elevate your productivity and streamline your workflow with our
                cutting-edge AI chat platform.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="mt-10">Start Chatting</Button>
            </div>
            <section className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <motion.div style={{x: translateLargeGlobeX, y: translateLargeGlobeY}}>
                  <MiniGlobe className="-translate-x-[315px] -translate-y-[75px]"/>
                </motion.div>
                <motion.div style={{x: translateLargeGlobeX, y: translateLargeGlobeY}}>
                  <MiniGlobe className="translate-x-[335px] -translate-y-[185px] -rotate-135"/>
                </motion.div>
                <motion.div style={{x: translateMediumGlobeX, y: translateMediumGlobeY}}>
                  <MiniGlobe size="md" color="teal" className="-translate-y-[340px] translate-x-[485px] -rotate-135"/>
                </motion.div>
                <motion.div style={{x: translateSmallGlobeX, y: translateSmallGlobeY}}>
                  <MiniGlobe size="sm" color="fuchsia" className="-translate-y-[370px] -translate-x-[510px]"/>
                </motion.div>
              </div>
              <div className="absolute left-0 z-10 w-72 top-[30%] -translate-x-10 max-lg:hidden">
                <motion.div
                  style={{y: transformedY}}
                  className="bg-neutral-800/70 p-4 rounded-xl backdrop-blur-md border"
                >
                  <p>Can you generate an incredible frontend dev video tutorial?</p>
                  <p className="text-sm text-muted-foreground mt-1 text-right">1m ago</p>
                </motion.div>
              </div>
              <div className="absolute right-0 z-10 w-72 top-[50%] translate-x-10 max-lg:hidden">
                <motion.div
                  style={{y: transformedY}}
                  className="bg-neutral-800/70 p-4 rounded-xl backdrop-blur-md border"
                >
                  <p>Brainwave: I created one base on videos from Spectron!</p>
                  <p className="text-sm text-muted-foreground mt-1 text-right">Just now</p>
                </motion.div>
              </div>
              <div className="mt-20 rounded-3xl border-2 lg:border-4 border-gradient overflow-hidden relative flex">
                <Image src={RobotImage} alt="AyRobot" className="aspect-video h-full w-auto" draggable={false}/>
                <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 max-w-sm px-4">
                  <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-2xl">
                    <Loader2 className="size-4 animate-spin text-violet-400"/>
                    <p className="text-xl font-medium text-gray-100">AI is generating
                      <span className="animate-caret-blink">|</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  )
}
