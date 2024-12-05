import React, { useEffect, useRef, useState } from "react";
import "../App.css";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`textStyle fade-in-section ${isVisible ? "visible" : ""}` }
    >
      {children}
    </div>
  );
};
