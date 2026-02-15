import { ShieldCheck, Leaf, Clock, Award, type LucideIcon } from 'lucide-react';
import featuresData from '../../data/features.json';

// Map string names to actual components
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Leaf,
  Clock,
  Award
};

const Features = () => {
  return (
    // FIX 1: Removed 'bg-white'. Used 'bg-base-100' so it adapts to the theme.
    <div className="py-16 bg-base-100 relative z-20 -mt-8">
      <div className="container mx-auto px-4">
        
        {/* FIX 2: 
            - bg-base-100: Card matches the theme background
            - border-base-content/5: Adds a subtle border (crucial for Dark Mode where shadows are hard to see)
        */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-8 border border-base-content/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {featuresData.map((feature) => {
              const IconComponent = iconMap[feature.icon] || ShieldCheck;

              return (
                <div 
                  key={feature.id} 
                  // FIX 3: Hover now uses 'bg-base-200' (slightly different shade based on theme)
                  className="text-center group p-4 hover:bg-base-200 rounded-xl transition-colors duration-300"
                >
                  <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-10 h-10 mb-4 ${feature.color}`} />
                  </div>
                  
                  {/* FIX 4: Text colors are now semantic */}
                  <h3 className="text-xl font-bold mb-2 text-base-content">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;