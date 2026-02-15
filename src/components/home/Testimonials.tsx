import { Star, Quote, MapPin } from 'lucide-react';
import testimonialsData from '../../data/testimonials.json';

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">
            Trusted by Rajshahi Locals
          </h2>
          <p className="text-base-content/70 text-lg">
            We don't just kill pests; we bring peace of mind. Here is what our happy clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div 
              key={item.id} 
              className="card bg-base-100 border border-base-content/10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="card-body relative">
                
                {/* Giant Quote Icon (Decorative) */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base-content/80 italic mb-6 leading-relaxed">
                  "{item.review}"
                </p>

                {/* User Profile */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base-content">{item.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-base-content/60 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;