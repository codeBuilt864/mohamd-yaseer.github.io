import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const elements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically mounted elements
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.reveal:not(.in-view), .reveal-scale:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view)');
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
