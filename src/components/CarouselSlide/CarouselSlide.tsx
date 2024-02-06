import { ReactNode } from 'react';
import styles from './CarouselSlide.module.scss';

interface CarouselSlideProps {
  url: string;
  children?: ReactNode;
}
const CarouselSlide = ({ url, children }: CarouselSlideProps) => {
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${url})` }}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CarouselSlide;
