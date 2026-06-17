import { motion } from "framer-motion";
import { 
  Blocks, 
  LayoutDashboard, 
  Users, 
  CircleDollarSign, 
  FileBarChart2, 
  Database, 
  Paintbrush, 
  ToggleRight 
} from "lucide-react";

const benefits = [
  {
    title: "Unified System",
    desc: "Hal system oo company-ga maamulka fududeeya",
    icon: Blocks,
  },
  {
    title: "Clean Dashboard",
    desc: "Dashboard cad oo nadiif ah oo si fudud loo fahmi karo",
    icon: LayoutDashboard,
  },
  {
    title: "Staff Management",
    desc: "Staff management fudud iyo role-based access",
    icon: Users,
  },
  {
    title: "Financial Tracking",
    desc: "Income iyo expenses tracking si toos ah",
    icon: CircleDollarSign,
  },
  {
    title: "Professional Reports",
    desc: "Reports professional ah oo la export gareyn karo",
    icon: FileBarChart2,
  },
  {
    title: "Isolated Database",
    desc: "Database u gaar ah company kasta si ammaan ah",
    icon: Database,
  },
  {
    title: "Custom Branding",
    desc: "Branding iyo setup gaar ah company walba",
    icon: Paintbrush,
  },
  {
    title: "Flexible Modules",
    desc: "Modules on/off iyadoo loo eegayo baahida company-ga",
    icon: ToggleRight,
  },
];

export function Benefits() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Main Benefits
            </p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Why teams choose <span className="text-blue">MaamulPro</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue ring-1 ring-inset ring-blue/20 transition-colors group-hover:bg-blue group-hover:text-white group-hover:ring-blue/0">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="relative mt-20 overflow-hidden rounded-xl border border-border bg-card/20 py-6">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Clean & modern interface",
                "Fast and easy management",
                "Professional reporting",
                "Organized workflows",
                "Secure data protection",
                "Reliable operations",
              ].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-12">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-gold" />
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
