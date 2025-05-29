export const siteConfig = {
  name: "Sphereal AI",
  description: "Futuristic AI SaaS Landing Page. Built by MrInspection.",
  creator: "MrInspection",
  links: {
    repositoryUrl: "https://github.com/MrInspection/futuristic-ai-saas-landing-page",
    creatorGithubUrl: "https://github.com/MrInspection/",
    deploymentUrl: "https://sphereal-lp.vercel.app/"
  },
  openGraph: {
    imageUrl: "https://sphereal-lp.vercel.app/opengraph-image.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    creator: "@MrInspection",
    cardType: "summary_large_image",
    imageUrl: "https://sphereal-lp.vercel.app/opengraph-image.png"
  },
}

export type SiteConfig = typeof siteConfig