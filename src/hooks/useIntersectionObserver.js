import { useEffect, useRef } from 'react';

export function useIntersectionObserver(targetRef, onIntersect = () => {}) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) onIntersect();
        },
        { threshold: 1 },
      );
    }

    observerRef.current.observe(targetRef.current);

    return () => observerRef.current.disconnect();
  }, []);
}
