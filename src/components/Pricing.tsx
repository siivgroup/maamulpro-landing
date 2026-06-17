import { motion } from "framer-motion";
import { useState } from "react";

type Plan = "monthly" | "yearly";

const data = {
  single: {
    title: "Single Module",
    sub: "Dhismaha ama Hantida (Real Estate)",
    monthly: { price: "$70", period: "/month", setup: "Setup Fee: $300" },
    yearly: { price: "$800", period: "one-time", setup: "Maintenance: $150/year" },
    perks: [
      "Full system setup & deployment",
      "Hal module (Construction ama Real Estate)",
      "Company branding & logo setup",
      "Dedicated database & dashboard",
      "Staff & User management",
      "Transactions & payments tracking",
      "Business reports & activity logs",
      "Hosting & Daily backups",
      "Technical support & maintenance",
      "Minor system updates",
    ],
  },
  hybrid: {
    title: "Hybrid System",
    sub: "Construction + Real Estate (Labadaba)",
    monthly: { price: "$100", period: "/month", setup: "Setup Fee: $500" },
    yearly: { price: "$1,200", period: "one-time", setup: "Maintenance: $150–$200/year" },
    perks: [
      "Everything in Single Module",
      "Labada Module (Construction + Real Estate)",
      "Hybrid workspace UI setup",
      "Advanced property management",
      "Deals, Rentals & Leasing tools",
      "Budget & Expenses tracking",
      "Project progression & milestones",
      "Client management portal",
      "Basic onboarding & staff training",
      "Priority technical support",
    ],
  },
};

export function Pricing() {
  const [plan, setPlan] = useState<Plan>("monthly");

  return (
    <section id="pricing" className="relative px-6 py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing</p>
          <h2 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">
            Choose your <span className="text-blue">deployment model.</span>
          </h2>

          {/* Toggle */}
          <div className="border border-border/80 bg-muted/40 relative mt-10 inline-flex rounded-lg p-1">
            {(["monthly", "yearly"] as Plan[]).map((p) => (
              <button
                key={p}
                onClick={() => setPlan(p)}
                className={`relative z-10 px-6 py-2 text-sm font-semibold capitalize transition-colors duration-200 ${
                  plan === p ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {plan === p && (
                  <motion.span
                    layoutId="plan-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-md bg-blue"
                  />
                )}
                {p === "monthly" ? "Monthly Plan" : "Yearly Plan"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {(Object.keys(data) as Array<keyof typeof data>).map((key, i) => {
            const card = data[key];
            const cur = card[plan];
            const featured = key === "hybrid";
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-xl p-8 transition-colors duration-200 ${
                  featured ? "border-2 border-blue bg-card shadow-lg shadow-blue/5" : "border border-border/80 bg-card/40"
                }`}
              >
                {featured && (
                  <div className="absolute right-6 top-6 rounded-md bg-blue px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Most Complete
                  </div>
                )}
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  0{i + 1} · {card.sub}
                </p>
                <h3 className="font-display mt-2 text-3xl font-semibold">{card.title}</h3>

                <div className="mt-8 flex items-end gap-2">
                  <motion.span
                    key={cur.price}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-display text-5xl font-semibold tracking-tight"
                  >
                    {cur.price}
                  </motion.span>
                  <span className="pb-2 text-sm text-muted-foreground">{cur.period}</span>
                </div>
                <p className="mt-2 text-sm text-blue font-semibold">{cur.setup}</p>

                <ul className="mt-8 space-y-3">
                  {card.perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-gold/10 text-xs font-bold text-gold">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    featured
                      ? "bg-blue text-primary-foreground hover:bg-blue/90"
                      : "border border-border bg-card/40 hover:bg-muted/50 text-foreground"
                  }`}
                >
                  Get {card.title}
                  <span>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
