import {
  Search,
  Bell,
  Mail,
  BarChart3,
  Calendar,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Home,
  UserCheck,
  CheckSquare,
  Building,
  DollarSign,
  Users,
  Activity,
  PieChart,
  Filter,
  Download,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">RealtyPro</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search analytics"
                className="pl-10 pr-16 py-2 w-80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">⌘F</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:bg-gray-50 rounded-lg p-2 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/professional-headshot.png" />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-left">
                    <div className="font-medium">Totok Michael</div>
                    <div className="text-gray-500">tmichael20@gmail.com</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 text-sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">MENU</div>
            <nav className="space-y-2">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/properties"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Building className="w-4 h-4" />
                Properties
              </Link>
              <Link
                href="/clients"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <UserCheck className="w-4 h-4" />
                Clients
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <CheckSquare className="w-4 h-4" />
                Tasks
                <Badge className="ml-auto bg-emerald-600 text-white">12</Badge>
              </Link>
              <Link
                href="/analytics"
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 rounded-lg font-medium"
              >
                <PieChart className="w-4 h-4" />
                Analytics
              </Link>
              <Link
                href="/calendar"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Calendar className="w-4 h-4" />
                Calendar
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track performance, analyze trends, and make data-driven decisions.</p>
            <div className="flex gap-3 mt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                Filter Data
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="bg-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium opacity-90">Total Revenue</h3>
                  <DollarSign className="w-4 h-4" />
                </div>
                <div className="text-3xl font-bold mb-2">$2.4M</div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <TrendingUp className="w-3 h-3" />
                  +18% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Avg. Sale Price</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">$485K</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp className="w-3 h-3" />
                  +5.2% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Conversion Rate</h3>
                  <Activity className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">24.5%</div>
                <div className="flex items-center gap-1 text-sm text-red-500">
                  <TrendingDown className="w-3 h-3" />
                  -2.1% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Active Clients</h3>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">142</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp className="w-3 h-3" />
                  +12% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Revenue Trend */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Revenue Trend (Last 12 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-48 gap-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                    (month, index) => (
                      <div key={month} className="flex flex-col items-center gap-2 flex-1">
                        <div
                          className={`w-full rounded-t-lg ${
                            index >= 8 ? "bg-emerald-600" : index >= 4 ? "bg-emerald-400" : "bg-gray-200"
                          }`}
                          style={{
                            height: `${Math.random() * 80 + 20}%`,
                          }}
                        ></div>
                        <span className="text-xs text-gray-500">{month}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Property Types Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Property Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                      <span className="text-sm">Residential</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Commercial</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Industrial</span>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Top Performing Agents */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-woman.png" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Alexandra Duff</div>
                      <div className="text-xs text-gray-500">$1.2M in sales</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-man.png" />
                      <AvatarFallback>EA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Edwin Adenike</div>
                      <div className="text-xs text-gray-500">$950K in sales</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/man-professional-beard.jpg" />
                      <AvatarFallback>IO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Isaac Oluwatemilorun</div>
                      <div className="text-xs text-gray-500">$780K in sales</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">
                      4
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/man-professional-glasses.jpg" />
                      <AvatarFallback>DO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">David Oshodi</div>
                      <div className="text-xs text-gray-500">$650K in sales</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Average Days on Market</div>
                      <div className="text-xs text-gray-500">Residential properties</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">28 days</div>
                      <div className="text-xs text-green-600">-5 days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Price per Sq Ft</div>
                      <div className="text-xs text-gray-500">City average</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">$285</div>
                      <div className="text-xs text-blue-600">+$12</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Inventory Levels</div>
                      <div className="text-xs text-gray-500">Available listings</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-600">2.3 months</div>
                      <div className="text-xs text-yellow-600">Low supply</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Mortgage Rates</div>
                      <div className="text-xs text-gray-500">30-year fixed</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">6.8%</div>
                      <div className="text-xs text-purple-600">+0.2%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent High-Value Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">123 Luxury Lane</div>
                      <div className="text-xs text-gray-500">Sold • 4 bed, 3 bath</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600">$850K</div>
                      <div className="text-xs text-gray-500">2 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">456 Executive Plaza</div>
                      <div className="text-xs text-gray-500">Sold • Commercial</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600">$1.2M</div>
                      <div className="text-xs text-gray-500">5 days ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">789 Waterfront Dr</div>
                      <div className="text-xs text-gray-500">Sold • 5 bed, 4 bath</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600">$975K</div>
                      <div className="text-xs text-gray-500">1 week ago</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">321 Industrial Way</div>
                      <div className="text-xs text-gray-500">Sold • Warehouse</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600">$650K</div>
                      <div className="text-xs text-gray-500">1 week ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
