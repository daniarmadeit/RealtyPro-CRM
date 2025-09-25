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
  Clock,
  User,
  MapPin,
  Phone,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  AlertCircle,
  CalendarIcon,
  CheckCircle,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Task } from "@/lib/types"
import { getTasks } from "@/lib/api"
import { ThemeToggle } from "@/components/theme-toggle"
import { CreateTaskForm } from "@/components/forms/create-task-form"

export default async function Tasks() {
  const tasks: Task[] = await getTasks();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
      case "in_progress":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300"
      case "pending":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300"
      case "cancelled":
        return "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
      case "high":
        return "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
      case "medium":
        return "bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300"
      case "low":
        return "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "showing":
        return <Eye className="w-4 h-4" />
      case "legal":
        return <CheckCircle className="w-4 h-4" />
      case "follow-up":
        return <Phone className="w-4 h-4" />
      case "inspection":
        return <AlertCircle className="w-4 h-4" />
      case "marketing":
        return <BarChart3 className="w-4 h-4" />
      case "closing":
        return <CheckSquare className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
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
                placeholder="Search tasks"
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
                className="flex items-center gap-3 px-3 py-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg font-medium"
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
            <h1 className="text-2xl font-bold text-foreground mb-2">Tasks</h1>
            <p className="text-muted-foreground">Manage your real estate tasks and stay organized.</p>
            <div className="flex gap-3 mt-4">
              <CreateTaskForm />
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter Tasks
              </Button>
            </div>
          </div>

          {/* Task Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Tasks</h3>
                  <CheckSquare className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2">24</div>
                <div className="text-sm text-muted-foreground">All active tasks</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Pending</h3>
                  <Clock className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-sm text-muted-foreground">Awaiting action</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">In Progress</h3>
                  <AlertCircle className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-sm text-muted-foreground">Currently active</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Completed</h3>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm text-muted-foreground">This week</div>
              </CardContent>
            </Card>
          </div>

          {/* Tasks List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Tasks</CardTitle>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search tasks..." className="w-64" />
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="mx-auto bg-muted rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <CheckSquare className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Нет задач</h3>
                    <p className="text-muted-foreground mb-4">Создайте первую задачу для организации работы</p>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Создать задачу
                    </Button>
                  </div>
                ) : (
                  tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors bg-card"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
                      {getTypeIcon(task.type)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground">{task.title}</h3>
                        <Badge className={getPriorityColor(task.priority)} variant="secondary">
                          {task.priority}
                        </Badge>
                        <Badge className={getStatusColor(task.status)} variant="secondary">
                          {task.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {task.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {task.property}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {task.dueDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={task.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {task.assignedTo
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{task.assignedTo}</span>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Task
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Task
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
