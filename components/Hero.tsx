
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC<{ onShopClick: () => void }> = ({ onShopClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-slate-50 to-blue-50"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
              <Star className="w-4 h-4 fill-blue-700" />
              Award Winning Agency in Bangladesh
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Elevate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Digital Brand</span> to Next Level
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Unlock explosive growth with Muskan IT. We combine strategic marketing with premium digital products to scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onShopClick}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Shop Services <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://picsum.photos/seed/hero/800/800" 
              alt="Digital Growth" 
              className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 hidden md:flex">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="font-bold text-slate-900">450+ Projects</p>
                <p className="text-xs text-slate-500">Completed Successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
