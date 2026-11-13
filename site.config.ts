import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Aires Carpentry",
  tagline: "Custom millwork and carpentry, with more than 20 years of experience.",
  category: "Carpentry",
  schemaType: "LocalBusiness",
  area: "Ontario",
  siteUrl: "https://aires-carpentry-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c4a15a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Custom millwork and carpentry",
    headline: "Quality carpentry, built to last",
    subhead: "Aires Carpentry offers custom millwork and carpentry, with more than 20 years of experience. Send a message for a free quote.",
    images: [
      { src: "/images/post-2.jpg", alt: "Custom wood millwork by Aires Carpentry", width: 683, height: 683 },
      { src: "/images/post-1.jpg", alt: "A carved wooden Aires Carpentry sign", width: 960, height: 960 },
    ],
    primaryCta: { label: "DM for a free quote", href: "https://ig.me/m/airescarpentry_2026" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Custom millwork and carpentry",
    "More than 20 years of experience",
    "Free quotes by Instagram DM",
  ],

  about: {
    title: "Welcome to Aires Carpentry",
    body: [
      "Aires Carpentry offers custom millwork and carpentry, with more than 20 years of experience. Recent work has included custom woodwork and carved wood signs.",
      "Send a message on Instagram for a free quote.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Custom wood millwork by Aires Carpentry", width: 683, height: 683 },
  },

  menu: {
    label: "Services",
    title: "Carpentry services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a free quote.",
    groups: [
      {
        title: "Work",
        items: [
          { name: "Custom millwork" },
          { name: "Carpentry" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-2.jpg", width: 683, height: 683, alt: "Custom wood millwork by Aires Carpentry", caption: "Custom millwork", href: "https://www.instagram.com/p/DffaPYilvcu/" },
      { src: "/images/post-1.jpg", width: 960, height: 960, alt: "A carved wooden Aires Carpentry sign", caption: "Carved wood", href: "https://www.instagram.com/reel/Dfj9mBQsGaE/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "airescarpentry_2026",
    embeds: ["https://www.instagram.com/p/DffaPYilvcu/", "https://www.instagram.com/reel/Dfj9mBQsGaE/"],
  },

  order: {
    label: "How to book",
    title: "Ask for a free quote in a DM",
    intro: "Send a message on Instagram with the work you have in mind, and Aires Carpentry will send a free quote.",
    dmMessage: "Hi Aires Carpentry! I would like a free quote.\nProject:\nPreferred timing:",
    headerCtaLabel: "DM for a quote",
    links: [
      { label: "DM for a free quote", href: "https://ig.me/m/airescarpentry_2026" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I get a quote?", a: "Send a message on Instagram with the work you have in mind for a free quote." },
    { q: "What work do you do?", a: "Aires Carpentry offers custom millwork and carpentry, with more than 20 years of experience." },
  ],

  contact: {
    title: "Contact",
    area: "Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/airescarpentry_2026/" }],
  },

  seo: {
    title: "Aires Carpentry | Custom millwork and carpentry",
    description: "Custom millwork and carpentry from Aires Carpentry, with more than 20 years of experience. Send an Instagram DM for a free quote on your project.",
    keywords: ["custom millwork", "carpentry", "Aires Carpentry"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
