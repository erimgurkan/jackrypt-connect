import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const handleLogout = () => {
    // TODO: Implement Supabase logout
    console.log("Logout");
  };

  return (
    <div className="min-h-screen hero-bg">
      <nav className="flex justify-between items-center p-6 lg:px-12 border-b border-border/20">
        <div className="text-2xl font-bold text-primary">
          Jackrypt Dashboard
        </div>
        <Button variant="ghost" onClick={handleLogout} className="gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </nav>

      <div className="flex items-center justify-center min-h-[80vh] p-6">
        <div className="text-center max-w-2xl">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Network Hub</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your secure networking dashboard is ready. This is where you'll connect with 
            fellow entrepreneurs and build meaningful business relationships.
          </p>
          <div className="futuristic-card p-8 text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">Coming Soon:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Connect with verified entrepreneurs</li>
              <li>• Join industry-specific communities</li>
              <li>• Collaborate on projects</li>
              <li>• Share resources and insights</li>
              <li>• Track your network growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;