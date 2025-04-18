
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IssueForm from '@/components/IssueForm';
import { CheckCircle2 } from 'lucide-react';

const User = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 bg-blue-50">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Report a Village Issue</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Help us make your village better by reporting issues that need attention. Our volunteers will work to address them as soon as possible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Report Form Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <IssueForm />
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-gray-600">Submit your issue using the form with all relevant details.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-gray-600">Our volunteers review and verify the submitted issue.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-gray-600">The volunteer team takes action to resolve the problem.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 text-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="text-gray-600">You receive updates as the issue progresses toward resolution.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Road Repair</span>: Pothole-filled road fixed within 2 weeks after reporting.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Water Supply</span>: Broken village water pipe repaired in 3 days.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Street Lighting</span>: 5 non-functional lights replaced within a week.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How soon will my issue be addressed?</h3>
              <p className="text-gray-600">
                Issues are prioritized based on urgency and impact. Typically, volunteers begin assessment within 48 hours of submission, and resolution timelines depend on the complexity of the issue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I track the status of my reported issue?</h3>
              <p className="text-gray-600">
                Yes, you'll receive updates via SMS or email as volunteers make progress on your issue. Each report is assigned a unique ID for tracking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of issues can I report?</h3>
              <p className="text-gray-600">
                You can report infrastructure issues (roads, water, electricity), public amenity problems, sanitation concerns, and other community-related problems that affect village life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I become a volunteer?</h3>
              <p className="text-gray-600">
                Absolutely! We're always looking for dedicated individuals to join our volunteer team. Contact our administrator through the Contact Us page to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default User;
