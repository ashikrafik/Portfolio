import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Terminal, Shield, Mail, Phone, Linkedin, Download, ArrowRight, Cpu,
  Radar, Activity, Bug, Network, Eye, Lock, FileSearch, Skull, FlaskConical,
  Trophy, Award, BookOpen, GraduationCap, Briefcase, ChevronRight, Github,
  Wifi, Code2, ServerCog, Crosshair, Fingerprint,
} from "lucide-react";

import { BootLoader } from "@/components/cyber/BootLoader";
import { ParticleField } from "@/components/cyber/ParticleField";
import { HeroTerminal } from "@/components/cyber/HeroTerminal";
import { ScrambleText } from "@/components/cyber/ScrambleText";
import { TiltCard } from "@/components/cyber/TiltCard";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Ashik R — Cybersecurity Specialist | VAPT & Threat Analytics" },
      { name: "description", content: "Tactical cybersecurity portfolio: VAPT, SIEM threat monitoring, ethical hacking, OWASP, CTF winner, IEEE researcher." },
      { property: "og:title", content: "Mohammed Ashik R — Cyber Tactical Interface" },
      { property: "og:description", content: "VAPT • SIEM • Web App Security • Ethical Hacking" },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  useScrollReveal();

  // Smooth-scroll for in-page anchors
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {!booted && <BootLoader onDone={() => setBooted(true)} />}
      <ParticleField />
      <CyberNav />
      <main className="relative">
        <CommandCenter />
        <ProfileSection />
        <SkillMatrix />
        <Timeline />
        <WarRoom />
        <Credentials />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

