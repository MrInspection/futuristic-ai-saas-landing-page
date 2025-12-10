"use client";

import { motion, useSpring, useTransform } from "motion/react";
import UnderlineImage from "@/assets/images/underline.svg?url";
import { MiniGlobe } from "@/components/mini-globe";
import { OrbitCircle } from "@/components/orbit-circle";
import {
  SectionWrapperBorder,
  SectionWrapperContent,
} from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CallToActionSection() {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeGlobeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const translateLargeGlobeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const translateMediumGlobeX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const translateMediumGlobeY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const translateSmallGlobeX = useTransform(springX, [0, 1], ["-200%", "200%"]);
  const translateSmallGlobeY = useTransform(springY, [0, 1], ["-200%", "200%"]);

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent className="relative isolate">
            <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="-z-10 absolute inset-0">
              <OrbitCircle className="size-[200px] border-white/30" />
              <OrbitCircle className="size-[350px] border-white/30" />
              <OrbitCircle className="size-[500px] border-white/30" />
              <OrbitCircle className="size-[650px] border-white/30" />
              <OrbitCircle className="size-[800px] border-white/30" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{ x: translateLargeGlobeX, y: translateLargeGlobeY }}
              >
                <MiniGlobe
                  size="lg"
                  className="-translate-x-[200px] translate-y-[200px] rotate-45"
                />
              </motion.div>
              <motion.div
                style={{ x: translateLargeGlobeX, y: translateLargeGlobeY }}
              >
                <MiniGlobe
                  size="lg"
                  className="-translate-y-[200px] -rotate-135 translate-x-[200px]"
                />
              </motion.div>
              <motion.div
                style={{ x: translateMediumGlobeX, y: translateMediumGlobeY }}
              >
                <MiniGlobe
                  size="md"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </motion.div>
              <motion.div
                style={{ x: translateMediumGlobeX, y: translateMediumGlobeY }}
              >
                <MiniGlobe
                  size="md"
                  color="teal"
                  className="-translate-y-[100px] -rotate-135 translate-x-[500px]"
                />
              </motion.div>
              <motion.div
                style={{ x: translateSmallGlobeX, y: translateSmallGlobeY }}
              >
                <MiniGlobe
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[400px] -translate-y-[250px] rotate-135"
                />
              </motion.div>
              <motion.div
                style={{ x: translateSmallGlobeX, y: translateSmallGlobeY }}
              >
                <MiniGlobe
                  size="sm"
                  color="fuchsia"
                  className="-rotate-45 translate-x-[400px] translate-y-[150px]"
                />
              </motion.div>
            </div>
            <h2 className="mx-auto max-w-(--breakpoint-md) text-center font-semibold text-3xl leading-tight md:text-4xl lg:text-5xl">
              Join the AI Revolution with{" "}
              <span className="relative isolate">
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
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-xl md:text-xl">
              Experience the transformative power of AI with Sphereal. Boost
              your productivty and streamline your workflow with our AI chat
              platform.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg">Get Started</Button>
            </div>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  );
}
