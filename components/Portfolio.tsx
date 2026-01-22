
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Success Stories</h3>
          </div>
          <button className="text-blue-600 font-bold hover:underline">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
