import { deliverables, proposal, stack, terms, timeline } from "../content/proposal";
import { PageMotion, RestaurantPreview } from "../components/Experience";

const dollars = new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0,
});

const nav = [
  ["Scope", "#scope"], ["Timeline", "#timeline"], ["Technology", "#technology"], ["Investment", "#investment"],
];

function Brand() {
  return (
    <a className="brand" href={proposal.website} aria-label="Learn more about Orbilect SEO">
      <img src="/orbilect-seo-mark.svg" alt="" width="34" height="34" />
      <span>Orbilect <b>SEO</b></span>
    </a>
  );
}

function Button({ href, children, secondary = false }) {
  return <a className={`button${secondary ? " secondary" : ""}`} href={href}>
    <span className="button-icon" aria-hidden="true">↗</span>{children}
  </a>;
}

function Heading({ eyebrow, lead, accent, copy }) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{lead} <span className="accent">{accent}</span></h2>
      {copy && <p className="description">{copy}</p>}
    </div>
  );
}

export default function ProposalPage() {
  const total = deliverables.reduce((count, group) => count + group.items.length, 0);

  return (
    <>
      <PageMotion />
      <header className="header">
        <div className="shell header-inner">
          <Brand />
          <nav aria-label="Proposal sections">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <Button href={proposal.calendly}>Book a call</Button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="shell hero-grid">
            <div data-reveal>
              <p className="eyebrow">Prepared by Orbilect SEO · <time dateTime={proposal.issueDateISO}>{proposal.issueDate}</time></p>
              <h1>{proposal.client}’s <span className="accent">Website Proposal</span></h1>
              <p className="hero-copy">A restaurant website with a dedicated reservation system for {proposal.business}. Give guests one place to explore the menu, find the restaurant, and book a table.</p>
              <div className="actions">
                <Button href="#scope">Explore the proposal</Button>
                <Button href={proposal.calendly} secondary>Discuss with Bilal</Button>
              </div>
            </div>
            <RestaurantPreview business={proposal.business} />
          </div>
          <dl className="shell facts">
            <div><dt>Project</dt><dd>{proposal.business} · {proposal.location}</dd></div>
            <div><dt>Target tested handoff</dt><dd>{proposal.handoff}</dd></div>
            <div><dt>Base investment</dt><dd>{dollars.format(proposal.plans[0].price)} USD</dd></div>
          </dl>
        </section>

        <section className="section shell" aria-labelledby="domain-title">
          <div className="domain-card card" data-reveal>
            <div><p className="eyebrow">Domain and ownership</p><h2 id="domain-title">Your restaurant’s <span className="accent">address online</span></h2></div>
            <div><strong className="domain-name">{proposal.domain}</strong><p>{proposal.domainStatus}</p></div>
          </div>
        </section>

        <section className="section shell" id="scope">
          <Heading eyebrow="Project scope" lead="What we’ll" accent="deliver" copy={`${total} deliverables across the guest website, direct reservations, staff tools, search setup, and launch.`} />
          <div className="scope-grid">
            {deliverables.map((group) => (
              <article className="card scope-card" data-reveal key={group.id}>
                <h3>{group.title}</h3><p>{group.intro}</p>
                <ul>{group.items.map(([title, copy]) => (
                  <li key={title}><strong>{title}</strong><span>{copy}</span></li>
                ))}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="timeline">
          <div className="shell">
            <Heading eyebrow="Delivery calendar" lead="From kickoff to" accent="tested handoff" copy="Open any milestone to see the work planned for that week." />
            <div className="timeline">
              {timeline.map(([date, title, copy], index) => (
                <details className="card milestone" data-reveal key={date} open={index === 0 ? true : undefined}>
                  <summary><time>{date}</time><strong>{title}</strong><span className="expand" aria-hidden="true" /></summary>
                  <p>{copy}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="technology">
          <Heading eyebrow="Technology stack" lead="The tools behind" accent="the website" />
          <div className="stack-grid">{stack.map(([title, tools, copy]) => (
            <article className="card" data-reveal key={title}><h3>{title}</h3><p className="tool-list">{tools}</p><p>{copy}</p></article>
          ))}</div>
        </section>

        <section className="section section-grid" id="investment">
          <div className="shell">
            <Heading eyebrow="Investment and payment" lead="Choose your" accent="project scope" copy="All amounts are in USD. Both options follow the same payment schedule." />
            <div className="plans">
              {proposal.plans.map((plan) => {
                const deposit = plan.price * proposal.upfrontPercent / 100;
                return (
                  <article className="card plan" data-reveal key={plan.title}>
                    <h3>{plan.title}</h3>
                    <p className="price">{dollars.format(plan.price)}</p>
                    <p>{plan.description}</p>
                    <ul>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                    <dl>
                      <div><dt>{proposal.upfrontPercent}% on acceptance</dt><dd>{dollars.format(deposit)}</dd></div>
                      <div><dt>{100 - proposal.upfrontPercent}% at delivery</dt><dd>{dollars.format(plan.price - deposit)}</dd></div>
                    </dl>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section shell" id="terms">
          <Heading eyebrow="Project terms" lead="How we’ll" accent="work together" />
          <div className="terms-grid">{terms.map(([title, copy]) => (
            <article className="card" data-reveal key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}</div>
        </section>

        <section className="section shell" id="next-steps">
          <div className="callout card" data-reveal>
            <Heading eyebrow="Next step" lead="Let’s talk through" accent="your launch" copy="Book a call with Bilal to review the scope, choose an option, and agree on the kickoff." />
            <div className="actions"><Button href={proposal.calendly}>Book a call with Bilal</Button><Button href={proposal.website} secondary>Learn about Orbilect SEO</Button></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <Brand />
          <span>Prepared for {proposal.client}</span>
          <a href={proposal.privacy}>Privacy policy</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
