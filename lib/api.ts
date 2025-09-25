import { mockProperties } from "@/lib/mock/properties";
import { mockClients } from "@/lib/mock/clients";
import { mockTasks } from "@/lib/mock/tasks";
import { Property, Client, Task } from "@/lib/types";

export async function getProperties(): Promise<Property[]> {
  return Promise.resolve(mockProperties);
}

export async function getClients(): Promise<Client[]> {
  return Promise.resolve(mockClients);
}

export async function getTasks(): Promise<Task[]> {
  return Promise.resolve(mockTasks);
}