export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface WaterStation {
  id: number;
  name: string;
  location: string;
  status: 'active' | 'inactive' | 'maintenance';
  flowRate: number;
  lastMaintenance: Date;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
