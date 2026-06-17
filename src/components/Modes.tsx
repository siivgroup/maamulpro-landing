import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const modes = [
  {
    tag: "01",
    title: "Construction Only",
    desc: "Projects, sites, milestones, materials, contractors iyo budgets — hal dashboard.",
  },
  {
    tag: "02",
    title: "Real Estate Only",
    desc: "Properties, listings, deals, rentals, clients iyo payments si nadiif ah.",
  },
  {
    tag: "03",
    title: "Hybrid Company",
    desc: "Construction + Real Estate isku jira, iyadoo modules-ka loo dejiyay company-gaaga.",
  },
];

export function Modes() {
  return (
    <section id="modules" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between gap-8"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Who is it for
            </p>
            <h2 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">
              Built for builders.
              <br />
              <span className="text-blue">Designed for owners.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-muted-foreground md:block">
            System-ku wuxuu taageeraa saddex nooc oo shirkado ah, mid waliba leh modules ku habboon.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.ul 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border/80 bg-card/40 space-y-4 rounded-xl p-8"
          >
            {[
              "Construction companies",
              "Real estate companies",
              "Companies leh construction + real estate labadaba",
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                <span className="font-display text-3xl text-gold/80">0{i + 1}</span>
                <span className="pt-2 text-lg">{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-3"
          >
            {modes.map((m) => (
              <div
                key={m.tag}
                className="group relative border border-border/80 bg-card/40 rounded-xl p-6 transition-colors duration-200 hover:border-border hover:bg-card/60"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-2xl text-muted-foreground/60 group-hover:text-gold">
                    {m.tag}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
