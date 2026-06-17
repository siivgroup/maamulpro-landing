import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const maamulProLogo = "/assets/MaamulPro-0pBW2Cr_.png";
const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50 px-4 pt-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: maamulProLogo, alt: "MaamulPro", className: "h-8 w-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-semibold tracking-tight", children: [
                  "Maamul",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue", children: "Pro" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://app.maamulpro.site",
                    target: "_blank",
                    className: "rounded-lg px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground",
                    children: "Login"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro.",
                    target: "_blank",
                    "data-cursor": "cta",
                    className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]",
                    children: [
                      "Request Demo",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform group-hover:translate-x-0.5", children: "→" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen((v) => !v),
                  "aria-label": "Menu",
                  className: "rounded-lg p-2 lg:hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}` })
                  ] })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "glass-strong mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  onClick: () => setOpen(false),
                  href: l.href,
                  className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  children: l.label
                }
              ) }, l.href)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-2 grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#login", className: "rounded-lg border border-border px-3 py-2 text-center text-sm", children: "Login" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-lg bg-blue px-3 py-2 text-center text-sm font-semibold text-primary-foreground", children: "Demo" })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
const dashboardImg = "/assets/maamulpro-dashboard-COUnboYV.png";
function ScrambleText({ text, delay = 0 }) {
  const [out, setOut] = reactExports.useState("");
  const [isStarted, setIsStarted] = reactExports.useState(false);
  const [isDone, setIsDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
      let i = 0;
      const timer = setInterval(() => {
        setOut(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(timer);
          setIsDone(true);
        }
      }, 40);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    out,
    isStarted && !isDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        animate: { opacity: [1, 0] },
        transition: { repeat: Infinity, duration: 0.6 },
        className: "ml-1 inline-block h-[0.8em] w-[4px] bg-current align-middle"
      }
    )
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", ref, className: "relative min-h-screen overflow-hidden pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 top-72 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "noise absolute inset-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y, opacity, scale }, className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-8 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-gold" })
            ] }),
            "Construction & Real Estate Management System"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrambleText, { text: "Maamul shirkaddaada" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrambleText, { text: "si fudud, hufan,", delay: 800 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrambleText, { text: "oo xirfadeysan.", delay: 1600 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.2, duration: 0.7 },
          className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground",
          children: [
            "MaamulPro waa nidaam dhameystiran oo loogu talagalay ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "shirkadaha dhismaha" }),
            ",",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "kuwa hantida ma guurtada ah (Real Estate)" }),
            ", iyo shirkadaha isku dhex qabta labadaba. Wuxuu kuu fududeynayaa maamulka mashaariicda, hantida, shaqaalaha, lacag bixinta, warbixinnada, iyo dhamman howlgallada shirkadda oo hal meel ah."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.5, duration: 0.6 },
          className: "mt-10 flex flex-wrap items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue px-7 py-4 text-sm font-semibold text-primary-foreground glow-blue transition hover:scale-[1.02]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Request Demo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 transition-transform group-hover:translate-x-1", children: "→" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#pricing",
                className: "inline-flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-7 py-4 text-sm font-semibold text-foreground transition hover:bg-white/[0.06]",
                children: "View Pricing"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.8, duration: 0.7 },
          className: "mt-16 grid grid-cols-2 gap-3 md:grid-cols-4",
          children: [
            "Database u gaar ah company kasta",
            "Modules On/Off ku habboon",
            "Secure & Reliable",
            "Data safe & isolated"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-blue/15 text-gold", children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: h })
          ] }, h))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: 0.3, duration: 1.2 },
        className: "pointer-events-none absolute right-[2rem] top-1/2 hidden -translate-y-1/2 lg:block",
        style: { perspective: 1e3 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-float-slow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl backdrop-blur-md",
              style: { transform: "rotateX(10deg) rotateY(-15deg)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: dashboardImg,
                    alt: "MaamulPro Dashboard",
                    className: "w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-blue/5 via-transparent to-white/5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" })
        ] })
      }
    )
  ] });
}
const modes = [
  {
    tag: "01",
    title: "Construction Only",
    desc: "Projects, sites, milestones, materials, contractors iyo budgets — hal dashboard."
  },
  {
    tag: "02",
    title: "Real Estate Only",
    desc: "Properties, listings, deals, rentals, clients iyo payments si nadiif ah."
  },
  {
    tag: "03",
    title: "Hybrid Company",
    desc: "Construction + Real Estate isku jira, iyadoo modules-ka loo dejiyay company-gaaga."
  }
];
function Modes() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "modules", ref, className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7 },
        className: "mb-16 flex items-end justify-between gap-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Who is it for" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl", children: [
              "Built for builders.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "Designed for owners." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden max-w-sm text-muted-foreground md:block", children: "System-ku wuxuu taageeraa saddex nooc oo shirkado ah, mid waliba leh modules ku habboon." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { style: { x: xLeft }, className: "glass space-y-4 rounded-3xl p-8", children: [
        "Construction companies",
        "Real estate companies",
        "Companies leh construction + real estate labadaba"
      ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl text-gold/70", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pt-2 text-lg", children: t })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { x: xRight }, className: "grid gap-3", children: modes.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-cursor": "view",
          className: "group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-blue/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-muted-foreground/60 group-hover:text-blue", children: m.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: m.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.desc })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" })
          ]
        },
        m.tag
      )) })
    ] })
  ] }) });
}
function StatBars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-end gap-1.5", children: [40, 65, 35, 80, 55, 90, 70, 50].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { height: 0 },
      whileInView: { height: `${h}%` },
      viewport: { once: true },
      transition: { delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "w-3 rounded-t bg-gradient-to-t from-blue/40 to-blue"
    },
    i
  )) });
}
function StaffAvatars() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-3", children: ["A", "M", "K", "S", "+"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `flex h-11 w-11 items-center justify-center rounded-full border-2 border-card text-sm font-semibold ${i === 4 ? "bg-blue text-primary-foreground" : "bg-surface-2"}`,
      children: c
    },
    i
  )) });
}
function ProgressRing() {
  const r = 36;
  const c = 2 * Math.PI * r;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 w-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "h-full w-full -rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r, stroke: "oklch(1 0 0 / 0.08)", strokeWidth: "8", fill: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.circle,
        {
          cx: "50",
          cy: "50",
          r,
          stroke: "oklch(0.85 0.18 70)",
          strokeWidth: "8",
          fill: "none",
          strokeLinecap: "round",
          strokeDasharray: c,
          initial: { strokeDashoffset: c },
          whileInView: { strokeDashoffset: c * 0.32 },
          viewport: { once: true },
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-semibold", children: "68%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Progress" })
    ] })
  ] });
}
const small = [
  { t: "Clients Management", d: "Profile, history, payments." },
  { t: "Deals & Rentals", d: "Track every contract." },
  { t: "Tasks Management", d: "Assign and complete fast." },
  { t: "Activity Logs", d: "Full audit trail." },
  { t: "Backup & Monitoring", d: "Always on, always safe." },
  { t: "Technical Support", d: "Real humans, real help." }
];
function BentoFeatures() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7 },
        className: "mb-14 max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Core Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl font-semibold leading-[1.05] md:text-6xl", children: [
            "Everything your company needs in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "one system." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "MaamulPro wuxuu isku keenayaa dhammaan maamulka company-gaaga hal meel — operations, staff, projects, properties, payments iyo reports." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          "data-cursor": "view",
          className: "group glass-strong relative col-span-2 row-span-2 overflow-hidden rounded-3xl p-7",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Smart Dashboard" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-3xl", children: "Income vs Expenses" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border px-3 py-1 text-xs text-muted-foreground", children: "This Month" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "$184k" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Expenses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "$72k" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Net" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-gold", children: "+$112k" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatBars, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue/20 blur-3xl transition group-hover:bg-blue/30" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.05 },
          "data-cursor": "view",
          className: "glass relative col-span-2 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Staff Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: "42 active members" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StaffAvatars, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          "data-cursor": "view",
          className: "glass relative col-span-2 row-span-1 flex items-center justify-between overflow-hidden rounded-3xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Project Tracking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: "Tower B · Phase 2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "12 of 18 milestones complete" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressRing, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          "data-cursor": "view",
          className: "glass relative col-span-2 row-span-2 overflow-hidden rounded-3xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Properties Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: "Portfolio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: [
              { n: "Marina Residences · 24 units", s: "92% occupied" },
              { n: "Liido Plaza · 12 shops", s: "100% occupied" },
              { n: "KM4 Heights · 36 units", s: "78% occupied" }
            ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border bg-white/[0.02] p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: p.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gold", children: p.s })
            ] }, p.n)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.05 },
          "data-cursor": "view",
          className: "glass relative col-span-2 overflow-hidden rounded-3xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Transactions & Payments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: "Last 24 hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2 text-xs", children: [
              { l: "In", v: "$12,400", c: "text-gold" },
              { l: "Out", v: "$3,210", c: "text-gold" },
              { l: "Pending", v: "$1,800", c: "text-muted-foreground" }
            ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: x.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display mt-1 text-lg ${x.c}`, children: x.v })
            ] }, x.l)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          "data-cursor": "view",
          className: "glass relative col-span-2 overflow-hidden rounded-3xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Reports & Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-2xl", children: "Professional exports" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: ["PDF", "Excel", "CSV", "Print"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs", children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6", children: small.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 h-2 w-8 rounded-full bg-blue/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.d })
    ] }, s.t)) })
  ] }) });
}
const items = [
  "Hal system oo company-ga maamulka fududeeya",
  "Dashboard cad oo nadiif ah",
  "Staff management fudud",
  "Income iyo expenses tracking",
  "Reports professional ah",
  "Database u gaar ah company kasta",
  "Branding iyo setup gaar ah",
  "Modules on/off iyadoo loo eegayo company-ga"
];
function Benefits() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative overflow-hidden px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Main Benefits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-semibold md:text-5xl", children: [
        "Why teams choose ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "MaamulPro" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-4", children: items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.04 },
        "data-cursor": "view",
        className: "group glass relative overflow-hidden rounded-2xl p-5 transition hover:border-blue/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display block text-sm text-gold/70", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/90", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" })
        ]
      },
      t
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-20 overflow-hidden rounded-2xl border border-border bg-white/[0.02] py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-12 whitespace-nowrap px-6 text-sm uppercase tracking-[0.25em] text-muted-foreground", children: Array.from({ length: 2 }).flatMap(
      (_, k) => [
        "Clean & modern interface",
        "Fast and easy management",
        "Professional reporting",
        "Organized workflows",
        "Secure data protection",
        "Reliable operations"
      ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
        t,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-gold" })
      ] }, `${k}-${i}`))
    ) }) })
  ] }) });
}
function QuickAccess() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "login", className: "relative px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7 },
      className: "glass-strong noise relative overflow-hidden rounded-[2rem] p-10 md:p-14",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue/25 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Quick Access" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-3 text-3xl font-semibold md:text-4xl", children: "Gal system-ka si toos ah." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-muted-foreground", children: "Maamul company-gaaga any time, any place. Ammaan & xog ilaalin leh." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://app.maamulpro.site",
              "data-cursor": "cta",
              className: "group inline-flex items-center gap-3 rounded-xl bg-blue px-7 py-4 text-sm font-semibold text-primary-foreground glow-blue transition hover:scale-[1.03]",
              children: [
                "Login to System",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
              ]
            }
          )
        ] })
      ]
    }
  ) }) });
}
const data = {
  single: {
    title: "Single Module",
    sub: "Dhismaha ama Hantida (Real Estate)",
    monthly: { price: "$70", period: "/month", setup: "Setup Fee: $300" },
    ownership: { price: "$800", period: "one-time", setup: "Maintenance: $150/year" },
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
      "Minor system updates"
    ]
  },
  hybrid: {
    title: "Hybrid System",
    sub: "Construction + Real Estate (Labadaba)",
    monthly: { price: "$100", period: "/month", setup: "Setup Fee: $500" },
    ownership: { price: "$1,200", period: "one-time", setup: "Maintenance: $150–$200/year" },
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
      "Priority technical support"
    ]
  }
};
function Pricing() {
  const [plan, setPlan] = reactExports.useState("monthly");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.7 },
          className: "mb-12 flex flex-col items-center text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl", children: [
              "Choose your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "deployment model." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-cursor": "drag", className: "glass-strong relative mt-10 inline-flex rounded-full p-1", children: ["monthly", "ownership"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setPlan(p),
                className: `relative z-10 px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${plan === p ? "text-primary-foreground" : ""}`,
                children: [
                  plan === p && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "plan-pill",
                      transition: { type: "spring", stiffness: 380, damping: 32 },
                      className: "absolute inset-0 -z-10 rounded-full bg-blue"
                    }
                  ),
                  p === "monthly" ? "Monthly Plan" : "Ownership Plan"
                ]
              },
              p
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: Object.keys(data).map((key, i) => {
        const card = data[key];
        const cur = card[plan];
        const featured = key === "hybrid";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.08 },
            className: `relative overflow-hidden rounded-3xl p-8 ${featured ? "glass-strong border-blue/40" : "glass"}`,
            children: [
              featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-6 top-6 rounded-full bg-blue px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground", children: "Most Complete" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
                "0",
                i + 1,
                " · ",
                card.sub
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-3xl font-semibold", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    className: "font-display text-5xl font-semibold tracking-tight",
                    children: cur.price
                  },
                  cur.price
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pb-2 text-sm text-muted-foreground", children: cur.period })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gold", children: cur.setup }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: card.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-blue/15 text-[10px] text-blue", children: "✓" }),
                p
              ] }, p)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  "data-cursor": "cta",
                  className: `mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition ${featured ? "bg-blue text-primary-foreground glow-blue hover:scale-[1.02]" : "border border-border bg-white/[0.02] hover:bg-white/[0.06]"}`,
                  children: [
                    "Get ",
                    card.title,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                  ]
                }
              )
            ]
          },
          key
        );
      }) })
    ] })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative px-6 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8 },
        className: "font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95]",
        children: [
          "Ready to manage your company",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "professionally?" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.15 },
        className: "mx-auto mt-6 max-w-xl text-muted-foreground",
        children: "Book a demo today and see how MaamulPro can help your business grow."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.25 },
        className: "mt-10 flex flex-wrap justify-center gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/252615482954?text=Asc%2C%20waxaan%20rabaa%20inaan%20wax%20badan%20ka%20ogaado%20adeegga%20MaamulPro.",
              target: "_blank",
              "data-cursor": "cta",
              className: "inline-flex items-center gap-2 rounded-xl bg-blue px-8 py-4 text-sm font-semibold text-primary-foreground glow-blue transition hover:scale-[1.03]",
              children: "Request Demo →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://app.maamulpro.site",
              target: "_blank",
              className: "inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.02] px-8 py-4 text-sm font-semibold transition hover:bg-white/[0.06]",
              children: "Login to System"
            }
          )
        ]
      }
    )
  ] }) });
}
const siivGroupLogo = "/assets/siiv-group-BnrjeYB-.png";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: maamulProLogo, alt: "MaamulPro", className: "h-6 w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-foreground", children: [
        "Maamul",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue", children: "Pro" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " MaamulPro. All rights reserved."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Powered by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: siivGroupLogo, alt: "Siiv Group", className: "inline h-5 w-auto align-middle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Siiv Group" })
    ] })
  ] }) });
}
function CustomCursor() {
  return null;
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BentoFeatures, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAccess, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
