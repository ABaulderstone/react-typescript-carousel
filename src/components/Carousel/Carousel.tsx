import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import React from 'react';

interface CarouselProps {
  children: ReactNode;
  auto?: boolean;
}
export const Carousel = ({ children, auto = false }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childArray = React.Children.toArray(children) as ReactElement[];

  const handleNavigation = (direction: 'left' | 'right') => {
    let newIndex = currentIndex;
    if (direction === 'left') {
      newIndex = (currentIndex - 1 + childArray.length) % childArray.length;
    } else {
      newIndex = (currentIndex + 1) % childArray.length;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!auto) {
      return;
    }
    const interval = setInterval(() => {
      handleNavigation('right');
    }, 2000);

    return () => clearInterval(interval);
  });

  const slidesWithDuplicate = [...childArray, childArray[0]];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {slidesWithDuplicate.map((child, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={() => handleNavigation('left')}
        className={`${styles.button} ${styles.left}`}
      >
        &#10094;
      </button>
      <button
        onClick={() => handleNavigation('right')}
        className={`${styles.button} ${styles.right}`}
      >
        &#10095;
      </button>
      <div className={styles.indicators}>
        {childArray.map((_: any, index: number) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};
