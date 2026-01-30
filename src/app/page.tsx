import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Portfolio from '@/components/Portfolio';
import Capabilities from '@/components/Capabilities';
import About from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Portfolio />
      <Capabilities />
      <About />
      <Footer />
    </>
  );
}
