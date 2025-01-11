'use client';

export default function ContactForm() {
  return (
    <div id="contact" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Get Started Today</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Fill out the form below to begin your solar journey
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <iframe 
            src="https://portal.coperniq.io/tesla/new"
            style={{ 
              width: '100%', 
              height: '1000px', 
              border: 'none', 
              overflow: 'hidden',
              display: 'block'
            }}
            scrolling="no"
            title="Coperniq Lead Magnet"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
} 