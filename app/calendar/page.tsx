"use client"

import {
  Search,
  Plus,
  Bell,
  Mail,
  BarChart3,
  Calendar,
  Home,
  UserCheck,
  CheckSquare,
  Building,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  User,
  Phone,
  Filter,
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
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Sample calendar events
  const events = [
    {
      id: 1,
      title: "Property Showing",
      time: "10:00 AM",
      duration: "1 hour",
      client: "Sarah Johnson",
      property: "123 Oak Street",
      type: "showing",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Client Meeting",
      time: "2:00 PM",
      duration: "45 mins",
      client: "Michael Chen",
      property: "456 Maple Ave",
      type: "meeting",
      status: "pending",
    },
    {
      id: 3,
      title: "Property Inspection",
      time: "4:30 PM",
      duration: "2 hours",
      client: "Emma Davis",
      property: "789 Pine Street",
      type: "inspection",
      status: "confirmed",
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Contract Signing",
      date: "Tomorrow",
      time: "11:00 AM",
      client: "Robert Wilson",
      property: "321 Elm Drive",
      type: "contract",
    },
    {
      id: 5,
      title: "Market Analysis Meeting",
      date: "Dec 15",
      time: "3:00 PM",
      client: "Team Meeting",
      property: "Downtown District",
      type: "meeting",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "showing":
        return "bg-blue-100 text-blue-800"
      case "meeting":
        return "bg-green-100 text-green-800"
      case "inspection":
        return "bg-orange-100 text-orange-800"
      case "contract":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-100 text-emerald-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
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
                placeholder="Search appointments"
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
                className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-muted rounded-lg"
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
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg font-medium"
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Calendar</h1>
            <p className="text-muted-foreground">Manage your appointments, showings, and meetings.</p>
            <div className="flex gap-3 mt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter Events
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Calendar View */}
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>December 2024</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6 + 1
                    const isCurrentMonth = day > 0 && day <= 31
                    const isToday = day === 12
                    const hasEvents = day === 12 || day === 15 || day === 18

                    return (
                      <div
                        key={i}
                        className={`p-2 h-12 text-center text-sm cursor-pointer rounded-lg ${
                          isCurrentMonth
                            ? isToday
                              ? "bg-emerald-600 text-white font-medium"
                              : hasEvents
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                                : "text-foreground hover:bg-muted"
                            : "text-muted-foreground"
                        }`}
                      >
                        {isCurrentMonth ? day : ""}
                        {hasEvents && isCurrentMonth && !isToday && (
                          <div className="w-1 h-1 bg-blue-600 rounded-full mx-auto mt-1"></div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <p className="text-sm text-muted-foreground">December 12, 2024</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border-l-4 border-emerald-600 pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <Badge className={getStatusColor(event.status)} variant="secondary">
                          {event.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time} ({event.duration})
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {event.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.property}
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge className={getEventTypeColor(event.type)} variant="secondary">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="text-sm text-muted-foreground mt-1">
                          {event.date} at {event.time}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {event.client} • {event.property}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getEventTypeColor(event.type)} variant="secondary">
                          {event.type}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Appointments</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Property Showings</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Client Meetings</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Inspections</span>
                    <span className="font-semibold">2</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Completion Rate</span>
                      <span className="font-semibold text-emerald-600">94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "94%" }}></div>
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
