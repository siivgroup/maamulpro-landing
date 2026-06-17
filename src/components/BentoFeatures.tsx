import { motion } from "framer-motion";

function StatBars() {
  return (
    <div className="flex h-full items-end gap-1.5">
      {[40, 65, 35, 80, 55, 90, 70, 50].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-3 rounded-t bg-gradient-to-t from-blue/40 to-blue"
        />
      ))}
    </div>
  );
}

function StaffAvatars() {
  return (
    <div className="flex -space-x-3">
      {["A", "M", "K", "S", "+"].map((c, i) => (
        <div
          key={i}
          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-card text-sm font-semibold ${
            i === 4 ? "bg-blue text-primary-foreground" : "bg-surface-2"
          }`}
        >
          {c}
        </div>
      ))}
    </div>
  );
}

function ProgressRing() {
  const r = 36;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          stroke="var(--color-gold)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * 0.32 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-semibold">68%</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Progress</span>
      </div>
    </div>
  );
}

const small = [
  { t: "Clients Management", d: "Profile, history, payments." },
  { t: "Deals & Rentals", d: "Track every contract." },
  { t: "Tasks Management", d: "Assign and complete fast." },
  { t: "Activity Logs", d: "Full audit trail." },
  { t: "Backup & Monitoring", d: "Always on, always safe." },
  { t: "Technical Support", d: "Real humans, real help." },
];

export function BentoFeatures() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Core Features
          </p>
          <h2 className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Everything your company needs in <span className="text-blue">one system.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            MaamulPro wuxuu isku keenayaa dhammaan maamulka company-gaaga hal meel — operations, staff,
            projects, properties, payments iyo reports.
          </p>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {/* Smart Dashboard - large */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group border border-border/80 bg-card/60 relative col-span-2 row-span-2 overflow-hidden rounded-xl p-7"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Smart Dashboard</p>
                <h3 className="font-display mt-1 text-3xl">Income vs Expenses</h3>
              </div>
              <div className="rounded-lg border border-border px-3 py-1 text-xs text-muted-foreground">
                This Month
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="font-display text-2xl">$184k</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expenses</p>
                <p className="font-display text-2xl">$72k</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Net</p>
                <p className="font-display text-2xl text-blue">+$112k</p>
              </div>
            </div>
            <div className="mt-6 h-32">
              <StatBars />
            </div>
          </motion.div>

          {/* Staff Management */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="border border-border/80 bg-card/40 relative col-span-2 row-span-1 flex flex-col justify-between overflow-hidden rounded-xl p-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Staff Management</p>
              <h3 className="font-display mt-1 text-2xl">42 active members</h3>
            </div>
            <StaffAvatars />
          </motion.div>

          {/* Project Progress */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border/80 bg-card/40 relative col-span-2 row-span-1 flex items-center justify-between overflow-hidden rounded-xl p-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Project Tracking</p>
              <h3 className="font-display mt-1 text-2xl">Tower B · Phase 2</h3>
              <p className="mt-1 text-sm text-muted-foreground">12 of 18 milestones complete</p>
            </div>
            <ProgressRing />
          </motion.div>

          {/* Properties */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border/80 bg-card/40 relative col-span-2 row-span-2 overflow-hidden rounded-xl p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Properties Management</p>
            <h3 className="font-display mt-1 text-2xl">Portfolio</h3>
            <div className="mt-5 space-y-3">
              {[
                { n: "Marina Residences · 24 units", s: "92% occupied" },
                { n: "Liido Plaza · 12 shops", s: "100% occupied" },
                { n: "KM4 Heights · 36 units", s: "78% occupied" },
              ].map((p) => (
                <div key={p.n} className="flex items-center justify-between rounded-lg border border-border bg-muted/40 p-3">
                  <span className="text-sm">{p.n}</span>
                  <span className="text-xs font-semibold text-blue">{p.s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transactions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="border border-border/80 bg-card/40 relative col-span-2 overflow-hidden rounded-xl p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Transactions & Payments</p>
            <h3 className="font-display mt-1 text-2xl">Last 24 hours</h3>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              {[
                { l: "In", v: "$12,400", c: "text-blue font-semibold" },
                { l: "Out", v: "$3,210", c: "text-blue font-semibold" },
                { l: "Pending", v: "$1,800", c: "text-muted-foreground" },
              ].map((x) => (
                <div key={x.l} className="rounded-lg border border-border bg-muted/20 p-3">
                  <p className="text-muted-foreground">{x.l}</p>
                  <p className={`font-display mt-1 text-lg ${x.c}`}>{x.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border/80 bg-card/40 relative col-span-2 overflow-hidden rounded-xl p-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Reports & Analytics</p>
            <h3 className="font-display mt-1 text-2xl">Professional exports</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["PDF", "Excel", "CSV", "Print"].map((t) => (
                <span key={t} className="rounded-lg border border-border bg-muted/40 px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* small grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {small.map((s) => (
            <div key={s.t} className="border border-border/80 bg-card/30 rounded-xl p-5">
              <div className="mb-3 h-1.5 w-8 rounded-full bg-gold/50" />
              <h4 className="font-display text-sm font-semibold">{s.t}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
