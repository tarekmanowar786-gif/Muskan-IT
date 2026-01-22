
import React from 'react';
import { Megaphone, Search, Target, Globe, BarChart, Code } from 'lucide-react';

const serviceList = [
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'Strategized growth across FB, IG, and LinkedIn.' },
  { icon: Search, title: 'Expert SEO Services', desc: 'Rank #1 on Google with our advanced techniques.' },
  { icon: Target, title: 'PPC Ad Campaigns', desc: 'High ROI Google & Meta ads management.' },
  { icon: Code, title: 'Web Development', desc: 'Premium responsive websites built for conversion.' },
  { icon: BarChart, title: 'Data Analytics', desc: 'Unlock insights to drive better business decisions.' },
  { icon: Globe, title: 'Content Writing', desc: 'SEO-friendly content that sells your vision.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900">Digital Solutions for Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
