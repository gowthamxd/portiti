import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 border-t border-brand-text/10 flex flex-col gap-6">
      <div className="text-[11px] uppercase tracking-[0.2em] text-brand-accent font-bold">
        Contact
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-[14px] font-semibold">
          <Mail size={14} className="opacity-40 text-brand-text" />
          <span className="text-brand-text">gowthamdandu999@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 text-[14px] font-semibold text-brand-text">
          <Phone size={14} className="opacity-40" />
          <span>+91 98765 43210</span>
        </div>
      </div>
      
      <p className="text-[12px] italic opacity-50 font-light text-brand-text">
        Based in Bangalore, available for freelance.
      </p>
    </section>
  );
}
