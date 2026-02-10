import { useEffect, useRef, useState } from "react";

export function ScrollAnimation({ children, type }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const variants = {
    top: visible ? "translate-y-0" : "translate-y-12",
    side: visible ? "translate-x-0" : "translate-x-12",
  };

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
      className={`transition-all duration-700 ease-out opacity-0
        ${visible && `opacity-100`} ${variants[type]}`}
    >
      {children}
    </div>
  );
}
