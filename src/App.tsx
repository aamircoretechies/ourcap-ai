import { useEffect, useState, type ReactNode } from 'react'

const PRODUCT_URL = 'https://ourcap.vercel.app/'

type IconName = 'arrow' | 'check' | 'clock' | 'calendar' | 'people' | 'shield' | 'spark' | 'chart' | 'menu' | 'close'

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <><path d="m12 3-1.3 4.1a5 5 0 0 1-3.2 3.2L3 12l4.5 1.7a5 5 0 0 1 3.2 3.2L12 21l1.3-4.1a5 5 0 0 1 3.2-3.2L21 12l-4.5-1.7a5 5 0 0 1-3.2-3.2Z"/></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#top" className="inline-flex shrink-0 items-center" aria-label="Ourcap home"><img src={light ? '/images/logo-light.png' : '/images/logo-dark.png'} alt="Ourcap" width="412" height="83" className="h-auto w-[132px] sm:w-[145px]" /></a>
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function BrowserMockup({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`mockup ${className}`}><div className="mockup-bar"><i className="mockup-dot"/><i className="mockup-dot"/><i className="mockup-dot"/><span className="ml-2 h-2 w-20 rounded-full bg-slate-200"/></div><img src={src} alt={alt} width="1920" height="947" loading="lazy" decoding="async" /></div>
}

const faqs = [
  ['What is employee attendance and leave management software?', 'It is a web-based system that records attendance, organizes leave requests and approvals, and gives HR, managers, and employees a shared view of workforce availability.'],
  ['Who is Ourcap best for?', 'Ourcap is designed for HR and operations managers, SMB owners, field workforce coordinators, and growing teams that need a clearer way to manage attendance and leave.'],
  ['How does the attendance workflow work?', 'Employees clock in or out, managers review attendance and exceptions, and HR sees live summaries from one dashboard. The exact setup can be tailored during implementation.'],
  ['Can employees request leave themselves?', 'Yes. Employee self-service is designed to let team members submit leave requests and view relevant attendance information without relying on manual HR follow-up.'],
  ['Can managers approve or reject leave?', 'Yes. Manager-controlled approval workflows keep decisions organized and create a visible status for the employee and HR team.'],
  ['Does it support work-from-home visibility?', 'The workforce dashboard can surface who is working remotely, on leave, absent, or present so managers can plan with better context.'],
  ['Can it help with shift and field workforce coordination?', 'Yes. The platform is positioned for shift-based and distributed teams that need consistent attendance processes and workforce visibility.'],
  ['Does Ourcap include payroll visibility?', 'The supplied product interface includes salary and payroll views. Book a demo to confirm the exact payroll capabilities and integration scope for your organization.'],
  ['Can we export attendance or payroll data?', 'The product interface supports export-oriented workflows. Available formats and permissions should be confirmed during your tailored demo.'],
  ['How long does implementation take?', 'Implementation time depends on workforce size, policies, roles, and integrations. A discovery call is the right place to define a realistic rollout plan.'],
  ['Can our existing leave policy be configured?', 'Policy configuration is expected to follow your organization’s leave types, approval rules, and role structure. Confirm complex policy requirements during discovery.'],
  ['What access controls are available?', 'The interface is designed around employee, manager, HR, and administrator responsibilities. Specific roles and permission controls can be reviewed in a demo.'],
  ['How is employee data protected?', 'Security details should be evaluated against your requirements. Request current information about hosting, access control, backups, retention, and compliance before purchase.'],
  ['Does it integrate with our existing HR or payroll tools?', 'Integration requirements vary by system. Share your current tools during discovery so compatibility and any implementation work can be assessed accurately.'],
  ['Is there a mobile app?', 'The landing experience is mobile responsive. Ask the product team for current information about native mobile apps and mobile clock-in requirements.'],
  ['How much does Ourcap cost?', 'Pricing is not published on this page. Request a tailored demo to discuss your workforce size, workflow requirements, and the appropriate plan.'],
  ['Is support included?', 'Support scope can vary by plan and implementation. Confirm onboarding, administrator training, response times, and ongoing support during the sales process.'],
  ['Can we track late arrivals and attendance exceptions?', 'Attendance systems commonly surface exceptions such as lateness, absence, or missing clock events. A demo can confirm the exact rules available in Ourcap.'],
  ['Can remote teams use the platform?', 'Yes. The web-based workflow is suitable for distributed teams that need a shared view of attendance, leave, and work-from-home status.'],
  ['How do we get started?', 'Book a tailored demo. Bring your current attendance process, leave policy, team structure, and integration list so the conversation can focus on fit and rollout.'],
]

