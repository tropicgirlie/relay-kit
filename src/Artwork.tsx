import { useEffect, useRef } from "react";

// Project three linked strands around a toroidal path. Depth orders the filaments
// so the over-and-under crossings remain visible at every viewport size.
export function Artwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    function draw() {
      const bounds = canvas.getBoundingClientRect(),
        ratio = Math.min(devicePixelRatio, 2);
      canvas.width = bounds.width * ratio;
      canvas.height = bounds.height * ratio;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(ratio, ratio);
      const w = bounds.width,
        h = bounds.height,
        scale = Math.min(w * 0.2, h * 0.245);
      const dots: {
        x: number;
        y: number;
        z: number;
        light: number;
        k: number;
      }[] = [];
      for (let j = 0; j < 62; j++) {
        for (let i = 0; i < 560; i++) {
          const t = (i / 560) * Math.PI * 2,
            a = (j / 62) * Math.PI * 2;
          const ring = 1.5 + 0.54 * Math.cos(3 * t) + 0.155 * Math.cos(a);
          const x = ring * Math.cos(2 * t),
            y = ring * Math.sin(2 * t),
            z = 0.98 * Math.sin(3 * t) + 0.175 * Math.sin(a);
          const depth = y * 0.77 + z * 0.64,
            vert = z * 0.77 - y * 0.64;
          const rot = -0.3,
            px = x * Math.cos(rot) - vert * Math.sin(rot),
            py = x * Math.sin(rot) + vert * Math.cos(rot);
          dots.push({
            x: w * 0.5 + px * scale,
            y: h * 0.51 + py * scale,
            z: depth,
            light: 0.5 + 0.5 * Math.cos(a - 0.6),
            k: t,
          });
        }
      }
      dots.sort((a, b) => a.z - b.z);
      for (const p of dots) {
        const light = 18 + (p.z + 2) * 9 + p.light * 31;
        ctx.fillStyle =
          "hsla(" +
          (151 + Math.sin(p.k) * 12) +
          ",68%," +
          light +
          "%," +
          (0.41 + 0.42 * p.light) +
          ")";
        ctx.fillRect(p.x, p.y, 1.1, 1.1);
      }
    }
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    draw();
    return () => observer.disconnect();
  }, []);
  return (
    <canvas
      ref={ref}
      className="artwork"
      aria-label="An interwoven mint filament sculpture"
      role="img"
    />
  );
}
