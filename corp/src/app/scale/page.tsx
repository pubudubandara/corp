import scaleImg from '../../../public/scale.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Hero imgData={scaleImg} imgAlt="welding" title="Scale your app to infinity"></Hero>
    </div>
  );
}
