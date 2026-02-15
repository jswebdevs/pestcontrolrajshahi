import { Map, Users, CheckCircle, PhoneCall, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import statsData from '../../data/stats.json';

// Map string names from JSON to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Map,
  Users,
  CheckCircle,
  PhoneCall
};

const StatCounters = () => {
  return (
    <section className="py-16 bg-base-200 relative">
      {/* Background Map Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      <div className="container mx-auto px-4">
        
        {/* --- Stats Grid (Powered by JSON) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center relative z-10">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Map;

            return (
              <div key={stat.id} className="flex flex-col items-center group">
                <div className="p-4 bg-base-100 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-4xl font-extrabold text-base-content mb-1">
                  {stat.value}
                </h3>
                
                <p className="font-bold text-lg text-primary">
                  {stat.label}
                </p>
                
                <p className="text-sm text-base-content/60">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- CTA Banner --- */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Pest Control Anywhere in BD?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              From Dhaka to Rajshahi, Chittagong to Sylhet — our expert teams are ready to deploy. 
              Get a free inspection today!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+8801326521133" 
                className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none rounded-full font-bold px-8 gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Call +880 1326-521133
              </a>
              <Link 
                to="/contact" 
                className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary rounded-full px-8"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatCounters;