
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
}

export enum VendorCategory {
  FOOD = 'Food',
  GROCERY = 'Grocery',
  CLOTHING = 'Clothing',
  SERVICES = 'Services',
  ELECTRONICS = 'Electronics',
  HANDICRAFTS = 'Handicrafts',
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface Vendor {
  id: string;
  name: string;
  shopName: string;
  category: VendorCategory;
  location: string;
  contactNumber: string;
  description: string;
  rating: number;
  openingHours: string;
  images: string[];
  isOpen: boolean;
}

export interface Inquiry {
    id: string;
    customerName: string;
    message: string;
    timestamp: Date;
    vendorId: string;
}
