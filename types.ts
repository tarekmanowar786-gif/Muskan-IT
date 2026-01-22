
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  badge?: 'Best Seller' | 'New' | 'Discount';
  rating: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  area: string;
  paymentMethod: 'Cash on Delivery' | 'bKash' | 'Nagad' | 'Rocket';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
