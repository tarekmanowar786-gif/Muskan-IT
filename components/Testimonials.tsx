
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafiqul Islam',
    role: 'CEO, ShopBD',
    text: 'Muskan IT transformed our online presence. Our sales increased by 200% after their SEO and Social Media campaigns.',
    image: 'https://picsum.photos/seed/t1/100/100'
  },
  {
    name: 'Sultana Ahmed',
    role: 'Founder, EcoCraft',
    text: 'The UI/UX design kit we bought was top-notch. It saved us months of development time. Highly recommended!',
    image: 'https://picsum.photos/seed/t2/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">What Our Clients Are Saying</h3>
            <p className="text-slate-600 mb-8 text-lg">We pride ourselves on delivering exceptional results for every business we partner with. Join hundreds of satisfied clients today.</p>
            <div className="flex items-center gap-12">
              <div>
                <p className="text-4xl font-black text-slate-900">4.9/5</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-slate-500 mt-2">Average Rating</p>
              </div>
              <div className="w-px h-16 bg-slate-200"></div>
              <div>
                <p className="text-4xl font-black text-slate-900">98%</p>
                <p className="text-sm text-slate-500 mt-2">Client Retention</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-100" />
                <p className="text-slate-700 italic mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-white" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
