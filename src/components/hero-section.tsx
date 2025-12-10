"use client";

import { Loader2 } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import RobotImage from "@/assets/images/robot.jpg";
import UnderlineImage from "@/assets/images/underline.svg?url";
import { MiniGlobe } from "@/components/mini-globe";
import { OrbitCircle } from "@/components/orbit-circle";
import {
  SectionWrapperBorder,
  SectionWrapperContent,
} from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function HeroSection() {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeGlobeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const translateLargeGlobeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const translateMediumGlobeX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const translateMediumGlobeY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const translateSmallGlobeX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallGlobeY = useTransform(springY, [0, 1], ["-200%", "200%"]);

  return (
    <section ref={sectionRef}>
      <div className="container">
        <SectionWrapperBorder>
          <SectionWrapperContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-violet-400)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]">
              <div className="-z-10 absolute inset-0">
                <OrbitCircle className="size-[350px] border-white/30" />
                <OrbitCircle className="size-[600px] border-white/30" />
                <OrbitCircle className="size-[850px] border-white/30" />
                <OrbitCircle className="size-[1100px] border-white/30" />
                <OrbitCircle className="size-[1350px] border-white/30" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="front-semibold max-w-(--breakpoint-md) text-center text-4xl leading-tight md:text-5xl lg:max-w-(--breakpoint-lg) lg:text-6xl">
                Unlock the Future of AI Conversations with{" "}
                <span className="relative">
                  <span>Sphereal</span>
                  <span
                    className="-translate-y-1/2 absolute top-full left-0 h-4 w-full bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                    style={{
                      maskImage: `url(${UnderlineImage.src})`,
                      maskSize: "contain",
                      maskPosition: "center",
                      maskRepeat: "no-repeat",
                    }}
                  />
                </span>
              </h1>
              <p className="mt-8 max-w-(--breakpoint-md) text-center text-lg text-white/70 md:text-xl">
                Harness the power of AI with Sphereal. Elevate your productivity
                and streamline your workflow with our cutting-edge AI chat
                platform.
              </p>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <section className="relative isolate mx-auto max-w-5xl">
              <div className="absolute top-0 left-1/2">
                <motion.div
                  style={{ x: translateLargeGlobeX, y: translateLargeGlobeY }}
                >
                  <MiniGlobe className="-translate-x-[315px] -translate-y-[75px]" />
                </motion.div>
                <motion.div
                  style={{ x: translateLargeGlobeX, y: translateLargeGlobeY }}
                >
                  <MiniGlobe className="-translate-y-[185px] -rotate-135 translate-x-[335px]" />
                </motion.div>
                <motion.div
                  style={{ x: translateMediumGlobeX, y: translateMediumGlobeY }}
                >
                  <MiniGlobe
                    size="md"
                    color="teal"
                    className="-translate-y-[340px] -rotate-135 translate-x-[485px]"
                  />
                </motion.div>
                <motion.div
                  style={{ x: translateSmallGlobeX, y: translateSmallGlobeY }}
                >
                  <MiniGlobe
                    size="sm"
                    color="fuchsia"
                    className="-translate-y-[370px] -translate-x-[510px]"
                  />
                </motion.div>
              </div>
              <div className="-translate-x-10 absolute top-[30%] left-0 z-10 w-72 max-lg:hidden">
                <motion.div
                  style={{ y: transformedY }}
                  className="rounded-xl border bg-neutral-800/70 p-4 backdrop-blur-md"
                >
                  <p>
                    Can you generate an incredible frontend dev video tutorial?
                  </p>
                  <p className="mt-1 text-right text-muted-foreground text-sm">
                    1m ago
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-[50%] right-0 z-10 w-72 translate-x-10 max-lg:hidden">
                <motion.div
                  style={{ y: transformedY }}
                  className="rounded-xl border bg-neutral-800/70 p-4 backdrop-blur-md"
                >
                  <p>Brainwave: I created one base on videos from Spectron!</p>
                  <p className="mt-1 text-right text-muted-foreground text-sm">
                    Just now
                  </p>
                </motion.div>
              </div>
              <div className="relative mt-20 flex overflow-hidden rounded-3xl border-2 border-gradient lg:border-4">
                <Image
                  src={RobotImage}
                  alt="AyRobot"
                  className="aspect-video h-full w-auto"
                  draggable={false}
                />
                <div className="-translate-x-1/2 absolute bottom-2 left-1/2 max-w-sm px-4 md:bottom-4 lg:bottom-10">
                  <div className="flex items-center gap-2 rounded-2xl bg-background/80 px-4 py-2">
                    <Loader2 className="size-4 animate-spin text-violet-400" />
                    <p className="font-medium text-gray-100 text-xl">
                      AI is generating
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
  );
}
