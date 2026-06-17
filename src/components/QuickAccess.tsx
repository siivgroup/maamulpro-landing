import { motion } from "framer-motion";

export function QuickAccess() {
  return (
    <section id="login" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border border-border/80 bg-card/60 relative overflow-hidden rounded-xl p-10 md:p-14"
        >
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
                Quick Access
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
                Gal system-ka si toos ah.
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Maamul company-gaaga any time, any place. Ammaan & xog ilaalin leh.
              </p>
            </div>
            <a
              href="https://app.maamulpro.site"
              className="group inline-flex items-center gap-3 rounded-lg bg-blue px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-blue/90"
            >
              Login to System
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
