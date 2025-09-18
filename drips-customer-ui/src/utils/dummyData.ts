import { ServicePackage, Booking, User } from '../types';

export const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic Wash',
    description: 'Essential car wash service for a clean finish',
    price: 150000,
    features: [
      'Exterior wash',
      'Interior vacuum',
      'Tire cleaning',
      'Window cleaning',
    ],
    image: '/basic-wash.jpg', // You'll need to add these images to public folder
  },
  {
    id: 'premium',
    name: 'Premium Wash',
    description: 'Comprehensive cleaning inside and out',
    price: 250000,
    features: [
      'All Basic Wash features',
      'Interior detailing',
      'Wax application',
      'Leather conditioning',
      'Air freshener',
    ],
    image: '/premium-wash.jpg',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Detail',
    description: 'Ultimate car care experience',
    price: 450000,
    features: [
      'All Premium Wash features',
      'Paint correction',
      'Ceramic coating',
      'Engine bay cleaning',
      'Headlight restoration',
      'Premium wax treatment',
    ],
    image: '/deluxe-detail.jpg',
  },
];

export const dummyBookings: Booking[] = [
  {
    id: 'booking1',
    userId: 'user1',
    packageId: 'premium',
    date: '2025-09-20',
    time: '10:00',
    status: 'confirmed',
    specialRequests: 'Please pay extra attention to the leather seats',
    totalPrice: 250000,
  },
  {
    id: 'booking2',
    userId: 'user1',
    packageId: 'basic',
    date: '2025-09-15',
    time: '14:30',
    status: 'completed',
    totalPrice: 150000,
  },
];

export const dummyUser: User = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+62812345678',
  bookingHistory: dummyBookings,
};
