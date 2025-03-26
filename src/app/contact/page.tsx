'use client';

import ContactForm from "@/app/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Reach out about your project or get a free consultation
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-center">Get in Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email Us</h3>
                      <p className="text-muted-foreground">info@sunnyco.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto w-full">
              <ContactForm 
                showTitle={true} 
                className="p-0 bg-transparent border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 