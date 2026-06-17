import { createFileRoute } from "@tanstack/react-router";

const faviconIco = "/favicon.ico";
const favicon16 = "/favicon-16x16.png";
const favicon32 = "/favicon-32x32.png";
const appleTouchIcon = "/apple-touch-icon.png";
const webManifest = "/site.webmanifest";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Modes } from "@/components/Modes";
import { BentoFeatures } from "@/components/BentoFeatures";
import { Benefits } from "@/components/Benefits";
import { QuickAccess } from "@/components/QuickAccess";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "icon", type: "image/x-icon", href: faviconIco },
      { rel: "shortcut icon", href: faviconIco },
      { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
      { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
      { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
      { rel: "manifest", href: webManifest },
    ],
    meta: [
      { title: "MaamulPro — Construction & Real Estate Management System" },
      {
        name: "description",
        content:
          "MaamulPro is an all-in-one management system for construction, real estate, and hybrid companies. Manage projects, properties, staff, payments and reports in one place.",
      },
      { property: "og:title", content: "MaamulPro — Construction & Real Estate Management" },
      {
        property: "og:description",
        content:
          "Maamul shirkaddaada si fudud, nadiif ah, oo professional ah. Built for construction, real estate, and hybrid companies.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Modes />
      <BentoFeatures />
      <Benefits />
      <QuickAccess />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
