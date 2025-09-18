export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
}

export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  specialRequests?: string;
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookingHistory: Booking[];
}
