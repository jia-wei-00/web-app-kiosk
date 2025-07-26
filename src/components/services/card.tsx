import type { ServiceItem } from "./services";

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
        <div className="flex items-start space-x-4">
          <div className="text-4xl mb-4">{item.icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-slate-300 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
