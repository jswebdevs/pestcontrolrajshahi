import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Import all your service data
import pestServices from '../../data/pestControl.json';
import cleaningServices from '../../data/cleaning.json';
import otherServices from '../../data/other.json';

const PopularServices = () => {
  // 1. Merge all services into one big list
  const allServices = [...pestServices, ...cleaningServices, ...otherServices];

  // 2. Filter only the ones marked "isPopular": true
  // 3. Slice to show only the top 6 (so the page doesn't get too long)
  const popularServices = allServices.filter(s => s.isPopular === true).slice(0, 6);

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">
            Most Requested Services
          </h2>
          <p className="text-base-content/70 text-lg">
            From cockroach control to deep cleaning, here are the solutions our Rajshahi customers love the most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices.map((service) => (
            <div 
              key={service.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5 group"
            >
              
              {/* Image Area */}
              <figure className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 badge badge-primary font-bold text-white shadow-md">
                  Popular
                </div>
              </figure>

              {/* Content Area */}
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-base-content/70 line-clamp-2">
                  {service.description}
                </p>

                {/* Features Mini-List (Optional: Shows first 2 features) */}
                <ul className="mt-4 space-y-2">
                  {service.features?.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-base-content/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="card-actions justify-end mt-6">
                  <Link 
                    to={`/service/${service.slug}`}
                    className="btn btn-outline btn-primary w-full group-hover:btn-active"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services/pest-control" className="btn btn-primary btn-lg text-white rounded-full px-8 shadow-lg">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularServices;