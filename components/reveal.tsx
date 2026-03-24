"use client";

import type { ReactNode } from "react";
import { createElement, useEffect, useRef, useState } from "react";

type RevealTag = "article" | "div" | "form";

export function Reveal({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `${className} reveal${visible ? " is-visible" : ""}`.trim(),
    },
    children,
  );
}
