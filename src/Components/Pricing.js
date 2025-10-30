import React from 'react';

const columns = [
  {
    title: 'API Development',
    subtitle: 'RESTful or GraphQL APIs with Python (Flask/FastAPI) or Laravel',
    plans: [
      {
        title: 'Basic API',
        subtitle: 'CRUD + Auth',
        price: '$250 – $400',
        features: ['User management', 'Data storage', 'Login/signup', 'Basic security'],
      },
      {
        title: 'Intermediate API',
        subtitle: '3rd party integrations',
        price: '$500 – $900',
        features: ['M-Pesa integration', 'Stripe payments', 'Twilio SMS', 'AfricasTalking SMS', 'External APIs'],
      },
      {
        title: 'Advanced API',
        subtitle: 'Enterprise-grade',
        price: '$1,000 – $1,800',
        features: ['Multi-service architecture', 'Analytics & caching', 'Scalability', 'Performance optimization'],
      },
    ],
    footer: 'Hourly rate: $20/hr',
  },
  {
    title: 'Full Stack Development',
    subtitle: 'Complete solution — frontend + backend + database + deployment',
    plans: [
      {
        title: 'Startup MVP',
        subtitle: 'SaaS Prototype',
        price: '$750 – $1,500',
        features: ['Dashboard interface', 'User authentication', 'Database setup', 'Cloud deployment'],
      },
      {
        title: 'Business Platform',
        subtitle: 'Mid-tier solution',
        price: '$1,800 – $3,000',
        features: ['eCommerce functionality', 'Inventory management', 'Admin portal', 'Payment integration'],
      },
      {
        title: 'Enterprise Platform',
        subtitle: 'Custom solution',
        price: '$3,500 – $6,000+',
        features: ['Complex CRM system', 'AI integration', 'Multi-tenant SaaS', 'Advanced analytics'],
      },
    ],
    footer: 'Retainer: $350 – $800/month',
  },
  {
    title: 'Frontend Development',
    subtitle: 'Modern interfaces with React, Tailwind CSS, and Vercel',
    plans: [
      {
        title: 'Landing Page',
        subtitle: 'Single page app',
        price: '$200 – $450',
        features: ['Responsive design', 'Modern animations', 'SEO optimized', 'Fast loading'],
      },
      {
        title: 'Business Website',
        subtitle: '3–6 pages',
        price: '$500 – $900',
        features: ['Multi-page site', 'CMS integration', 'Contact forms', 'Analytics setup'],
      },
      {
        title: 'Dynamic Frontend',
        subtitle: 'API integrated',
        price: '$1,000 – $1,600',
        features: ['Real-time updates', 'User dashboards', 'Complex interactions', 'State management'],
      },
    ],
    footer: 'Hourly rate: $15/hr',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Choose Your Plan</h2>
          <p className="text-gray-400">Prices are Negotiable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {columns.map((col) => (
            <div key={col.title} className="bg-gray-800 rounded-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">{col.title}</h3>
                <p className="text-gray-400 text-sm">{col.subtitle}</p>
              </div>

              <div className="space-y-6">
                {col.plans.map((plan) => (
                  <div key={plan.title} className="bg-green-800/40 border border-green-500 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-md font-semibold text-white">{plan.title}</h4>
                        <p className="text-xs text-green-200 opacity-80">{plan.subtitle}</p>
                      </div>
                      <div className="text-green-300 font-semibold">{plan.price}</div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {plan.features.map((f) => (
                        <span key={f} className="text-xs bg-green-900/40 text-green-200 px-2 py-1 rounded-sm">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
                <span className="text-green-300 font-semibold">{col.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
