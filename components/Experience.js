"use client";

import { useEffect, useState } from "react";

const previews = [
  { label: "Guest website", title: "Find your next table.", text: "Go from the menu and location straight to a reservation.", steps: ["Explore the menu", "Find the restaurant", "Reserve a table"], detail: "Plan your visit", metric: "Menu & hours" },
  { label: "Reservations", title: "Book a table in a few steps.", text: "Choose an available slot and leave the details the restaurant needs.", steps: ["Party size", "Date and time", "Contact details"], detail: "Party size", metric: "2 guests" },
  { label: "Staff dashboard", title: "See what’s coming up.", text: "Review bookings, update their status, and prepare for service.", steps: ["Upcoming bookings", "Guest details", "Reservation status"], detail: "Reservation queue", metric: "Upcoming" },
];

export function PageMotion() {
  useEffect(() => {
    const progress = document.querySelector("[data-progress]");
    function updateProgress() {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty("--progress", range > 0 ? Math.min(1, window.scrollY / range) : 0);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let surface;
    let bounds;
    function resetSurface() {
      surface?.style.removeProperty("--tilt-x");
      surface?.style.removeProperty("--tilt-y");
      surface = null;
      bounds = null;
    }
    function moveSurface(event) {
      if (event.pointerType !== "mouse" || reduce.matches) return;
      const next = event.target instanceof Element ? event.target.closest("[data-depth]") : null;
      if (next !== surface) {
        resetSurface();
        if (next) {
          surface = next;
          bounds = next.getBoundingClientRect();
        }
      }
      if (!bounds?.width || !bounds.height) return;
      const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
      const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
      surface.style.setProperty("--tilt-x", `${(0.5 - y) * 10}deg`);
      surface.style.setProperty("--tilt-y", `${(x - 0.5) * 14}deg`);
    }

    updateProgress();
    const resizeObserver = new ResizeObserver(() => {
      updateProgress();
      resetSurface();
    });
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("scroll", resetSurface, { passive: true });
    document.addEventListener("pointermove", moveSurface, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetSurface);
    reduce.addEventListener("change", resetSurface);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!reduce.matches) {
          entry.target.animate(
            [{ opacity: 0.3, translate: "0 24px" }, { opacity: 1, translate: "0 0" }],
            { duration: 640, easing: "cubic-bezier(.2,.75,.25,1)" }
          );
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", resetSurface);
      document.removeEventListener("pointermove", moveSurface);
      document.documentElement.removeEventListener("pointerleave", resetSurface);
      reduce.removeEventListener("change", resetSurface);
    };
  }, []);

  return <div className="progress" data-progress aria-hidden="true" />;
}

export function RestaurantPreview({ business }) {
  const [selected, setSelected] = useState(0);
  const preview = previews[selected];

  return (
    <div className="preview" data-reveal>
      <div className="preview-scene" data-depth>
        <div className="preview-platform">
          <div className="window">
            <div className="window-bar">
              <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>{business}</span>
            </div>
            <div className="window-content" key={selected} aria-live="polite">
              <p className="eyebrow">{preview.label}</p>
              <h2>{preview.title}</h2>
              <p>{preview.text}</p>
              <ol className="preview-steps">
                {preview.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
          <div className="preview-float" aria-hidden="true">
            <span className="float-icon">↗</span>
            <span>{preview.detail}<strong>{preview.metric}</strong></span>
          </div>
        </div>
      </div>
      <div className="preview-switch" role="group" aria-label="Explore the restaurant experience">
        {previews.map((view, index) => (
          <button key={view.label} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function DeliverableExplorer({ groups }) {
  const [selected, setSelected] = useState(0);
  let itemOffset = 0;

  return (
    <div className="scope-explorer" data-reveal>
      <div className="scope-switch" role="group" aria-label="Deliverable categories">
        {groups.map((group, index) => (
          <button
            key={group.id}
            type="button"
            aria-pressed={selected === index}
            aria-controls={`scope-${group.id}`}
            onClick={() => setSelected(index)}
          >
            {group.title}<span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="scope-panels">
        {groups.map((group, index) => {
          const start = itemOffset + 1;
          itemOffset += group.items.length;
          return (
            <div key={group.id} id={`scope-${group.id}`} hidden={selected !== index} className="scope-panel">
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
              <ol className="scope-grid" start={start}>
                {group.items.map(([title, copy], itemIndex) => (
                  <li className="card scope-card" data-depth key={title}>
                    <div className="depth-face">
                      <div className="scope-number" aria-hidden="true">{String(start + itemIndex).padStart(2, "0")}</div>
                      <h4>{title}</h4>
                      <p>{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}
