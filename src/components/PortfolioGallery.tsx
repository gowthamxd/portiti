import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { useState } from 'react';

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-6 lg:py-0 h-full flex flex-col">
      <div className="flex justify-between items-baseline mb-6 pb-3 border-b border-brand-text/10">
        <h2 className="text-3xl font-serif font-normal">Gallery</h2>
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-accent font-bold">{PORTFOLIO_ITEMS.length} Selected Works</p>
      </div>

      <div className="portfolio-grid-theme overflow-y-auto pr-2 pb-10 flex-1 hide-scrollbar">
        {PORTFOLIO_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.05 }}
            className="group relative cursor-pointer overflow-hidden aspect-square border border-brand-text/5 bg-[#eee] hover:translate-y-[-4px] transition-all duration-300"
            style={{ 
              backgroundColor: idx % 2 === 0 ? '#E8E8E4' : (idx % 3 === 0 ? '#F1E4E4' : '#eee') 
            }}
            onClick={() => setSelectedImage(item.image)}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <p className="text-[10px] uppercase font-medium">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-bg/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
          <button 
            className="absolute top-10 right-10 text-brand-text text-[14px] font-semibold uppercase tracking-widest"
            onClick={() => setSelectedImage(null)}
          >
            CLOSE
          </button>
        </div>
      )}
    </section>
  );
}
