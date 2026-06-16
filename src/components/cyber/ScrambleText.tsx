import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789@#$%&*<>/{}";

interface Props {
  text: string;
  className?: string;
  trigger?: "hover" | "view";
  as?: keyof React.JSX.IntrinsicElements;
}

/** Decryption / matrix scramble text effect. */
export function ScrambleText({ text, className, trigger = "hover", as: Tag = "span" }: Props) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(0);
  const elRef = useRef<HTMLElement>(null);

  const scramble = () => {
    cancelAnimationFrame(raf.current);
    let frame = 0;
    const total = 14;
    const step = () => {
      const progress = frame / total;
      const revealed = Math.floor(text.length * progress);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      frame++;
      if (frame <= total) raf.current = requestAnimationFrame(step);
      else setDisplay(text);
    };
    step();
  };

  useEffect(() => {
    if (trigger !== "view" || !elRef.current) return;
    const el = elRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          scramble();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handlers = trigger === "hover" ? { onMouseEnter: scramble } : {};

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={elRef} className={className} {...handlers}>{display}</Tag>
  );
}
