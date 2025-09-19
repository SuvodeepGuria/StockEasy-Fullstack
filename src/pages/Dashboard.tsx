import { useState } from 'react';
import { 
  Plus, 
  Eye, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  CreditCard, 
  LogOut,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Package
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    window.location.href = '/';
  };

  const stats = [
    {
      title: "Total Medicines",
      value: "1,234",
      icon: <Package className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Expiring Soon",
      value: "23",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Monthly Sales",
      value: "₹45,230",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Total Customers",
      value: "892",
      icon: <Users className="w-6 h-6" />,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  const recentSales = [
    { id: 1, medicine: "Paracetamol 500mg", customer: "John Doe", amount: "₹120", date: "2024-01-15" },
    { id: 2, medicine: "Amoxicillin 250mg", customer: "Jane Smith", amount: "₹250", date: "2024-01-15" },
    { id: 3, medicine: "Ibuprofen 400mg", customer: "Mike Johnson", amount: "₹180", date: "2024-01-14" },
  ];

  const expiringMedicines = [
    { name: "Aspirin 75mg", batch: "B123", expiry: "2024-02-15", days: 12 },
    { name: "Cough Syrup", batch: "B456", expiry: "2024-02-20", days: 17 },
    { name: "Vitamin D3", batch: "B789", expiry: "2024-02-25", days: 22 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container-width py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your pharmacy overview.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
              <span className="text-orange-600 font-medium">30-day free trial</span>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-primary hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <button className="btn-primary flex items-center justify-center space-x-2 py-4">
            <Plus className="w-5 h-5" />
            <span>Add Record</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2 py-4">
            <Eye className="w-5 h-5" />
            <span>View Record</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-medium transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span>Sell</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Sales */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Sales</h3>
              <button className="text-primary hover:text-primary-dark text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{sale.medicine}</p>
                    <p className="text-sm text-muted-foreground">{sale.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{sale.amount}</p>
                    <p className="text-sm text-muted-foreground">{sale.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expiring Medicines */}
          <div className="card-primary">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                Expiring Soon
              </h3>
              <button className="text-primary hover:text-primary-dark text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {expiringMedicines.map((medicine, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <p className="font-medium text-foreground">{medicine.name}</p>
                    <p className="text-sm text-muted-foreground">Batch: {medicine.batch}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">{medicine.days} days left</p>
                    <p className="text-sm text-muted-foreground">{medicine.expiry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-primary text-center">
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Reports</h3>
            <p className="text-muted-foreground mb-4">View detailed analytics and reports</p>
            <button className="btn-secondary w-full">Generate Reports</button>
          </div>
          
          <div className="card-primary text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Customers</h3>
            <p className="text-muted-foreground mb-4">Manage customer information</p>
            <button className="btn-secondary w-full">View Customers</button>
          </div>
          
          <div className="card-primary text-center">
            <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Upgrade Plan</h3>
            <p className="text-muted-foreground mb-4">Unlock premium features</p>
            <button className="btn-primary w-full">Upgrade Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;