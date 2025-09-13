import { useLayoutEffect } from "react";

export function useCenterReveal(selector = ".section") {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    // hide until the first --reveal
    for (const el of els) el.style.visibility = "hidden";

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const smoothstep = (t: number) => t * t * (3 - 2 * t);

    let ticking = false;
    const current = new WeakMap<HTMLElement, number>();

    const computeTarget = (el: HTMLElement) => {
      const vh = window.innerHeight;

      // directional fade in/out gates
      const inStart  = vh * 0.95;
      const inEnd    = vh * 0.40;
      const outStart = vh * 0.50;
      const outEnd   = vh * 0.15;

      const rect = el.getBoundingClientRect();
      const top = rect.top, bottom = rect.bottom;

      const rawIn  = clamp01((inStart - top)   / (inStart - inEnd));
      const rawOut = clamp01((outStart - bottom) / (outStart - outEnd));
      const target = Math.min(smoothstep(rawIn), 1 - smoothstep(rawOut));

      return target;
    };

    const update = (first = false) => {
      for (const el of els) {
        const target = computeTarget(el);

        // no temporal smoothing on first to avoid a jump
        const prev = current.get(el) ?? target;
        const alpha = first ? 1 : 0.18;        
        const smoothed = prev + (target - prev) * alpha;

        current.set(el, smoothed);
        el.style.setProperty("--reveal", smoothed.toFixed(4));
      }
      if (first) {
        // show in the same frame after values are set
        requestAnimationFrame(() => {
          for (const el of els) el.style.visibility = "visible";
        });
      }
      ticking = false;
    };

    // run before paint
    update(true);

    // event handler
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => update(false));
      }
    };

    // create event listeners
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [selector]);
}
export default useCenterReveal;