import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  UserCheck, 
  Activity,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Dashboard = () => {
  const networkGrowthData = [65, 78, 82, 95, 88, 102, 118, 125, 140, 155, 162, 175];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full hero-bg">
        <AppSidebar />
        
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back to your network hub</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="professional-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Connections
                </CardTitle>
                <Users className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">2,847</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-green-500" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Collaborations Started
                </CardTitle>
                <TrendingUp className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">147</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-green-500" />
                  +8.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Users
                </CardTitle>
                <UserCheck className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">1,692</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-green-500" />
                  +15.3% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Network Growth Chart */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Network Growth</CardTitle>
                <p className="text-sm text-muted-foreground">Connection growth over time</p>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {networkGrowthData.map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-primary to-primary/60 rounded-t flex-1 transition-all hover:from-primary/80 hover:to-primary/40" 
                      style={{height: `${(height / Math.max(...networkGrowthData)) * 100}%`}}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-4">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Collaboration Graph */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Collaboration Graph</CardTitle>
                <p className="text-sm text-muted-foreground">Collaborations started over time</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary">42</div>
                      <div className="text-xs text-muted-foreground">This Month</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary">38</div>
                      <div className="text-xs text-muted-foreground">Last Month</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">AI & Tech</span>
                      <Badge variant="secondary">24 collaborations</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Fintech</span>
                      <Badge variant="secondary">18 collaborations</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Healthcare</span>
                      <Badge variant="secondary">12 collaborations</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground">Green Energy</span>
                      <Badge variant="secondary">8 collaborations</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card className="professional-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start justify-between py-3 border-b border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">John Doe connected with StartupX</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Connection</Badge>
                </div>
                
                <div className="flex items-start justify-between py-3 border-b border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">New collaboration started in AI category</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Collaboration</Badge>
                </div>
                
                <div className="flex items-start justify-between py-3 border-b border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">5 new users joined Entrepreneur Network</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        6 hours ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Network</Badge>
                </div>

                <div className="flex items-start justify-between py-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Weekly network summary generated</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        1 day ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">System</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;