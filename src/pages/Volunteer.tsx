
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Sample data for issues
const issuesData = [
  {
    id: 'ISSUE001',
    name: 'Rahul Sharma',
    contact: '9876543210',
    address: '45 Main Road, South Village',
    issue: 'Water supply interrupted for 3 days in our area',
    status: 'pending',
    dateReported: '2023-04-15',
  },
  {
    id: 'ISSUE002',
    name: 'Priya Patel',
    contact: '9876543211',
    address: '22 Market Street, East Village',
    issue: 'Street light not working for past week, causing safety concerns at night',
    status: 'in-progress',
    dateReported: '2023-04-14',
    assignedTo: 'You',
    updates: [
      { date: '2023-04-14', text: 'Issue assigned to volunteer' },
      { date: '2023-04-15', text: 'Contacted electricity department' }
    ]
  },
  {
    id: 'ISSUE003',
    name: 'Vikram Singh',
    contact: '9876543212',
    address: '78 School Road, West Village',
    issue: 'Garbage not collected for a week, causing health hazards',
    status: 'resolved',
    dateReported: '2023-04-10',
    resolvedDate: '2023-04-13',
    assignedTo: 'You',
    updates: [
      { date: '2023-04-10', text: 'Issue assigned to volunteer' },
      { date: '2023-04-11', text: 'Contacted sanitation department' },
      { date: '2023-04-13', text: 'Garbage collected and area cleaned' }
    ]
  },
];

const VolunteerDashboard = () => {
  const [selectedIssue, setSelectedIssue] = useState<any>(null);
  const [updateText, setUpdateText] = useState('');
  const [statusUpdate, setStatusUpdate] = useState('');
  const { toast } = useToast();
  
  const handleUpdateIssue = () => {
    if (!updateText) {
      toast({
        title: "Update required",
        description: "Please enter an update before submitting",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Update added",
      description: "The issue has been updated successfully",
    });
    setUpdateText('');
  };
  
  const handleStatusChange = (status: string) => {
    setStatusUpdate(status);
    
    toast({
      title: "Status updated",
      description: `Issue status changed to ${status}`,
    });
  };
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Volunteer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here are the issues that need your attention.</p>
        </div>
        <Button variant="outline" onClick={() => window.location.href = "/"}>Logout</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="assigned" className="flex-1">My Issues</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="m-0">
                  <div className="space-y-4">
                    {issuesData.map((issue) => (
                      <div 
                        key={issue.id}
                        className={`p-4 border rounded-md cursor-pointer transition-colors ${selectedIssue?.id === issue.id ? 'border-primary bg-blue-50' : 'hover:bg-gray-50'}`}
                        onClick={() => setSelectedIssue(issue)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{issue.name}</p>
                            <p className="text-sm text-gray-600 truncate">{issue.issue.substring(0, 50)}...</p>
                          </div>
                          <Badge variant={
                            issue.status === 'pending' ? 'outline' : 
                            issue.status === 'in-progress' ? 'secondary' : 
                            'default'
                          }>
                            {issue.status === 'pending' ? 'Pending' : 
                             issue.status === 'in-progress' ? 'In Progress' : 
                             'Resolved'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="assigned" className="m-0">
                  <div className="space-y-4">
                    {issuesData.filter(i => i.assignedTo === 'You').map((issue) => (
                      <div 
                        key={issue.id}
                        className={`p-4 border rounded-md cursor-pointer transition-colors ${selectedIssue?.id === issue.id ? 'border-primary bg-blue-50' : 'hover:bg-gray-50'}`}
                        onClick={() => setSelectedIssue(issue)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{issue.name}</p>
                            <p className="text-sm text-gray-600 truncate">{issue.issue.substring(0, 50)}...</p>
                          </div>
                          <Badge variant={
                            issue.status === 'pending' ? 'outline' : 
                            issue.status === 'in-progress' ? 'secondary' : 
                            'default'
                          }>
                            {issue.status === 'pending' ? 'Pending' : 
                             issue.status === 'in-progress' ? 'In Progress' : 
                             'Resolved'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          {selectedIssue ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Issue Details - {selectedIssue.id}</CardTitle>
                    <p className="text-sm text-gray-500">Reported on {selectedIssue.dateReported}</p>
                  </div>
                  <Badge variant={
                    selectedIssue.status === 'pending' ? 'outline' : 
                    selectedIssue.status === 'in-progress' ? 'secondary' : 
                    'default'
                  } className="ml-2">
                    {selectedIssue.status === 'pending' ? 'Pending' : 
                     selectedIssue.status === 'in-progress' ? 'In Progress' : 
                     'Resolved'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Reporter Information</h3>
                      <p className="text-gray-600"><span className="font-medium">Name:</span> {selectedIssue.name}</p>
                      <p className="text-gray-600"><span className="font-medium">Contact:</span> {selectedIssue.contact}</p>
                      <p className="text-gray-600"><span className="font-medium">Address:</span> {selectedIssue.address}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Issue Information</h3>
                      <p className="text-gray-600">{selectedIssue.issue}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Status Updates</h3>
                    {selectedIssue.updates ? (
                      <div className="space-y-2">
                        {selectedIssue.updates.map((update: any, index: number) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-md">
                            <p className="text-sm text-gray-500">{update.date}</p>
                            <p className="text-gray-700">{update.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No updates yet.</p>
                    )}
                  </div>
                  
                  {selectedIssue.status !== 'resolved' && (
                    <>
                      <div className="border-t pt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Add Update</h3>
                        <div className="space-y-2">
                          <Label htmlFor="update">Update Details</Label>
                          <Textarea 
                            id="update" 
                            placeholder="Describe your progress on this issue..."
                            value={updateText}
                            onChange={(e) => setUpdateText(e.target.value)}
                          />
                        </div>
                        <Button onClick={handleUpdateIssue} className="mt-2">Add Update</Button>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Update Status</h3>
                        <div className="flex items-center space-x-4">
                          <Select onValueChange={handleStatusChange} value={statusUpdate}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="in-progress">In Progress</SelectItem>
                              <SelectItem value="resolved">Resolved</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">Select an issue from the list to view details.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const Volunteer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (username: string, password: string) => {
    // In a real app, this would validate credentials against a backend
    // For now, we'll just simulate a successful login
    setIsLoggedIn(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {isLoggedIn ? (
        <div className="flex-grow py-6 bg-gray-50">
          <div className="section-container">
            <VolunteerDashboard />
          </div>
        </div>
      ) : (
        <>
          <section className="py-12 bg-blue-50">
            <div className="section-container">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Volunteer Login</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Access your volunteer dashboard to view and address village issues.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white flex-grow">
            <div className="section-container max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome, Volunteer!</h2>
                  <p className="text-gray-600 mb-4">
                    Thank you for your dedication to improving our village community. Your efforts make a significant difference in addressing local issues.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Login to access your dashboard where you can:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>View issues reported by village residents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Update the status of issues you're addressing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Communicate progress to administrators and residents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>Mark issues as resolved once completed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <LoginForm userType="volunteer" onLogin={handleLogin} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Volunteer;
