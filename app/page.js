import { deliverables, proposal, stack, terms, timeline } from "../content/proposal";
import { DeliverableExplorer, PageMotion, RestaurantPreview } from "../components/Experience";

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
        <section className="hero dark grid-surface" id="top">
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

        <section className="section" aria-labelledby="domain-title">
          <div className="shell domain-layout">
            <div data-reveal>
              <p className="eyebrow">Domain and ownership</p>
              <h2 id="domain-title">Your restaurant’s <span className="accent">address online</span></h2>
              <p className="description">{proposal.domainStatus}</p>
            </div>
            <div className="domain-scene" data-reveal data-depth>
              <div className="domain-browser depth-face">
                <div className="window-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>Website address</span></div>
                <strong className="domain-name">{proposal.domain}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark grid-surface" id="scope">
          <div className="shell">
            <Heading eyebrow="Project scope" lead="What we’ll" accent="deliver" copy={`${total} deliverables across the guest website, direct reservations, staff tools, search setup, and launch.`} />
            <DeliverableExplorer groups={deliverables} />
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="shell timeline-layout">
            <Heading eyebrow="Delivery calendar" lead="From kickoff to" accent="tested handoff" copy="Open any milestone to see the work planned for that week." />
            <div className="timeline">
              {timeline.map(([date, title, copy], index) => (
                <details className="card milestone" data-reveal data-depth key={date} open={index === 0 || undefined}>
                  <summary className="depth-face"><span className="milestone-date">{date}</span><strong>{title}</strong><span className="expand" aria-hidden="true" /></summary>
                  <p>{copy}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark grid-surface" id="technology">
          <div className="shell">
            <Heading eyebrow="Technology stack" lead="The tools behind" accent="the website" />
            <div className="stack-grid">{stack.map(([title, tools, copy]) => (
              <article className="card stack-card" data-depth data-reveal key={title}>
                <div className="depth-face">
                  <span className="stack-layers" aria-hidden="true"><i /><i /><i /></span>
                  <h3>{title}</h3>
                  <ul className="tool-list">{tools.split(" · ").map((tool) => <li key={tool}>{tool}</li>)}</ul>
                  <p>{copy}</p>
                </div>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="section" id="investment">
          <div className="shell">
            <Heading eyebrow="Investment and payment" lead="Choose your" accent="project scope" copy="All amounts are in USD. Both options follow the same payment schedule." />
            <div className="plans">
              {proposal.plans.map((plan) => {
                const deposit = plan.price * proposal.upfrontPercent / 100;
                return (
                  <article className="card plan" data-depth data-reveal key={plan.title}>
                    <div className="depth-face">
                      <h3>{plan.title}</h3>
                      <p className="price">{dollars.format(plan.price)}</p>
                      <p>{plan.description}</p>
                      <ul>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                      <dl>
                        <div><dt>{proposal.upfrontPercent}% on acceptance</dt><dd>{dollars.format(deposit)}</dd></div>
                        <div><dt>{100 - proposal.upfrontPercent}% at delivery</dt><dd>{dollars.format(plan.price - deposit)}</dd></div>
                      </dl>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="actions" data-reveal>
              <Button href="#terms" secondary>Review project terms</Button>
              <Button href={proposal.termsUrl}>Terms &amp; Conditions</Button>
            </div>
          </div>
        </section>

        <section className="section dark grid-surface" id="terms">
          <div className="shell">
            <Heading eyebrow="Project terms" lead="How we’ll" accent="work together" />
            <div className="terms-grid">{terms.map(([title, copy]) => (
              <article className="card term-card" data-reveal data-depth key={title}>
                <div className="depth-face"><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="section" id="next-steps">
          <div className="shell callout-layout">
            <div>
              <Heading eyebrow="Next step" lead="Let’s talk through" accent="your launch" copy="Book a call with Bilal to review the scope, choose an option, and agree on the kickoff." />
              <div className="actions" data-reveal>
                <Button href={proposal.calendly}>Book a call with Bilal</Button>
                <Button href={proposal.website} secondary>Learn about Orbilect SEO</Button>
              </div>
            </div>
            <div className="brand-scene" data-depth data-reveal aria-hidden="true">
              <div className="brand-orbit depth-face">
                <span /><span />
                <img src="/orbilect-seo-mark.svg" alt="" width="82" height="82" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer dark">
        <div className="shell footer-inner">
          <Brand />
          <span>Prepared for {proposal.client}</span>
          <a href={proposal.privacy}>Privacy policy</a>
          <a href={proposal.termsUrl}>Terms &amp; Conditions</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
