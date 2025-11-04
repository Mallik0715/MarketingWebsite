// app/utils/animations.ts

'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when element is visible on screen
 */
export function useOnScreen(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isVisible };
}

/**
 * Animate numbers counting up
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 2000
) {
  let current = 0;
  const increment = target / (duration / 16);
  const isMoney = element.textContent?.includes('₹');
  const hasPlus = element.textContent?.includes('+');

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    let displayValue = Math.floor(current).toLocaleString('en-IN');

    if (isMoney) displayValue = '₹' + displayValue;
    if (hasPlus) displayValue = displayValue + '+';

    element.textContent = displayValue;
  }, 16);
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}