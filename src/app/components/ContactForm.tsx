'use client';

interface ContactFormProps {
  showTitle?: boolean;
  className?: string;
}

export default function ContactForm({ showTitle = true, className = "py-12 bg-background border-t border-border" }: ContactFormProps) {
  return (
    <div id="contact" className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="lg:text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground">Get Started Today</h2>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              Fill out the form below to begin your solar journey
            </p>
          </div>
        )}
        
        <div id="contactForm" className="max-w-3xl mx-auto">
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