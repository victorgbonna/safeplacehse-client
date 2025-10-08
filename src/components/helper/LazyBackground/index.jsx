import { useEffect, useRef, useState } from 'react';

export default function LazyBackground({ imageUrl, placeholderColor = '#f3f3f3', children, className}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) observer.unobserve(backgroundRef.current);
    };
  }, []);

  return (
    <div
      className={className}
      ref={backgroundRef}
      style={{
        backgroundColor: placeholderColor,
        backgroundImage: isLoaded ? `url(${imageUrl})` : 'none',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // transition: 'background-image 0.5s ease-in-out',
      }}
    >
        {children}
    </div>
  );
};
