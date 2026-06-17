import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import maamulProLogo from "../images/MaamulPro.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];
// test
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={maamulProLogo} alt="MaamulPro" className="h-8 w-auto" />
          <span className="font-display text-xl font-semibold tracking-tight">
            Maamul<span className="text-blue">Pro</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-blue"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="https://app.maamulpro.site"
            target="_blank"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-all hover:text-blue"
          >
            Log in
          </a>
          <a
            href="https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro."
            target="_blank"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-blue/90"
          >
            Request Demo
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-lg p-2"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-x-0 top-full border-b border-border bg-background px-4 py-6 shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            <ul className="grid gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:text-blue transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-border">
                <a 
                  href="https://app.maamulpro.site" 
                  target="_blank"
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium hover:bg-muted"
                >
                  Log in
                </a>
                <a 
                  href="https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro." 
                  target="_blank"
                  className="rounded-lg bg-blue px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground hover:bg-blue/90"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Tracker */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-blue to-gold"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
