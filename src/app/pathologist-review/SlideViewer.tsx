import React from 'react';
import Icon from '@/components/ui/Icon';

const SlideViewer: React.FC = () => {
  return (
    <div className="mt-8">
      <h4 className="text-sm font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
        <Icon name="magnification_small" className="text-primary" />
        Peripheral Blood Smear
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb] dark:border-[#3b4754] group relative cursor-pointer">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <Icon name="zoom_in" className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all" />
          </div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCZbF1NuH7QUf-4Me98lcORls5LL7pDAQ8BuNo9EeFR8q50hYGHByNWYm4M7vQvQyJqtkbaJtk_L1fFZoFoEvMpP3jPKxwk8iBZHR00OlEtOZZ8VnqUzXETsTvCDpFaFO8sXCy9sJFi9WMIoyJI58_uw3YZZ-kA_9EqV2poXTADnbbNGf3zq4RTRPOq2-yd8SqYSiq2u9WJvZCls-sGIgPQo0HRtqzlOEeODYvyQy9OGFkoJDcV7a7oSWx4Bip-EbKLvPQIoW0U6g")' }}
          ></div>
        </div>
        <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb] dark:border-[#3b4754] group relative cursor-pointer">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <Icon name="zoom_in" className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all" />
          </div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjTJV5Dw1do9MLmGd1n-e2rx_HtzROwcrzHVi1CAgmdMedPfWbTDkblDyOwYL_G7Jh8OKn_3xt0wquX1zGB7fPtj-f9Q2S3BEunS56v6fBWy77cKFrlwrDsginahwXoKFSnE1I_H8tFetlYLVZe9AFwiHKlz5rpPfjO2x7Jmc1VAYgyCnR38KZITRLXbWgrX-Ch4kFfTa1EHBhpWrX3CHHqwtiK0kFhomGuhIjF_29YinAb3Ha5wcPrR7NUsdBEGdGTQ5Q1WarBrQ")' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SlideViewer;
