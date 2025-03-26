'use client';

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/services', label: 'Services & Protect' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Sun className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">Sunny EPC</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {links.map(link => {
              const isActive = pathname === link.href;
                
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary font-semibold' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            {links.map(link => {
              const isActive = pathname === link.href;
                
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary font-semibold bg-muted/50'
                      : 'text-foreground hover:text-primary hover:bg-muted/30'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
} 