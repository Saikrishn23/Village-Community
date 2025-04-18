import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import AdminSignupForm from '@/components/AdminSignupForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Search, UserPlus, Edit, Trash2, Check } from 'lucide-react';

// Sample data for volunteers
const volunteersData = [
  {
    id: 1,
    name: 'Ajay Kumar',
    email: 'ajay@example.com',
    phone: '9876543210',
    area: 'North Village',
    joinDate: '2023-01-15',
    status: 'active',
    issuesResolved: 12
  },
  {
    id: 2,
    name: 'Meena Verma',
    email: 'meena@example.com',
    phone: '9876543211',
    area: 'South Village',
    joinDate: '2023-02-20',
    status: 'active',
    issuesResolved: 8
  },
  {
    id: 3,
    name: 'Ravi Singh',
    email: 'ravi@example.com',
    phone: '9876543212',
    area: 'East Village',
    joinDate: '2023-03-10',
    status: 'inactive',
    issuesResolved: 5
  }
];

// Sample data for issues
const issuesData = [
  {
    id: 'ISSUE001',
    name: 'Rahul Sharma',
    issue: 'Water supply interrupted for 3 days in our area',
    status: 'pending',
    dateReported: '2023-04-15',
    area: 'South Village'
  },
  {
    id: 'ISSUE002',
    name: 'Priya Patel',
    issue: 'Street light not working for past week, causing safety concerns at night',
    status: 'in-progress',
    dateReported: '2023-04-14',
    area: 'East Village',
    assignedTo: 'Meena Verma'
  },
  {
    id: 'ISSUE003',
    name: 'Vikram Singh',
    issue: 'Garbage not collected for a week, causing health hazards',
    status: 'resolved',
    dateReported: '2023-04-10',
    resolvedDate: '2023-04-13',
    area: 'North Village',
    assignedTo: 'Ajay Kumar'
  },
];

const AdminDashboard = () => {
  const [addingVolunteer, setAddingVolunteer] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newVolunteer, setNewVolunteer] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    password: ''
  });
  const { toast } = useToast();
  
  const handleAddVolunteer = () => {
    // In a real app, this would send the new volunteer data to a backend
    toast({
      title: "Volunteer added",
      description: `${newVolunteer.name} has been added as a volunteer`,
    });
    setAddingVolunteer(false);
    setNewVolunteer({
      name: '',
      email: '',
      phone: '',
      area: '',
      password: ''
    });
  };
  
  const filteredVolunteers = volunteersData.filter(volunteer => 
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.area.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Administrator Dashboard</h1>
          <p className="text-gray-600">Manage volunteers and monitor village issues</p>
        </div>
        <Button variant="outline" onClick={() => window.location.href = "/"}>Logout</Button>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Dashboard Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Total Issues</h3>
                <p className="text-3xl font-bold text-primary mt-2">{issuesData.length}</p>
                <div className="flex items-center mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Resolved</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {issuesData.filter(issue => issue.status === 'resolved').length}
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(issuesData.filter(issue => issue.status === 'resolved').length / issuesData.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Active Volunteers</h3>
                <p className="text-3xl font-bold text-purple-600 mt-2">
                  {volunteersData.filter(volunteer => volunteer.status === 'active').length}
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(volunteersData.filter(volunteer => volunteer.status === 'active').length / volunteersData.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="volunteers">
        <TabsList className="w-full mb-4 grid grid-cols-2">
          <TabsTrigger value="volunteers">Manage Volunteers</TabsTrigger>
          <TabsTrigger value="issues">Issue Tracker</TabsTrigger>
        </TabsList>
        
        <TabsContent value="volunteers" className="m-0">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0">
                <CardTitle>Volunteers</CardTitle>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input 
                      placeholder="Search volunteers..." 
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button onClick={() => setAddingVolunteer(true)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Volunteer
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {addingVolunteer ? (
                <div className="border p-4 rounded-md mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Volunteer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={newVolunteer.name}
                        onChange={(e) => setNewVolunteer({...newVolunteer, name: e.target.value})}
                        placeholder="Enter volunteer's full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={newVolunteer.email}
                        onChange={(e) => setNewVolunteer({...newVolunteer, email: e.target.value})}
                        placeholder="Enter volunteer's email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        value={newVolunteer.phone}
                        onChange={(e) => setNewVolunteer({...newVolunteer, phone: e.target.value})}
                        placeholder="Enter volunteer's phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Area</Label>
                      <Input 
                        id="area" 
                        value={newVolunteer.area}
                        onChange={(e) => setNewVolunteer({...newVolunteer, area: e.target.value})}
                        placeholder="Enter volunteer's area"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password"
                        value={newVolunteer.password}
                        onChange={(e) => setNewVolunteer({...newVolunteer, password: e.target.value})}
                        placeholder="Create a password"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setAddingVolunteer(false)}>Cancel</Button>
                    <Button onClick={handleAddVolunteer}>Save Volunteer</Button>
                  </div>
                </div>
              ) : null}
              
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredVolunteers.length > 0 ? (
                      filteredVolunteers.map((volunteer) => (
                        <tr key={volunteer.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{volunteer.name}</div>
                            <div className="text-sm text-gray-500">Joined {volunteer.joinDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{volunteer.email}</div>
                            <div className="text-sm text-gray-500">{volunteer.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{volunteer.area}</div>
                            <div className="text-sm text-gray-500">{volunteer.issuesResolved} issues resolved</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant={volunteer.status === 'active' ? 'default' : 'secondary'}>
                              {volunteer.status === 'active' ? 'Active' : 'Inactive'}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                              {volunteer.status === 'inactive' ? (
                                <button className="text-green-600 hover:text-green-800">
                                  <Check className="h-4 w-4" />
                                </button>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-center">
                          <p className="text-gray-500">No volunteers found matching your search.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="issues" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Issue Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {issuesData.map((issue) => (
                      <tr key={issue.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{issue.id}</div>
                          <div className="text-sm text-gray-500">{issue.dateReported}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{issue.name}</div>
                          <div className="text-sm text-gray-500 line-clamp-1">{issue.issue}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{issue.area}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant={
                            issue.status === 'pending' ? 'outline' : 
                            issue.status === 'in-progress' ? 'secondary' : 
                            'default'
                          }>
                            {issue.status === 'pending' ? 'Pending' : 
                             issue.status === 'in-progress' ? 'In Progress' : 
                             'Resolved'}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{issue.assignedTo || 'Not assigned'}</div>
                          {issue.status === 'resolved' && issue.resolvedDate && (
                            <div className="text-sm text-gray-500">Resolved on {issue.resolvedDate}</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Admin = () => {
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
            <AdminDashboard />
          </div>
        </div>
      ) : (
        <>
          <section className="py-12 bg-blue-50">
            <div className="section-container">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Administrator Portal</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Manage your village community and address issues effectively.
                </p>
              </div>
              
              <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <LoginForm userType="admin" onLogin={handleLogin} />
                </TabsContent>
                <TabsContent value="signup">
                  <AdminSignupForm />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Admin;
