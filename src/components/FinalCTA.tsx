import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95]"
        >
          Ready to manage your company
          <br />
          <span className="text-blue">professionally?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-muted-foreground"
        >
          Book a demo today and see how MaamulPro can help your business grow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro."
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-blue px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-blue/90"
          >
            Request Demo →
          </a>
          <a
            href="https://app.maamulpro.site"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/50"
          >
            Login to System
          </a>
        </motion.div>
      </div>
    </section>
  );
}
