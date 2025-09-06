import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let fromVars: any = { opacity: 0 };
    let toVars: any = { opacity: 1, duration, delay };

    switch (direction) {
      case 'up':
        fromVars.y = 50;
        toVars.y = 0;
        break;
      case 'down':
        fromVars.y = -50;
        toVars.y = 0;
        break;
      case 'left':
        fromVars.x = 50;
        toVars.x = 0;
        break;
      case 'right':
        fromVars.x = -50;
        toVars.x = 0;
        break;
      case 'scale':
        fromVars.scale = 0.8;
        toVars.scale = 1;
        break;
      case 'fade':
        // Only opacity animation
        break;
    }

    gsap.fromTo(element, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;