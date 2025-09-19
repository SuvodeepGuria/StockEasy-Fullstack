import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bell, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-medical.png';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Landing = () => {
  const features = [
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "FEFO Notifications",
      description: "Get smart alerts for First Expiry First Out to minimize medicine wastage and maximize profits."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "Expiry Alerts",
      description: "Never lose money on expired medicines with timely notifications and automated reminders."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Business Growth Insights",
      description: "Track sales patterns, identify bestselling medicines, and make data-driven inventory decisions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Sales & Customer Management",
      description: "Manage customer data, track purchase history, and generate professional bills instantly."
    }
  ];

  const technologies = [
    "Modern Web Technologies",
    "Cloud-Based Infrastructure", 
    "Real-time Notifications",
    "Advanced Analytics",
    "Secure Data Storage",
    "Mobile Responsive Design"
  ];

  const benefits = [
    "Reduce medicine wastage by up to 40%",
    "Increase profit margins through better inventory control",
    "Save 5+ hours daily on manual stock management",
    "Improve customer satisfaction with faster service",
    "Gain valuable business insights and reports"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white overflow-hidden">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Welcome to{' '}
                <span className="text-gradient">StockEasy</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Medicine Stock Management Made Simple
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Streamline your pharmacy inventory with FEFO notifications, expiry alerts, 
                and business insights. Perfect for local medicine shop owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-hero inline-flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/#features"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="animate-slide-up lg:order-last">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Medicine Stock Management Illustration"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full blur-xl opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Your <span className="text-gradient">Pharmacy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your medicine inventory efficiently and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-feature hover-lift animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-orange-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-gradient">StockEasy</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built specifically for local medicine shop owners, StockEasy combines cutting-edge 
                technology with practical features to solve real inventory management challenges.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  Our USP: Minimizing Wastage, Maximizing Efficiency
                </h3>
                <p className="text-muted-foreground">
                  StockEasy's intelligent FEFO system ensures you sell medicines with the earliest 
                  expiry dates first, dramatically reducing waste and increasing your profit margins.
                </p>
              </div>
            </div>

            <div>
              <div className="card-primary">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-primary mr-3" />
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Pharmacy Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of pharmacy owners who trust StockEasy to manage their inventory efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;