import {
  Search,
  Plus,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Bed,
  Bath,
  Square,
  Eye,
  Edit,
  Trash2,
  Home,
  Building,
  UserCheck,
  CheckSquare,
  BarChart3,
  Calendar,
  Mail,
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
import Image from "next/image"
import { Property } from "@/lib/types"
import { getProperties } from "@/lib/api"
import { ThemeToggle } from "@/components/theme-toggle"
import { CreatePropertyForm } from "@/components/forms/create-property-form"

export default async function Properties() {
  const properties: Property[] = await getProperties();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Sold":
        return "bg-gray-100 text-gray-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search properties"
                className="pl-10 pr-16 py-2 w-80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">⌘F</span>
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
                <button className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/professional-headshot.png" />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-left">
                    <div className="font-medium text-gray-900 dark:text-white">Totok Michael</div>
                    <div className="text-gray-500 dark:text-gray-400">tmichael20@gmail.com</div>
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
        <aside className="w-64 bg-card border-r border-border min-h-screen">
          <div className="p-6">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">MENU</div>
            <nav className="space-y-2">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
              <Link
                href="/properties"
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg font-medium"
              >
                <Building className="w-4 h-4" />
                Properties
              </Link>
              <Link
                href="/clients"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
              >
                <UserCheck className="w-4 h-4" />
                Clients
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
              >
                <CheckSquare className="w-4 h-4" />
                Tasks
                <Badge className="ml-auto bg-emerald-600 text-white">12</Badge>
              </Link>
              <Link
                href="/analytics"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </Link>
              <Link
                href="/calendar"
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg"
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Properties</h1>
            <p className="text-muted-foreground">Manage your property listings and track sales performance.</p>
          </div>

          {/* Filters and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button variant="ghost" size="sm" className="border-r">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <CreatePropertyForm />
            </div>
          </div>

          {/* Properties Grid */}
          {properties.length === 0 ? (
            <Card className="col-span-full text-center py-12">
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="mx-auto bg-gray-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <Building className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Нет объектов</h3>
                  <p className="text-gray-500 mb-4">Добавьте первый объект недвижимости</p>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Добавить объект
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getStatusColor(property.status)}`}>
                    {property.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg mb-1">{property.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">{property.price}</div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {property.bedrooms} bed
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {property.bathrooms} bath
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      {property.sqft.toLocaleString()} sqft
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={property.agentImage || "/placeholder.svg"} />
                        <AvatarFallback>
                          {property.agent
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{property.agent}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {property.type}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Eye className="w-4 h-4 mr-1" />
                      View
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
