import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Globe } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen hero-bg text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">JACKRYPT</h1>
            <p className="text-muted-foreground mt-1">Dashboard Overview</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Settings</Button>
            <Button className="professional-button">Get Started</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="professional-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Links
              </CardTitle>
              <Globe className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">159</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="professional-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Clicks
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12,594</div>
              <p className="text-xs text-muted-foreground">
                This is how much the links have been clicked throughout the year
              </p>
            </CardContent>
          </Card>

          <Card className="professional-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">789</div>
              <p className="text-xs text-muted-foreground">
                Your target: 1,500
              </p>
            </CardContent>
          </Card>

          <Card className="professional-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Performance
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">98.2%</div>
              <p className="text-xs text-muted-foreground">
                +2.4% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <Card className="professional-card mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart Placeholder */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Overall Performance</h3>
                <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization</p>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Performance Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Total clicks across all funnels</span>
                    <Badge variant="secondary">12,594</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Conversion Rate</span>
                    <Badge variant="secondary">15.2%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Average Session</span>
                    <Badge variant="secondary">3m 42s</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="professional-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <div>
                  <p className="text-sm font-medium text-foreground">New user registered</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="outline">User</Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <div>
                  <p className="text-sm font-medium text-foreground">Campaign performance improved</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
                <Badge variant="outline">Analytics</Badge>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-foreground">System maintenance completed</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Badge variant="outline">System</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;