function App() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <div className="page-shell" id="top">
    <header className="section-wrap z-50 flex h-20 items-center justify-between">
      <Logo />
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
        <a className="hover:text-indigo" href="#solutions">Solutions</a><a className="hover:text-indigo" href="#features">Features</a><a className="hover:text-indigo" href="#how">How it works</a><a className="hover:text-indigo" href="#faq">FAQ</a>
      </nav>
      <a className="btn-primary hidden !min-h-10 !px-5 md:inline-flex" href={PRODUCT_URL} target="_blank" rel="noreferrer">Book a demo <Icon name="arrow" className="h-4 w-4" /></a>
      <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'} /></button>
      {open && <nav id="mobile-nav" className="absolute left-5 right-5 top-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:hidden"><a className="block rounded-xl px-4 py-3 font-bold" href="#solutions" onClick={() => setOpen(false)}>Solutions</a><a className="block rounded-xl px-4 py-3 font-bold" href="#features" onClick={() => setOpen(false)}>Features</a><a className="block rounded-xl px-4 py-3 font-bold" href="#how" onClick={() => setOpen(false)}>How it works</a><a className="block rounded-xl px-4 py-3 font-bold" href="#faq" onClick={() => setOpen(false)}>FAQ</a></nav>}
    </header>

    <main id="main">
      <section className="section-wrap pb-20 pt-14 text-center sm:pt-20">
        <Reveal><span className="eyebrow"><Icon name="spark" className="h-4 w-4" /> Smart workforce operations</span>
          <h1 className="headline mx-auto mt-7 max-w-4xl">Employee attendance & leave management, <span className="gradient-text">finally in sync.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Ourcap helps HR and operations teams track attendance, automate leave approvals, coordinate shifts, and give employees self-service access from one calm workspace.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="btn-primary" href={PRODUCT_URL} target="_blank" rel="noreferrer">Book a tailored demo <Icon name="arrow" className="h-4 w-4" /></a><a className="btn-secondary" href={PRODUCT_URL} target="_blank" rel="noreferrer">Explore the platform</a></div>
          <p className="mt-5 text-xs font-semibold text-slate-500">Built for HR teams, operations managers, SMBs, and field workforces.</p>
        </Reveal>
        <Reveal className="relative mx-auto mt-14 max-w-5xl [perspective:1200px]">
          <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,#f7a9d4_0%,#b9a6ff_38%,transparent_70%)] opacity-60 blur-3xl" />
          <BrowserMockup src="/images/employee-dashboard.png" alt="Ourcap employee attendance dashboard showing present, absent, leave, and remote-work status" className="float-slow ring-1 ring-violet/10" />
          <div className="absolute -bottom-7 -left-2 hidden items-center gap-3 rounded-2xl border border-white bg-white/90 px-4 py-3 text-left shadow-soft backdrop-blur sm:flex"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><Icon name="check" /></span><span><b className="block text-sm">Attendance clear</b><small className="text-slate-500">Live workforce visibility</small></span></div>
        </Reveal>
      </section>

      <section aria-label="Platform value" className="border-y border-slate-100 bg-white/65 py-7"><div className="section-wrap flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-bold text-slate-500"><span>HR control</span><span>Employee self-service</span><span>Leave automation</span><span>Shift visibility</span><span>Payroll context</span></div></section>

      <section className="section-wrap py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center"><span className="eyebrow">The operational gap</span><h2 className="section-title mt-5">Manual attendance creates work before the work even starts.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Spreadsheets, chat messages, paper registers, and disconnected payroll records make simple workforce questions slow to answer.</p></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ['01', 'No single source of truth', 'Attendance, leave, remote work, and shift context live in different places.'],
            ['02', 'Approvals lose momentum', 'Employees follow up manually while managers search for policy and team context.'],
            ['03', 'Payroll starts with cleanup', 'Missing records and attendance exceptions create avoidable reconciliation work.'],
          ].map(([n,t,d]) => <Reveal key={n} className="glass-card p-7"><span className="text-xs font-extrabold tracking-widest text-violet">{n}</span><h3 className="mt-5 text-xl font-extrabold tracking-tight">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p></Reveal>)}
        </div>
      </section>

      <section id="solutions" className="relative bg-cloud py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="section-wrap">
          <Reveal className="mx-auto max-w-3xl text-center"><span className="eyebrow">One connected solution</span><h2 className="section-title mt-5">See the full workforce picture without chasing updates.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Ourcap brings attendance, leave, payroll context, and employee access into a consistent operating rhythm.</p></Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="glass-card overflow-hidden p-5 sm:p-7 lg:row-span-2"><div className="mb-6"><span className="text-xs font-extrabold uppercase tracking-widest text-indigo">Live operations</span><h3 className="mt-2 text-2xl font-extrabold">A dashboard your managers can act on</h3><p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">Understand who is present, away, on break, or working remotely—without asking around.</p></div><BrowserMockup src="/images/admin-dashboard.png" alt="Ourcap administrator workforce dashboard with attendance summaries and team status" /></Reveal>
            <Reveal className="glass-card overflow-hidden p-5 sm:p-7"><div className="mb-5"><span className="text-xs font-extrabold uppercase tracking-widest text-indigo">Salary clarity</span><h3 className="mt-2 text-xl font-extrabold">Employee salary details, clearly organized</h3></div><BrowserMockup src="/images/salaries.png" alt="Ourcap salary management screen with employee salary breakdown and payslip preview" /></Reveal>
            <Reveal className="glass-card overflow-hidden p-5 sm:p-7"><div className="mb-5"><span className="text-xs font-extrabold uppercase tracking-widest text-indigo">Payroll workflow</span><h3 className="mt-2 text-xl font-extrabold">From workforce records to payroll review</h3></div><BrowserMockup src="/images/payroll.png" alt="Ourcap payroll dashboard with monthly trend and employee payroll details" /></Reveal>
          </div>
        </div>
      </section>

      <section id="features" className="section-wrap py-24 sm:py-32">
        <Reveal className="grid items-end gap-8 lg:grid-cols-2"><div><span className="eyebrow">Capabilities</span><h2 className="section-title mt-5">The everyday tools that keep your workforce moving.</h2></div><p className="max-w-xl leading-7 text-slate-600 lg:justify-self-end">Each capability removes a manual handoff and gives the right person a clearer next step.</p></Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['clock','Attendance tracking','Capture clock-in and clock-out activity in a consistent, reviewable workflow.'],
            ['calendar','Leave workflows','Move leave requests from submission to manager decision with visible status.'],
            ['people','Employee self-service','Let employees access relevant attendance, leave, and salary information.'],
            ['chart','Workforce visibility','See attendance summaries, absences, leave, breaks, and remote work at a glance.'],
            ['spark','Shift coordination','Give operations teams a shared view for planning shift and field workforce coverage.'],
            ['shield','Manager control','Keep approvals and workforce actions aligned to clear roles and permissions.'],
          ].map(([i,t,d]) => <article key={t} className="bg-white p-7 transition hover:bg-violet/[.025]"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender text-indigo" style={{background:'#F3F2FF'}}><Icon name={i as IconName} /></span><h3 className="mt-5 text-lg font-extrabold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p></article>)}
        </div>
      </section>

      <section id="how" className="bg-ink py-24 text-white sm:py-32"><div className="section-wrap">
        <Reveal className="mx-auto max-w-3xl text-center"><span className="eyebrow !border-white/10 !bg-white/10 !text-violet-200">How it works</span><h2 className="section-title mt-5 !text-white">A cleaner rhythm from first clock-in to final review.</h2></Reveal>
        <div className="relative mt-14 grid gap-5 lg:grid-cols-3"><div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-violet/20 via-violet to-violet/20 lg:block" />
          {[
            ['1','Set your workforce rules','Configure roles, leave types, approval paths, shifts, and the structure your team already uses.','HR leads the setup; employees receive clear access.'],
            ['2','Run attendance and leave daily','Employees record time and submit requests while managers review exceptions and approvals.','Everyone acts in the same shared workflow.'],
            ['3','Review with reliable context','HR and operations use live dashboards and organized records for planning and payroll review.','Managers spend less time assembling updates.'],
          ].map(([n,t,d,o]) => <Reveal key={n} className="relative rounded-[24px] border border-white/10 bg-white/[.06] p-7"><span className="grid h-16 w-16 place-items-center rounded-full border border-violet/40 bg-ink text-xl font-extrabold text-violet-300 shadow-[0_0_0_8px_#0f172a]">{n}</span><h3 className="mt-7 text-xl font-extrabold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{d}</p><p className="mt-5 border-t border-white/10 pt-5 text-xs font-semibold text-violet-200">{o}</p></Reveal>)}
        </div>
      </div></section>

      <section className="section-wrap py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center"><span className="eyebrow">Decision support</span><h2 className="section-title mt-5">Replace a patchwork process with one accountable system.</h2></Reveal>
        <Reveal className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 shadow-card"><div className="grid grid-cols-[1.2fr_1fr_1fr] bg-slate-50 px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 sm:px-8"><span>What changes</span><span>Manual methods</span><span className="text-indigo">Ourcap workflow</span></div>{[
          ['Attendance status','Scattered updates','Shared live view'],['Leave approvals','Messages and follow-ups','Visible request status'],['Scalability','More admin effort','Reusable workflows'],['Payroll preparation','Manual reconciliation','Organized payroll context'],['Employee access','HR-dependent','Self-service'],['Operational insight','After-the-fact','Current workforce picture']
        ].map((row,i) => <div key={row[0]} className={`grid grid-cols-[1.2fr_1fr_1fr] items-center px-5 py-5 text-sm sm:px-8 ${i ? 'border-t border-slate-100':''}`}><b>{row[0]}</b><span className="text-slate-500">{row[1]}</span><span className="flex items-center gap-2 font-bold text-ink"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Icon name="check" className="h-3.5 w-3.5"/></span>{row[2]}</span></div>)}</Reveal>
      </section>

      <section className="bg-gradient-to-b from-white via-[#fff6fb] to-white py-24 sm:py-32"><div className="section-wrap">
        <Reveal className="mx-auto max-w-3xl text-center"><span className="eyebrow">Made for the way you operate</span><h2 className="section-title mt-5">One platform, different workforce realities.</h2></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
          ['HR teams','Standardize requests, approvals, attendance review, and employee access.'],['Operations teams','See coverage, exceptions, remote status, and shift context in one place.'],['Growing SMBs','Move beyond spreadsheets before manual processes become operational drag.'],['Field workforces','Create a consistent attendance rhythm across distributed people and locations.']
        ].map(([t,d],i) => <Reveal key={t} className="glass-card p-6"><span className="text-sm font-extrabold text-violet">0{i+1}</span><h3 className="mt-10 text-xl font-extrabold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p></Reveal>)}</div>
      </div></section>

      <section id="faq" className="section-wrap py-24 sm:py-32">
        <Reveal className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div className="lg:sticky lg:top-10 lg:self-start"><span className="eyebrow">Buyer questions</span><h2 className="section-title mt-5">Answers for a confident next step.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">Straight answers about fit, implementation, security, integrations, pricing, and support—without invented claims.</p><a className="btn-primary mt-7" href={PRODUCT_URL} target="_blank" rel="noreferrer">Discuss your requirements <Icon name="arrow" className="h-4 w-4"/></a></div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a],i) => <details key={q} className="group py-1" open={i===0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-extrabold"><span>{q}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 text-lg font-medium transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-slate-600">{a}</p></details>)}</div>
        </Reveal>
      </section>

      <section id="demo" className="section-wrap pb-10"><Reveal className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_130%,rgba(209,62,170,.9),rgba(103,100,255,.55)_30%,transparent_67%)]"/><div className="relative"><div className="mb-8 flex justify-center"><Logo light /></div><span className="eyebrow !border-white/10 !bg-white/10 !text-white">Your next step</span><h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-.04em] sm:text-5xl">Bring attendance and leave into one clear operating rhythm.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">Book a tailored demo to review your workforce structure, policies, approval needs, and integration requirements.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="btn-primary !bg-white !text-ink hover:!bg-violet-100" href={PRODUCT_URL} target="_blank" rel="noreferrer">Book a tailored demo <Icon name="arrow" className="h-4 w-4"/></a><a className="btn-secondary !border-white/15 !bg-white/10 !text-white" href={PRODUCT_URL} target="_blank" rel="noreferrer">Review solutions</a></div></div></Reveal></section>
    </main>

    <footer className="section-wrap py-12"><div className="flex flex-col justify-between gap-8 border-t border-slate-200 pt-10 sm:flex-row"><div><Logo/><p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Smart workforce attendance and leave operations for growing teams.</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm font-semibold text-slate-600"><a href="#solutions">Solutions</a><a href="#features">Features</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div></div><p className="mt-10 text-xs text-slate-400">© 2026 Core Techies™. </p></footer>
  </div>
}

export default App
