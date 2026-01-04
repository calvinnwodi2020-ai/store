
export type Category = 'New Kits' | 'Retro Kits' | 'Boots' | 'Balls' | 'Gym Wear';

export type KitType = 'Home' | 'Away' | 'Third' | 'N/A';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  brand?: string;
  kitType?: KitType;
  description: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}
