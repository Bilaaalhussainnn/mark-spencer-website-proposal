"use client";

import { useEffect, useRef, useState } from "react";

const previews = [
  { label: "Guest experience", title: "Find your next table.", text: "Go from the menu and location straight to a reservation.", steps: ["Explore the menu", "Pick a time", "Reserve a table"] },
  { label: "Reservations", title: "Reserve in a few steps.", text: "Choose an available slot and leave the details the restaurant needs.", steps: ["Party size", "Date and time", "Contact details"] },
  { label: "Staff dashboard", title: "See what’s coming up.", text: "Review bookings, update their status, and prepare for service.", steps: ["Upcoming bookings", "Guest details", "Reservation status"] },
];

export function PageMotion() {
  useEffect(() => {
    const progress = document.querySelector("[data-progress]");
    const renderProgress = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty("--progress", range > 0 ? Math.min(1, window.scrollY / range) : 0);
    };
    renderProgress();
    window.addEventListener("scroll", renderProgress, { passive: true });
    window.addEventListener("resize", renderProgress);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer;
    if (!reduce && "IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.animate(
            [{ opacity: 0.45, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 460, easing: "ease-out" }
          );
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.12 });
      document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", renderProgress);
      window.removeEventListener("resize", renderProgress);
    };
  }, []);

  return <div className="progress" data-progress aria-hidden="true" />;
}

export function RestaurantPreview({ business }) {
  const [selected, setSelected] = useState(0);
  const stage = useRef(null);
  const preview = previews[selected];

  function tilt(event) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = stage.current;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--rx", `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 10}deg`);
    node.style.setProperty("--ry", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}deg`);
  }

  function resetTilt() {
    stage.current?.style.removeProperty("--rx");
    stage.current?.style.removeProperty("--ry");
  }

  return (
    <div className="preview" ref={stage} onPointerMove={tilt} onPointerLeave={resetTilt}>
      <div className="window">
        <div className="window-bar"><span aria-hidden="true">● ● ●</span><span>{business}</span></div>
        <div className="window-content" key={selected} aria-live="polite">
          <p className="eyebrow">{preview.label}</p>
          <h2>{preview.title}</h2>
          <p>{preview.text}</p>
          <div className="preview-steps">
            {preview.steps.map((step) => <span key={step}>{step}</span>)}
          </div>
        </div>
      </div>
      <div className="preview-switch" role="group" aria-label="Explore proposal concepts">
        {previews.map((view, index) => (
          <button key={view.label} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {view.label}
          </button>
        ))}
      </div>
      <p className="preview-note">Interactive concept preview</p>
    </div>
  );
}
