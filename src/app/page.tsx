import {HeroSection} from "@/components/hero-section";
import {LogoTickerSection} from "@/components/logo-ticker-section";
import {FeaturesSection} from "@/components/features-section";
import {PricingSection} from "@/components/pricing-section";
import {CallToActionSection} from "@/components/call-to-action-section";
import {TestimonialsSection} from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <LogoTickerSection/>
      <FeaturesSection/>
      <PricingSection/>
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
