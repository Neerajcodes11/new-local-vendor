
import { Vendor, VendorCategory, Inquiry } from '../types';

export const VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'Ramesh Patel',
    shopName: 'Nashik Fresh Mart',
    category: VendorCategory.GROCERY,
    location: 'College Road, Nashik',
    contactNumber: '9876543210',
    description: 'Your one-stop shop for fresh vegetables, fruits, and daily groceries. We source directly from local farmers.',
    rating: 4.5,
    openingHours: '8:00 AM - 9:00 PM',
    images: [
      'https://picsum.photos/seed/mart1/600/400',
      'https://picsum.photos/seed/mart2/600/400',
      'https://picsum.photos/seed/mart3/600/400',
    ],
    isOpen: true,
  },
  {
    id: '2',
    name: 'Sunita Sharma',
    shopName: 'Curry Leaf Eatery',
    category: VendorCategory.FOOD,
    location: 'Gangapur Road, Nashik',
    contactNumber: '9123456780',
    description: 'Authentic Maharashtrian cuisine with a modern twist. Famous for Misal Pav and Vada Pav.',
    rating: 4.8,
    openingHours: '11:00 AM - 10:00 PM',
    images: [
      'https://picsum.photos/seed/food1/600/400',
      'https://picsum.photos/seed/food2/600/400',
    ],
    isOpen: true,
  },
  {
    id: '3',
    name: 'Anil Verma',
    shopName: 'Nashik Threads',
    category: VendorCategory.CLOTHING,
    location: 'Saraf Bazaar, Nashik',
    contactNumber: '9988776655',
    description: 'Traditional and modern apparel for men and women. Specializing in Paithani sarees and handcrafted textiles.',
    rating: 4.2,
    openingHours: '10:00 AM - 8:00 PM',
    images: [
      'https://picsum.photos/seed/cloth1/600/400',
      'https://picsum.photos/seed/cloth2/600/400',
    ],
    isOpen: false,
  },
  {
    id: '4',
    name: 'Priya Deshmukh',
    shopName: 'Quick Fix Services',
    category: VendorCategory.SERVICES,
    location: 'Indira Nagar, Nashik',
    contactNumber: '9001223344',
    description: 'Reliable home services including plumbing, electrical repairs, and appliance maintenance.',
    rating: 4.6,
    openingHours: '9:00 AM - 7:00 PM',
    images: [
      'https://picsum.photos/seed/service1/600/400',
    ],
    isOpen: true,
  },
    {
    id: '5',
    name: 'Vikram Singh',
    shopName: 'Tech Point Electronics',
    category: VendorCategory.ELECTRONICS,
    location: 'Canada Corner, Nashik',
    contactNumber: '8877665544',
    description: 'Your trusted local store for mobile phones, accessories, and electronic repairs.',
    rating: 4.3,
    openingHours: '10:30 AM - 9:30 PM',
    images: [
      'https://picsum.photos/seed/tech1/600/400',
      'https://picsum.photos/seed/tech2/600/400',
    ],
    isOpen: true,
  },
  {
    id: '6',
    name: 'Meena Kulkarni',
    shopName: 'Kala Kriti Handicrafts',
    category: VendorCategory.HANDICRAFTS,
    location: 'Panchavati, Nashik',
    contactNumber: '8123456789',
    description: 'Beautifully handcrafted items, souvenirs, and home decor that showcase local artistry.',
    rating: 4.9,
    openingHours: '9:00 AM - 6:00 PM',
    images: [
      'https://picsum.photos/seed/art1/600/400',
    ],
    isOpen: false,
  },
];

export const INQUIRIES: Inquiry[] = [
    {
        id: 'inq1',
        customerName: 'Aarav Gupta',
        message: 'Do you deliver groceries to the Pathardi Phata area?',
        timestamp: new Date('2024-07-20T10:30:00Z'),
        vendorId: '1',
    },
    {
        id: 'inq2',
        customerName: 'Siya Joshi',
        message: 'Can I book a table for 4 people for this Saturday evening?',
        timestamp: new Date('2024-07-21T14:00:00Z'),
        vendorId: '2',
    },
     {
        id: 'inq3',
        customerName: 'Rahul Pawar',
        message: 'What are your charges for fixing a leaking tap?',
        timestamp: new Date('2024-07-22T09:15:00Z'),
        vendorId: '4',
    }
]
