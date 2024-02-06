import { Carousel } from './components/Carousel/Carousel';
import CarouselSlide from './components/CarouselSlide/CarouselSlide';
import stars from './assets/stars.jpg';
import dive from './assets/dive.jpg';
import swim from './assets/swim.jpg';

function App() {
  return (
    <>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Carousel auto>
          <CarouselSlide url={stars}></CarouselSlide>
          <CarouselSlide url={swim}></CarouselSlide>
          <CarouselSlide url={dive}></CarouselSlide>
        </Carousel>
      </div>
    </>
  );
}

export default App;
