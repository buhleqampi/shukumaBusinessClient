export interface Order {
  description: string;
  total: number;
  user: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: string[];
  orderNumber: number;
}

