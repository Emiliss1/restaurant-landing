import { useEffect, useRef, useState } from "react";

export function ScrollAnimation({ children, type }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  console.log(type);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${visible ? `opacity-100 translate-${type === "top" ? "y" : type === "side" ? "x" : ""}-0` : `opacity-0 translate-${type === "top" ? "y" : type === "side" ? "x" : ""}-12`}`}
    >
      {children}
    </div>
  );
}
