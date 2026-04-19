import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="py-12 lg:py-0 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[84px] leading-[0.85] font-serif font-black tracking-[-3px] mb-6 whitespace-pre-line uppercase">
          PORT{"\n"}FOLIO
        </h1>
        <p className="text-[18px] opacity-60 mb-10 font-light max-w-sm leading-relaxed text-brand-text">
          Creative direction and digital artifacts by Gowtham. Focused on minimalist aesthetics and meaningful interactions.
        </p>
        
        <a
          href="#portfolio"
          className="inline-block px-9 py-[18px] bg-brand-text text-brand-bg text-[14px] font-semibold uppercase tracking-[0.1em] border border-brand-text hover:bg-transparent hover:text-brand-text transition-all duration-300"
        >
          View Portfolio
        </a>
      </motion.div>
    </section>
  );
}
