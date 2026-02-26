import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter = ({ text, speed = 18, className }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [started, displayed, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-text-bottom"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

export default Typewriter;
