import React from "react";
import { serviceData } from "./services";
import ServiceCard from "./card";

const Services: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PACKAGES <span className="text-slate-400">(SERVICES)</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
