import { motion } from 'framer-motion';
import SocietySlideshow from '../../elements/SocietySlideshow';
import SocietyCarousel from '../../elements/SocietyCarousel';

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden gap-12">

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full max-w-4xl">
      <SocietySlideshow />
    </motion.div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
      className="w-full">
      <SocietyCarousel />
    </motion.div>

  </section>
);

export default HeroSection;
