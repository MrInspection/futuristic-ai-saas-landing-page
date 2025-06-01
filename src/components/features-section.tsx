"use client"

import SlackLogo from "@/assets/images/slack-logo.png"
import FigmaLogo from "@/assets/images/figma-logo.png"
import GithubLogo from "@/assets/images/github-logo.png"
import GcpLogo from "@/assets/images/gcp-logo.png"
import JiraLogo from "@/assets/images/jira-logo.png"
import VsCodeLogo from "@/assets/images/vs-code-logo.png"
import NotionLogo from "@/assets/images/notion-logo.png"
import DockerLogo from "@/assets/images/docker-logo.png"
import {StaticImageData} from "next/image";
import {SectionWrapperBorder, SectionWrapperContent} from "@/components/section-wrapper";
import {Button} from "@/components/ui/button";
import {OrbitCircle} from "@/components/orbit-circle";
import {CircleCheckIcon} from "lucide-react";
import {SpherealLogo} from "@/components/sphereal-logo";
import Image from "next/image";
import {motion} from "motion/react"

export function FeaturesSection() {
  const INTEGRATIONS = [
    {src: SlackLogo, alt: "Slack", rotate: 0},
    {src: DockerLogo, alt: "Docker", rotate: 45},
    {src: FigmaLogo, alt: "Figma", rotate: 90},
    {src: GithubLogo, alt: "Github", rotate: 135},
    {src: VsCodeLogo, alt: "VS Code", rotate: 180},
    {src: NotionLogo, alt: "Notion", rotate: 225},
    {src: JiraLogo, alt: "Jira", rotate: 270},
    {src: GcpLogo, alt: "GCP", rotate: 315},
  ] satisfies Array<{
    src: StaticImageData,
    alt: string,
    rotate: number
  }>

  const FEATURES = [
    "Effortless integration",
    "Intelligent automation",
    "Robust security"
  ] satisfies Array<string>

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent className="md:px-20 lg:px-40">
            <div className="grid xl:grid-cols-2 gap-20">
              <div id="features">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-balance max-w-(--breakpoint-md) font-semibold leading-tight">
                  Your AI-powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CircleCheckIcon className="size-6 text-violet-400"/>
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="rainbow" size="lg" className="mt-16">Try it now</Button>
              </div>
              <div id="integrations" className="flex justify-center">
                <section className="size-[276px] md:size-[450px] relative flex-shrink-0">
                  <div className="absolute inset-0">
                    <OrbitCircle className="size-full"/>
                  </div>
                  <div className="absolute inset-0">
                    <OrbitCircle className="size-[180px] md:size-[300px]"/>
                  </div>
                  <div className="absolute-center">
                    <SpherealLogo className="size-24"/>
                  </div>
                  {INTEGRATIONS.map((integration, index) => (
                    <motion.div
                      className="absolute inset-0" key={index}
                      initial={{rotate: integration.rotate}}
                      animate={{
                        rotate: [
                          integration.rotate,
                          integration.rotate + 45,
                          integration.rotate + 45,
                          integration.rotate + 90,
                          integration.rotate + 90,
                          integration.rotate + 135,
                          integration.rotate + 135,
                          integration.rotate + 180,
                          integration.rotate + 180,
                          integration.rotate + 225,
                          integration.rotate + 225,
                          integration.rotate + 270,
                          integration.rotate + 270,
                          integration.rotate + 315,
                          integration.rotate + 315,
                          integration.rotate + 360,
                          integration.rotate + 360
                        ],
                      }}
                      transition={{duration: 20, repeat: Infinity}}
                    >
                      <motion.div
                        initial={{
                          translate: "-50% -50%",
                          rotate: (-integration.rotate)
                        }}
                        animate={{
                          rotate: [
                            -integration.rotate,
                            -integration.rotate - 45,
                            -integration.rotate - 45,
                            -integration.rotate - 90,
                            -integration.rotate - 90,
                            -integration.rotate - 135,
                            -integration.rotate - 135,
                            -integration.rotate - 180,
                            -integration.rotate - 180,
                            -integration.rotate - 225,
                            -integration.rotate - 225,
                            -integration.rotate - 270,
                            -integration.rotate - 270,
                            -integration.rotate - 315,
                            -integration.rotate - 315,
                            -integration.rotate - 360,
                            -integration.rotate - 360
                          ],
                        }}
                        transition={{duration: 20, repeat: Infinity}}
                        className="inline-flex items-center justify-center size-10 md:size-14 border rounded-lg absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"
                      >
                        <Image src={integration.src} alt={integration.alt} className="w-auto h-6 md:size-9"/>
                      </motion.div>
                    </motion.div>
                  ))}
                </section>
              </div>
            </div>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  )
}
