import {
  Search,
  Plus,
  Download,
  Bell,
  Mail,
  BarChart3,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  Home,
  UserCheck,
  CheckSquare,
  Building,
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

export default function Dashboard() {
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
                placeholder="Search properties"
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
            {/* Dropdown menu to profile section */}
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
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 rounded-lg font-medium"
              >
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </a>
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
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <BarChart3 className="w-4 h-4" />
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Real Estate Dashboard</h1>
            <p className="text-gray-600">Manage properties, clients, and close deals with ease.</p>
            <div className="flex gap-3 mt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Import Listings
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="bg-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium opacity-90">Total Properties</h3>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="text-3xl font-bold mb-2">156</div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <TrendingUp className="w-3 h-3" />
                  +12% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Properties Sold</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">28</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp className="w-3 h-3" />
                  +8% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Active Listings</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">89</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp className="w-3 h-3" />
                  +5% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Pending Sales</h3>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm text-gray-500">Under Contract</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Sales Analytics */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-32 gap-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className={`w-full rounded-t-lg ${
                          index === 1 || index === 2 || index === 3 ? "bg-emerald-600" : "bg-gray-200"
                        }`}
                        style={{
                          height: index === 1 ? "60%" : index === 2 ? "80%" : index === 3 ? "100%" : "20%",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500">{day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Appointments</CardTitle>
                <Button variant="ghost" size="sm">
                  + New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Property Viewing</h4>
                    <p className="text-sm text-gray-500 mb-1">123 Oak Street</p>
                    <p className="text-sm text-gray-500 mb-3">Time: 02:00 pm - 03:00 pm</p>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Start Meeting</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Performance */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Team Performance</CardTitle>
                <Button variant="ghost" size="sm">
                  + Add Agent
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-woman.png" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Alexandra Duff</div>
                      <div className="text-xs text-gray-500">Sales Agent - 8 properties sold</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Top Performer</Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-man.png" />
                      <AvatarFallback>EA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Edwin Adenike</div>
                      <div className="text-xs text-gray-500">Property Manager - 15 active listings</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/man-professional-beard.jpg" />
                      <AvatarFallback>IO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Isaac Oluwatemilorun</div>
                      <div className="text-xs text-gray-500">Buyer's Agent - 5 pending deals</div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/man-professional-glasses.jpg" />
                      <AvatarFallback>DO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">David Oshodi</div>
                      <div className="text-xs text-gray-500">Marketing Specialist - 12 campaigns</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Creative</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Sales Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Target</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="2"
                        strokeDasharray="73, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">73%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 mb-4">$2.2M of $3M target</div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Achieved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>In Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>Remaining</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Property Listed</div>
                      <div className="text-xs text-gray-500">456 Maple Ave - $450,000</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Client Meeting</div>
                      <div className="text-xs text-gray-500">Johnson Family - Tomorrow 2PM</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-yellow-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Contract Review</div>
                      <div className="text-xs text-gray-500">789 Pine St - Due Dec 1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Market Analysis</div>
                      <div className="text-xs text-gray-500">Downtown District Report</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-600 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Property Inspection</div>
                      <div className="text-xs text-gray-500">321 Oak Blvd - Scheduled</div>
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
