export type PropertyStatus = "Available" | "Sold" | "Pending" | "Under Contract";
export type PropertyType = "Apartment" | "House" | "Commercial" | "Condo" | "Townhouse";

export type ClientStatus = "Active" | "Potential" | "Closed" | "Inactive";
export type ClientType = "Buyer" | "Seller" | "Investor" | "Landlord" | "Tenant";

export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskType = "showing" | "legal" | "follow-up" | "inspection" | "marketing" | "closing" | "general";

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: PropertyStatus;
  type: PropertyType;
  image: string;
  agent: string;
  agentImage: string;
  description?: string;
  features?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: ClientStatus;
  type: ClientType;
  budget: string;
  location: string;
  lastContact: string;
  properties: number;
  avatar: string;
  agent: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  type: TaskType;
  assignedTo: string;
  assignedBy: string;
  avatar?: string;
  dueDate: string;
  completedAt?: string;
  clientId?: number;
  propertyId?: number;
  client?: string;
  property?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  specialization: string;
  experience: number;
  rating: number;
  totalSales: number;
  activeListings: number;
}

export interface DashboardStats {
  totalProperties: number;
  totalClients: number;
  totalTasks: number;
  revenue: string;
  propertiesSold: number;
  activeListings: number;
  pendingTasks: number;
  newClients: number;
}