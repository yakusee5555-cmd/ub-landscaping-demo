import { useEffect, useRef } from "react";
import { ScrollCue } from "./MotionBits";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  const backRef = useRef<HTMLDivElement>(null);
  const foreRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Skip parallax on mobile + reduced-motion: layers stay static, content fully visible
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (backRef.current) backRef.current.style.transform = `translateY(${y * 0.25}px)`;
        if (foreRef.current) foreRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (markRef.current) {
          // wordmark drifts up slower and shrinks as you scroll — scrollytelling depth
          const s = Math.max(0.72, 1 - y / 2400);
          markRef.current.style.transform = `translateY(${-y * 0.08}px) scale(${s})`;
          markRef.current.style.opacity = String(Math.max(0.25, 1 - y / 900));
        }
        if (contentRef.current)
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 500));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0b100d]">
      {/* BACK LAYER — atmosphere + giant wordmark sitting behind the trees */}
      <div ref={backRef} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#18261c_0%,#0b100d_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1
            ref={markRef}
            className="hero-title font-display font-black text-[#f4efe4] leading-none tracking-tight select-none text-[clamp(2.25rem,11vw,21rem)] will-change-transform"
          >
            U&B
          </h1>
        </div>
      </div>

      {/* FRONT LAYER — trees overlapping the wordmark */}
      <div ref={foreRef} className="absolute inset-0 z-10 will-change-transform pointer-events-none">
        <img
          src="/img/forest.jpg"
          alt="Pine trees standing in front of the U&B wordmark"
          draggable={false}
          className="hero-fore h-full w-full object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
            maskImage: "linear-gradient(to bottom, transparent 16%, black 48%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-1 flex-col justify-between px-6 md:px-12 pt-28 pb-10"
      >
        <div className="hero-fade flex justify-end" style={{ animationDelay: "0.9s" }}>
          <p className="text-right text-[11px] md:text-xs font-bold tracking-[0.35em] text-white/70 leading-loose">
            LANDSCAPING<br />DESIGN<br />TREE CARE
          </p>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p
              className="hero-fade text-center text-xs md:text-sm font-bold tracking-[0.5em] text-white/80 lg:text-left"
              style={{ animationDelay: "1.1s" }}
            >
              LANDSCAPING & TREE SERVICE
            </p>
            <div
              className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="#contact"
                className="btn-shine flex min-h-[48px] items-center justify-center rounded-full bg-[#f4efe4] px-8 py-4 text-center text-sm font-bold tracking-widest text-[#0b100d] hover:bg-white transition-colors"
              >
                FREE ESTIMATE
              </a>
              <a
                href="tel:+19174170195"
                className="btn-shine flex min-h-[48px] items-center justify-center rounded-full border border-white/60 px-8 py-4 text-center text-sm font-bold tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                (917) 417-0195
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