/* ---------- NAV ---------- */
function CyberNav() {
  const links = [
    { href: "#about", label: "Profile" },
    { href: "#skills", label: "Arsenal" },
    { href: "#timeline", label: "Ops" },
    { href: "#projects", label: "War Room" },
    { href: "#credentials", label: "Creds" },
    { href: "#contact", label: "Comms" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <a href="#top" className="group flex items-center gap-2 font-display text-sm font-bold tracking-widest">
          <span className="grid h-8 w-8 place-items-center rounded border border-cyber-cyan/50 bg-cyber-cyan/10 shadow-cyber-cyan">
            <Shield className="h-4 w-4 text-cyber-cyan" />
          </span>
          <span className="text-foreground">ASHIK<span className="text-cyber-cyan">_R</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1 font-mono-cyber text-[12px]">
          {links.map((l, i) => (
            <a key={l.href} href={l.href}
              className="group relative px-3 py-1.5 text-muted-foreground transition-colors hover:text-cyber-cyan">
              <span className="text-cyber-cyan/60 mr-1">0{i + 1}.</span>{l.label}
              <span className="absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-cyber-cyan transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 font-mono-cyber text-[11px] text-cyber-green">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-green" />
          </span>
          <span className="hidden sm:inline">LIVE · SECURE</span>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function CommandCenter() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/5 px-3 py-1 font-mono-cyber text-[11px] text-cyber-cyan">
            <Radar className="h-3 w-3 animate-radar" />
            COMMAND_CENTER // SECTOR-01
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="block text-foreground">MOHAMMED</span>
            <ScrambleText
              as="span"
              text="ASHIK R"
              trigger="view"
              className="block text-glow-cyan bg-gradient-cyber bg-clip-text text-transparent"
            />
          </h1>
          <p className="mt-5 font-mono-cyber text-sm sm:text-base text-cyber-cyan">
            &gt; Cybersecurity Specialist <span className="text-muted-foreground">//</span> VAPT &amp; Threat Analytics
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/80">
            Cybersecurity professional with hands-on expertise in <span className="text-cyber-cyan">Vulnerability Assessment and Penetration Testing (VAPT)</span>,
            Enterprise Threat Detection, and SIEM integration. Proficient in offensive and defensive security paradigms, leveraging industry-standard tools to secure enterprise architectures.
            Demonstrated success in IoT hardware security via RFID access controls and active engagement in advanced CTF environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="cyber-btn group">
              <Crosshair className="h-4 w-4" /> Access War Room
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="cyber-btn-ghost group">
              <Download className="h-4 w-4" /> Decrypt CV
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { k: "EXP", v: "VAPT" },
              { k: "CTF", v: "1St · 2nd" },
              { k: "IEEE", v: "Published" },
            ].map((s) => (
              <div key={s.k} className="cyber-card px-3 py-2.5">
                <div className="font-mono-cyber text-[10px] text-cyber-cyan">{s.k}</div>
                <div className="font-display text-sm font-semibold text-foreground">{s.v}</div>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal">
          <HeroTerminal />
          <div className="mt-3 flex items-center justify-between font-mono-cyber text-[11px] text-muted-foreground">
            <span>↳ live demo loop · idle defense system · Bengaluru, Karnataka | IN</span>
            <span className="text-cyber-green">UPTIME 99.97%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROFILE & CONTACT ---------- */
function ProfileSection() {
  const contacts = [
    { icon: Mail, label: "SECURE MAIL", value: "ashikashikrohith123@gmail.com", href: "mailto:ashikashikrohith123@gmail.com" },
    { icon: Phone, label: "COMM LINE", value: "+91-9943781197", href: "tel:+919943781197" },
    { icon: Linkedin, label: "SECURE LINK", value: "linkedin.com/in/mohammed-ashik-30b7753a1", href: "https://linkedin.com/in/mohammed-ashik-30b7753a1" },
  ];
  return (
    <section id="about" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="02" code="THREAT_INTEL" title="Profile" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <TiltCard className="lg:col-span-2 group">
            <div className="cyber-card corner-brackets relative h-full p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2 font-mono-cyber text-[11px] text-cyber-cyan">
                <Fingerprint className="h-3.5 w-3.5" /> CLASSIFIED // CLEARANCE LVL 3
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
                Skilled in <span className="text-cyber-cyan">identifying, validating, and mitigating critical security vulnerabilities</span> aligned with OWASP methodologies.
                <span className="text-cyber-green"> Published IEEE research author</span> and highly decorated Capture The Flag (CTF) competitor with a rigorous foundation in
                ethical hacking, network security, and incident response.
                Currently advancing tactical capabilities at <span className="text-cyber-cyan">RedTeam Hacker Academy</span>, specializing in complex machine-based offensive security challenges and real-time threat correlation.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-cyber text-[11px]">
                {[
                  { k: "ROLE", v: "RED + BLUE TEAM" },
                  { k: "ORIGIN", v: "BENGALURU, INDIA" },
                  { k: "STATUS", v: "ACTIVE" },
                ].map((m) => (
                  <div key={m.k} className="border-l-2 border-cyber-cyan/70 bg-surface/40 px-3 py-2">
                    <div className="text-cyber-cyan/80">{m.k}</div>
                    <div className="text-foreground">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
          <div id="contact" className="grid gap-4">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="cyber-card corner-brackets group flex items-center gap-4 p-4 transition-transform hover:-translate-y-0.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan shadow-cyber-cyan transition-all group-hover:bg-cyber-cyan group-hover:text-background">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-mono-cyber text-[10px] text-cyber-cyan">{c.label}</div>
                  <ScrambleText text={c.value} className="block truncate font-mono-cyber text-sm text-foreground" />
                </div>
                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyber-cyan" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILL MATRIX ---------- */
const CORE_COMPETENCIES = [
  { name: "Vulnerability Assessment & Penetration Testing (VAPT)", icon: Bug },
  { name: "Threat Detection & Monitoring", icon: Radar },
  { name: "Ethical Hacking", icon: Skull },
  { name: "SIEM Analysis", icon: ServerCog },
  { name: "Risk Assessment", icon: Shield },
  { name: "Web Application Security", icon: Lock },
  { name: "Security Operations Center", icon: Eye },
  { name: "Incident Response", icon: Activity },
  { name: "Log Analysis", icon: FileSearch },
  { name: "Network Security", icon: Network },
  { name: "Security Reporting", icon: BookOpen },
];

const TECHNICAL_SKILLS = [
  { name: "Burp Suite", icon: Crosshair },
  { name: "Nmap", icon: Network },
  { name: "Metasploit", icon: Skull },
  { name: "Wireshark", icon: Eye },
  { name: "Hydra", icon: Lock },
  { name: "Gobuster", icon: FileSearch },
  { name: "Nikto", icon: Bug },
  { name: "Kali Linux", icon: Terminal },
  { name: "Ubuntu Linux", icon: Terminal },
  { name: "Windows", icon: Terminal },
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: ServerCog },
  { name: "Bash Scripting", icon: Terminal },
  { name: "C", icon: Code2 },
  { name: "TCP/IP", icon: Wifi },
  { name: "DNS", icon: Network },
  { name: "HTTP/HTTPS", icon: Network },
  { name: "Routing", icon: Network },
  { name: "Switching", icon: Network },
  { name: "Packet Analysis", icon: Eye },
  { name: "TryHackMe", icon: Cpu },
  { name: "Hack The Box", icon: Cpu },
  { name: "PortSwigger Web Security Academy", icon: Shield },
  { name: "PicoCTF", icon: Trophy },
];

function SkillMatrix() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="03" code="SKILL_MATRIX" title="Tactical Capabilities" />

        <div className="mt-10">
          <div className="mb-6 flex items-center gap-2 font-mono-cyber text-xs text-cyber-cyan">
            <Cpu className="h-4 w-4" />
            <span className="tracking-widest">CORE COMPETENCIES</span>
            <span className="ml-2 h-px flex-1 bg-gradient-to-r from-cyber-cyan/40 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {CORE_COMPETENCIES.map((d) => (
              <div key={d.name} className="cyber-card group p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-wide text-foreground">{d.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-2 font-mono-cyber text-xs text-cyber-cyan">
            <Terminal className="h-4 w-4" />
            <span className="tracking-widest">TECHNICAL SKILLS</span>
            <span className="ml-2 h-px flex-1 bg-gradient-to-r from-cyber-cyan/40 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {TECHNICAL_SKILLS.map((d) => (
              <div key={d.name} className="cyber-card group p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-wide text-foreground">{d.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMELINE ---------- */
function Timeline() {
  return (
    <section id="timeline" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="04" code="OPERATIONS" title="EXPERIENCE" />
        <div className="relative mt-10 pl-8 sm:pl-12">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyber-cyan via-cyber-cyan/50 to-transparent" />
          <TimelineNode
            date="September 2025 — Present"
            role="Vulnerability Assessment & Penetration Testing (VAPT)"
            firm="Cyber Shield"
            items={[
              "Conducted end-to-end VAPT on complex web applications and enterprise network systems, executing meticulous reconnaissance, scanning, and enumeration using Nmap and Burp Suite.",
              "Identified, validated, and documented critical vulnerabilities including SQL Injection (SQLi), Cross-Site Scripting (XSS), and severe security misconfigurations.",
              "Authored comprehensive VAPT reports featuring precise risk classifications, technical impact analyses, and actionable remediation protocols aligned with industry standards.",
              "Executed manual and automated exploitation using Metasploit, fortifying organizational understanding of advanced ethical hacking methodologies and secure coding practices.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
function TimelineNode({ date, role, firm, items }: { date: string; role: string; firm: string; items: string[] }) {
  return (
    <div className="reveal relative mb-10">
      <span className="absolute -left-[34px] sm:-left-[42px] top-1.5 grid h-7 w-7 place-items-center rounded-full border border-cyber-cyan bg-background shadow-cyber-cyan">
        <span className="h-2.5 w-2.5 rounded-full bg-cyber-cyan animate-glow-pulse" />
      </span>
      <TiltCard className="group" intensity={4}>
        <div className="cyber-card corner-brackets p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2 font-mono-cyber text-[11px]">
            <span className="rounded border border-cyber-green/40 bg-cyber-green/10 px-2 py-0.5 text-cyber-green">ACTIVE</span>
            <span className="text-cyber-cyan">{date}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">{role}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-cyber-cyan" /> {firm}
          </div>
          <ul className="mt-4 space-y-2.5">
            {items.map((it) => (
              <li key={it} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyber-cyan" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </div>
  );
}

/* ---------- WAR ROOM (PROJECTS) ---------- */
const PROJECTS = [
  {
    code: "PRJ-001",
    title: "Enterprise Threat Detection & SIEM Integration",
    tags: ["SIEM", "LogCorrelation", "RealTimeAlerts", "IncidentResponse"],
    intel: "Architected and deployed a highly robust SIEM-based centralized logging system designed to ingest, analyze, and correlate security events across diverse enterprise infrastructure. Engineered advanced event correlation rules to facilitate real-time network threat detection and streamline rapid incident response workflows.",
    icon: Activity,
    snippet: [
      "rule: brute_force_ssh",
      "  match: failed_logins > 5 in 60s",
      "  action: alert.send(severity=HIGH)",
      "  enrich: geoip, threatfeed",
    ],
  },
  {
    code: "PRJ-002",
    title: "Raspberry Pi Guard Lock Box",
    tags: ["IoT", "RFID", "HardwareSecurity", "MFA"],
    intel: "Designed and engineered a highly secure, IoT-based smart lock mechanism driven by Raspberry Pi architecture. Integrated sophisticated hardware and software security controls, featuring RFID authentication protocols, persistent access monitoring logs, and real-time alert triggers to prevent unauthorized physical access.",
    icon: Lock,
    snippet: [
      "if rfid.uid in whitelist:",
      "  request_otp(user)",
      "  log.append(ts, uid, 'GRANTED')",
      "else: trigger_alert('UNAUTHORIZED')",
    ],
  },
];

function WarRoom() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="05" code="WAR_ROOM" title={"Mission Archives ( PROJECTS )\u00a0"} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <TiltCard key={p.code} className="group" intensity={6}>
              <article className="cyber-card corner-brackets relative h-full overflow-hidden p-6">
                {/* hidden source on hover */}
                <pre className="pointer-events-none absolute inset-0 select-none p-6 font-mono-cyber text-[11px] leading-relaxed text-cyber-green/0 transition-colors duration-500 group-hover:text-cyber-green/30">
{p.snippet.join("\n")}
                </pre>
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between font-mono-cyber text-[11px]">
                    <span className="text-cyber-cyan">{p.code}</span>
                    <span className="rounded border border-cyber-green/40 bg-cyber-green/10 px-2 py-0.5 text-cyber-green">DECLASSIFIED</span>
                  </div>
                  <div className="mb-4 flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded border border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan shadow-cyber-cyan">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">{p.intel}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded border border-border bg-surface/50 px-2 py-0.5 font-mono-cyber text-[10px] text-cyber-cyan">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-mono-cyber text-[11px] text-muted-foreground transition-colors group-hover:text-cyber-cyan">
                    <span>VIEW INTEL</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CREDENTIALS ---------- */
function Credentials() {
  return (
    <section id="credentials" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="06" code="ACCOLADES" title="Credentials, Honors & Education" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="cyber-card corner-brackets p-6 reveal">
            <PanelHead icon={Trophy} label="ACHIEVEMENTS" />
            <ul className="mt-5 space-y-4">
              {[
                { rank: "1ST", text: "CTF Inter College Event" },
                { rank: "2ND", text: "AInnovat Capture The Flag (CTF) Competition" },
                { rank: "MEM", text: "Active OWASP Member & Cybersecurity Event Organizer" },
              ].map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-cyber-amber/50 bg-cyber-amber/10 font-display text-xs font-bold text-cyber-amber shadow-[0_0_20px_oklch(0.82_0.18_80/0.4)]">
                    {a.rank}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/85">{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cyber-card corner-brackets p-6 reveal">
            <PanelHead icon={FlaskConical} label="RESEARCH / PUBLICATIONS" />
            <div className="mt-5">
              <div className="mb-2 font-mono-cyber text-[11px] text-cyber-green">IEEE XPLORE · PUBLISHED AUTHOR</div>
              <h4 className="font-display text-base font-semibold leading-snug text-foreground">
                Multi-Stage Context-Aware IoT Architecture with Genetic Feature Selection and Neural XGBoost Prediction
              </h4>
              <p className="mt-3 text-sm text-muted-foreground">
                Peer-reviewed research on intelligent IoT threat classification utilizing hybrid optimization and neural ensemble inference methodologies.
              </p>
              <div className="mt-5 flex items-center gap-2 font-mono-cyber text-[11px] text-cyber-cyan">
                <BookOpen className="h-3.5 w-3.5" /> ieeexplore.ieee.org
              </div>
            </div>
          </div>
          <div className="cyber-card corner-brackets p-6 reveal">
            <PanelHead icon={GraduationCap} label="ACADEMIC ARCHIVES" />
            <div className="mt-5 space-y-5">
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">B.E. Cyber Security</h4>
                <p className="mt-1 text-sm text-muted-foreground">Mahendra Engineering College</p>
                <div className="mt-3 grid grid-cols-2 gap-3 font-mono-cyber text-[11px]">
                  <Stat label="CGPA" value="8.2 / 10.0" />
                  <Stat label="CLASS OF" value="June 2025" />
                </div>
              </div>
              <div className="border-t border-border/40 pt-4">
                <h4 className="font-display text-base font-semibold text-foreground">Advanced Security Training</h4>
                <p className="mt-1 text-sm text-muted-foreground">RedTeam Hacker Academy</p>
                <div className="mt-3 font-mono-cyber text-[11px]">
                  <Stat label="TIMELINE" value="January 2026 – Present" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelHead({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="font-display text-sm font-bold tracking-widest text-foreground">{label}</h3>
      <span className="ml-2 h-px flex-1 bg-gradient-to-r from-cyber-cyan/40 to-transparent" />
    </div>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-cyber-cyan/70 bg-surface/40 px-3 py-2">
      <div className="text-cyber-cyan/80">{label}</div>
      <div className="font-display text-sm text-foreground">{value}</div>
    </div>
  );
}

/* ---------- CERTIFICATIONS ---------- */
const CERTS = [
  { name: "CEH v13", full: "Certified Ethical Hacker — EC-Council (In Progress)", status: "PURSUING", color: "amber" },
  { name: "CICSA V4.AI", full: "Certified IT Infrastructure & Cyber SOC Analyst — RedTeam Hacker Academy", status: "VERIFIED", color: "cyan" },
  { name: "JCSA", full: "Junior CyberSecurity Analyst — Cisco", status: "VERIFIED", color: "cyan" },
  { name: "CCNA", full: "Networking — Cisco Networking Academy", status: "VERIFIED", color: "cyan" },
];

function Certifications() {
  return (
    <section id="certs" className="px-4 sm:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="07" code="CREDENTIALS" title="Verified Certifications" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c) => (
            <div key={c.name} className="group [perspective:1000px] reveal">
              <div className="relative h-56 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT */}
                <div className="cyber-card corner-brackets absolute inset-0 flex flex-col items-center justify-center p-5 text-center [backface-visibility:hidden]">
                  <span className={`grid h-14 w-14 place-items-center rounded-full border-2 ${c.color === "cyan" ? "border-cyber-cyan text-cyber-cyan shadow-cyber-cyan" : "border-cyber-amber text-cyber-amber"}`}>
                    <Award className="h-7 w-7" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-bold tracking-wider text-foreground">{c.name}</h4>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{c.full}</p>
                  <span className="absolute bottom-3 right-3 font-mono-cyber text-[10px] text-cyber-cyan/60">HOVER ▸</span>
                </div>
                {/* BACK */}
                <div className="cyber-card corner-brackets absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Fingerprint className={`h-9 w-9 ${c.color === "cyan" ? "text-cyber-cyan" : "text-cyber-amber"}`} />
                  <div className={`font-display text-xs font-bold tracking-[0.3em] ${c.color === "cyan" ? "text-cyber-cyan" : "text-cyber-amber"}`}>
                    {c.status}
                  </div>
                  <div className="font-mono-cyber text-[10px] text-muted-foreground">
                    ID · ASHIK-{c.name.replace(/\s+/g, "")}-2025
                  </div>
                  <div className="h-px w-2/3 bg-cyber-cyan/40" />
                  <div className="font-mono-cyber text-[10px] text-foreground/70">
                    SIGNATURE VALID · CHAIN OK
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ index, code, title }: { index: string; code: string; title: string }) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-3 font-mono-cyber text-[11px] text-cyber-cyan">
        <span>// {index}</span>
        <span className="h-px w-12 bg-cyber-cyan/60" />
        <span>{code}</span>
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        <ScrambleText text={title} trigger="view" />
      </h2>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 sm:px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-mono-cyber text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-cyber-cyan" />
          © {new Date().getFullYear()} MOHAMMED ASHIK R · ALL TRANSMISSIONS ENCRYPTED
        </div>
        <div className="flex items-center gap-3 font-mono-cyber text-xs text-cyber-cyan">
          <a href="mailto:ashikashikrohith123@gmail.com" className="hover:text-cyber-green"><Mail className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/mohammed-ashik-30b7753a1" target="_blank" rel="noreferrer" className="hover:text-cyber-green"><Linkedin className="h-4 w-4" /></a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyber-green"><Github className="h-4 w-4" /></a>
          <span className="ml-2 text-cyber-green">SESSION · SECURE</span>
        </div>
      </div>
    </footer>
  );
}
