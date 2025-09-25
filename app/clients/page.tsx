import {
  Search,
  Plus,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Home,
  Building,
  UserCheck,
  CheckSquare,
  BarChart3,
  Bell,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Client } from "@/lib/types"
import { getClients } from "@/lib/api"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function Clients() {
  const clients: Client[] = await getClients();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Potential":
        return "bg-yellow-100 text-yellow-800"
      case "Closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Buyer":
        return "bg-blue-100 text-blue-800"
      case "Seller":
        return "bg-purple-100 text-purple-800"
      case "Investor":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-foreground">RealtyPro</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search clients"
                className="pl-10 pr-16 py-2 w-80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">⌘F</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:bg-muted rounded-lg p-2 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/professional-headshot.png" />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-left">
                    <div className="font-medium text-foreground">Totok Michael</div>
                    <div className="text-muted-foreground">tmichael20@gmail.com</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
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
        <aside className="w-64 bg-card border-r border-border min-h-screen">
          <div className="p-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">MENU</div>
            <nav className="space-y-2">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/properties"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg"
              >
                <Building className="w-4 h-4" />
                Properties
              </Link>
              <Link
                href="/clients"
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg font-medium"
              >
                <UserCheck className="w-4 h-4" />
                Clients
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg"
              >
                <CheckSquare className="w-4 h-4" />
                Tasks
                <Badge className="ml-auto bg-emerald-600 text-white">12</Badge>
              </Link>
              <Link
                href="/analytics"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </Link>
              <Link
                href="/calendar"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg"
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Clients</h1>
            <p className="text-muted-foreground">Manage your client relationships and track their property interests.</p>
          </div>

          {/* Filters and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="potential">Potential</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="investor">Investor</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </div>

          {/* Clients Grid */}
          {clients.length === 0 ? (
            <Card className="col-span-full text-center py-12">
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="mx-auto bg-muted rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Нет клиентов</h3>
                  <p className="text-muted-foreground mb-4">Добавьте первого клиента, чтобы начать работу</p>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить клиента
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client) => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={client.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          <User className="w-6 h-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">Agent: {client.agent}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                      <Badge className={getTypeColor(client.type)}>{client.type}</Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {client.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {client.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      {client.budget}
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <p className="text-sm text-muted-foreground">{client.notes}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Last contact: {client.lastContact}
                    </div>
                    <div>{client.properties} properties viewed</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Eye className="w-4 h-4 mr-1" />
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
