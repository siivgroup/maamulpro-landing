import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dashboardImg from "../images/maamulpro-dashboard.png"; 

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div style={{ y, opacity, scale }} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Construction & Real Estate Management System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight"
        >
          <span className="block">Maamul shirkaddaada</span>
          <span className="block text-blue">si fudud, hufan,</span>
          <span className="block">oo xirfadeysan.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          MaamulPro waa nidaam dhameystiran oo loogu talagalay <span className="text-foreground">shirkadaha dhismaha</span>,{" "}
          <span className="text-foreground">kuwa hantida ma guurtada ah (Real Estate)</span>, iyo shirkadaha isku dhex qabta labadaba.
          Wuxuu kuu fududeynayaa maamulka mashaariicda, hantida, shaqaalaha, lacag bixinta, warbixinnada, iyo dhamman howlgallada shirkadda oo hal meel ah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-blue px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-blue/90"
          >
            <span className="relative z-10">Request Demo</span>
            <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/20 px-7 py-4 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/50"
          >
            View Pricing
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {[
            "Database u gaar ah company kasta",
            "Modules On/Off ku habboon",
            "Secure & Reliable",
            "Data safe & isolated",
          ].map((h) => (
            <div key={h} className="rounded-xl border border-border/80 bg-card/40 p-4 transition-colors hover:border-border">
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-gold/10 text-gold text-sm font-bold">
                ✓
              </div>
              <p className="text-sm text-muted-foreground">{h}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* DASHBOARD IMAGE POSITIONED RIGHT */}
      <div className="pointer-events-none absolute right-[2rem] top-1/2 hidden -translate-y-1/2 lg:block">
        <img 
          src={dashboardImg} 
          alt="MaamulPro Dashboard" 
          className="w-[550px] rounded-2xl object-cover" 
        />
      </div>
    </section>
  );
}
