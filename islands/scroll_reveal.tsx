import { useEffect, useRef } from "preact/hooks";
import { ComponentChildren } from "preact";

interface ScrollH1Props {
  children: ComponentChildren;
  class?: string;
}

export function ScrollH1({ children, class: className = "" }: ScrollH1Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll_reveal--active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={ref} class={`scroll_reveal ${className}`}>
      {children}
    </h1>
  );
}

export function ScrollH2({ children, class: className = "" }: ScrollH1Props) {
    const ref = useRef<HTMLHeadingElement>(null);
  
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("scroll_reveal--active");
            observer.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
  
    return (
      <h2 ref={ref} class={`scroll_reveal ${className}`}>
        {children}
      </h2>
    );
}

export function ScrollP({ children, class: className = "" }: ScrollH1Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll_reveal--active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} class={`scroll_reveal ${className}`}>
      {children}
    </p>
  );
}

// ScrollIMG for <img> elements
import { JSX } from "preact";

interface ScrollIMGProps extends JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  class?: string;
}

export function ScrollIMG({ src, alt = "", class: className = "", ...props }: ScrollIMGProps) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll_reveal--active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <img ref={ref} src={src} alt={alt} class={`scroll_reveal ${className}`} {...props} />
  );
} 