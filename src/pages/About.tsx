
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 bg-blue-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About VillageConnect</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, our team, and how we're working to make rural communities better.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                VillageConnect was founded with a simple yet powerful mission: to bridge the gap between identifying community issues and resolving them efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that by connecting village residents with dedicated volunteers and accountable administrators, we can create a system that addresses local problems quickly and effectively.
              </p>
              <p className="text-gray-600">
                Our platform serves as the technological infrastructure that enables this three-way collaboration, making rural development more participatory and responsive.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-500">Mission Image</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-600">Community Empowerment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-600">Transparency in Problem Solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-600">Accountability at All Levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-600">Inclusive Participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span className="text-gray-600">Sustainable Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who work tirelessly to make VillageConnect a reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Amit Sharma</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Former village head with 15 years of experience in rural development.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
              <p className="text-gray-600 mb-2">Operations Director</p>
              <p className="text-sm text-gray-500">
                Expert in community mobilization and volunteer management.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Rajesh Kumar</h3>
              <p className="text-gray-600 mb-2">Tech Lead</p>
              <p className="text-sm text-gray-500">
                Software engineer with a passion for rural tech solutions.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900">Meena Gupta</h3>
              <p className="text-gray-600 mb-2">Volunteer Coordinator</p>
              <p className="text-sm text-gray-500">
                Experienced social worker focused on community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-1 text-center md:text-right">
                <span className="inline-block px-4 py-2 bg-primary text-white rounded-md font-bold">2023</span>
              </div>
              <div className="hidden md:block md:col-span-1 relative">
                <div className="h-full w-1 bg-primary mx-auto"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                <p className="text-gray-600">
                  VillageConnect was established with support from local government and NGOs to address the growing need for a structured approach to village issue management.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-1 text-center md:text-right">
                <span className="inline-block px-4 py-2 bg-primary text-white rounded-md font-bold">2024</span>
              </div>
              <div className="hidden md:block md:col-span-1 relative">
                <div className="h-full w-1 bg-primary mx-auto"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-600">
                  After a successful pilot in five villages, the platform expanded to 25+ villages with enhanced features and a growing volunteer network.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              <div className="md:col-span-1 text-center md:text-right">
                <span className="inline-block px-4 py-2 bg-primary text-white rounded-md font-bold">Future</span>
              </div>
              <div className="hidden md:block md:col-span-1 relative">
                <div className="h-full w-1 bg-primary mx-auto"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
                <p className="text-gray-600">
                  Our vision is to create a comprehensive rural development ecosystem that addresses not just immediate issues but fosters long-term community resilience and self-sufficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="section-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're a village resident with an issue to report, a volunteer wanting to make a difference, or an administrator looking to improve your community, we welcome you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/user">
                <Button size="lg">Report an Issue</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
