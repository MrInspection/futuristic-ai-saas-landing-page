"use client";

import { motion } from "motion/react";
import Image from "next/image";
import AcmeLogo from "@/assets/brands/acme-corp-logo.svg";
import CelestialLogo from "@/assets/brands/celestial-logo.svg";
import EchoValleyLogo from "@/assets/brands/echo-valley-logo.svg";
import JulienGournayLogo from "@/assets/brands/julien-gournay-logo.svg";
import OutsideLogo from "@/assets/brands/outside-logo.svg";
import PulseLogo from "@/assets/brands/pulse-logo.svg";
import QuantumLogo from "@/assets/brands/quantum-logo.svg";
import TwiceLogo from "@/assets/brands/twice-logo.svg";
import {
  SectionWrapperBorder,
  SectionWrapperContent,
} from "@/components/section-wrapper";

export function LogoTickerSection() {
  const COMPANIES = [
    { name: "Acme Corp", logo: AcmeLogo },
    { name: "Twice", logo: TwiceLogo },
    { name: "Julien Gournay", logo: JulienGournayLogo },
    { name: "Echo Valley", logo: EchoValleyLogo },
    { name: "Quantum", logo: QuantumLogo },
    { name: "Pulse", logo: PulseLogo },
    { name: "Outside", logo: OutsideLogo },
    { name: "Celestial", logo: CelestialLogo },
  ] satisfies Array<{
    name: string;
    logo: SVGElement;
  }>;

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder>
          <SectionWrapperContent className="!pt-0">
            <h2 className="text-center font-bold text-muted-foreground text-xs uppercase tracking-widest">
              Empowering creators at leading companies
            </h2>
            <div className="-mx-4 lg:-mx-8 mt-14 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex flex-none gap-18 px-9 md:gap-36 md:px-18"
              >
                {[...COMPANIES, ...COMPANIES].map((company, index) => (
                  <div key={index}>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      className="h-8 w-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  );
}
