import type { VariantProps } from "class-variance-authority";
import { CircleCheckIcon } from "lucide-react";
import {
  SectionWrapperBorder,
  SectionWrapperContent,
} from "@/components/section-wrapper";
import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const PRICING_PLANS = [
    {
      name: "Basic",
      name_color: "text-amber-300",
      description: "AI chatbot, personalized recommendations",
      price: "Free",
      action_button_variant: "default",
      action_button_text: "Get Started",
      features: [
        "Access to AI chatbot for natural language conversations",
        "Basic task automation for simple workflows",
        "Limited message history storage",
      ],
      className: "lg:py-12 lg:my-6",
    },
    {
      name: "Premium",
      name_color: "text-violet-400",
      description: "Advanced AI capabilities for enhanced productivity",
      price: 99,
      action_button_variant: "default",
      action_button_text: "Upgrade to Premium",
      features: [
        "All Basic features included",
        "Priority access to new AI features and updates",
        "Advanced automation tools for seamless task management",
        "Customizable chat templates for your specific workflows",
      ],
      className: "lg:py-18 lg:my-0",
    },
    {
      name: "Enterprise",
      name_color: "text-teal-300",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: "Custom",
      action_button_variant: "rainbow",
      action_button_text: "Request Demo",
      features: [
        "All Premium features included",
        "Dedicated account manager and priority customer support",
        "Enhanced security and compliance features for large teams",
        "Custom AI models tailored to your organization's needs",
        "API access for seamless integration with enterprise systems",
      ],
      className: "lg:py-12 lg:my-6",
    },
  ];

  return (
    <section>
      <div className="container">
        <SectionWrapperBorder hasBorderTop>
          <SectionWrapperContent>
            <h2 className="text-pretty text-center font-semibold text-3xl leading-tight md:text-4xl lg:text-5xl">
              Flexible plans for every need
            </h2>
            <section className="mt-12 flex gap-8 max-lg:flex-col lg:items-start xl:justify-center">
              {PRICING_PLANS.map((plan, index) => (
                <div
                  className={cn(
                    "max-w-sm rounded-3xl border px-6 py-12 max-xl:mx-auto",
                    plan.className,
                  )}
                  key={index}
                >
                  <h3 className={cn("font-semibold text-4xl", plan.name_color)}>
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-8 flex items-baseline">
                    <span className="font-semibold text-7xl">{plan.price}</span>
                    <span
                      className={cn(
                        "text-2xl",
                        typeof plan.price !== "number" && "hidden",
                      )}
                    >
                      €
                    </span>
                  </div>
                  <Button
                    className="mt-8 w-full"
                    size="lg"
                    variant={
                      plan.action_button_variant as VariantProps<
                        typeof buttonVariants
                      >["variant"]
                    }
                  >
                    {plan.action_button_text}
                  </Button>
                  <ul className="mt-8 flex flex-col">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 border-t py-4"
                      >
                        <CircleCheckIcon className="size-6 shrink-0 text-violet-400" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </SectionWrapperContent>
        </SectionWrapperBorder>
      </div>
    </section>
  );
}
