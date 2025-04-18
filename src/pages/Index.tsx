import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ClipboardList, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 bg-[url('/village-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="section-container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to VillageConnect</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering communities through technology and collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user">
                <Button size="lg" className="w-full sm:w-auto">Report an Issue</Button>
              </Link>
              <Link to="/volunteer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  Volunteer Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Three Blocks Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform connects three key stakeholders to efficiently address village issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User Block */}
            <div className="card-highlight rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Users</h3>
              <p className="text-gray-600 mb-4">
                Village residents can report local issues by providing details about problems that need attention.
              </p>
              <Link to="/user">
                <Button variant="outline" className="mt-2">Report an Issue</Button>
              </Link>
            </div>
            
            {/* Volunteer Block */}
            <div className="card-highlight rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteers</h3>
              <p className="text-gray-600 mb-4">
                Dedicated community members who assess the reported issues and work towards resolving them.
              </p>
              <Link to="/volunteer">
                <Button variant="outline" className="mt-2">Volunteer Login</Button>
              </Link>
            </div>
            
            {/* Administrator Block */}
            <div className="card-highlight rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCog className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Administrators</h3>
              <p className="text-gray-600 mb-4">
                System managers who oversee the platform, add volunteers, and ensure smooth operation.
              </p>
              <Link to="/admin">
                <Button variant="outline" className="mt-2">Admin Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                VillageConnect is dedicated to empowering rural communities by providing a platform that connects residents, volunteers, and administrators to solve local issues efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to bridge the gap between problem identification and resolution, making villages better places to live through community collaboration.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2023, we've already helped resolve hundreds of village issues across multiple regions.
              </p>
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video rounded-md overflow-hidden">
                <img 
                  src="/village-community.jpg" 
                  alt="Village Community" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Impact</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Over 500 issues successfully resolved
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Network of 100+ active volunteers
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Serving 25+ villages and growing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="card-highlight rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">123 Community Center, Village Square, State, 123456</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@villageconnect.org</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact">
                  <Button>Contact Form</Button>
                </Link>
              </div>
            </div>
            
            <div className="aspect-video rounded-md overflow-hidden">
              <img 
                src="/village-community.jpg" 
                alt="Village Community" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
