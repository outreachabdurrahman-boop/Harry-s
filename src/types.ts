export type MenuCategoryId = 
  | 'all'
  | 'starters'
  | 'main-course'
  | 'grill'
  | 'burgers'
  | 'pasta'
  | 'desserts'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  numericPrice?: number;
  category: MenuCategoryId;
  categoryName: string;
  image: string;
  badge?: string;
  isSpicy?: boolean;
  isVeg?: boolean;
  isPopular?: boolean;
}

export interface ExperienceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'food' | 'interior' | 'drinks' | 'patio';
  categoryLabel: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  seating: 'indoor' | 'patio' | 'any';
  specialRequests: string;
}
