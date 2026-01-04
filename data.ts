
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // --- 2025/2026 NEW KITS ---
  {
    id: 'k1-h',
    name: 'Real Madrid 25/26 Home Kit',
    category: 'New Kits',
    kitType: 'Home',
    price: 95.00,
    image: 'https://picsum.photos/seed/rm-home/600/800',
    description: 'The iconic white of Los Blancos for the 2025/26 season.',
    rating: 4.9
  },
  {
    id: 'k1-a',
    name: 'Real Madrid 25/26 Away Kit',
    category: 'New Kits',
    kitType: 'Away',
    price: 95.00,
    image: 'https://picsum.photos/seed/rm-away/600/800',
    description: 'Electric blue away design for the upcoming season.',
    rating: 4.7
  },
  {
    id: 'k1-t',
    name: 'Real Madrid 25/26 Third Kit',
    category: 'New Kits',
    kitType: 'Third',
    price: 95.00,
    image: 'https://picsum.photos/seed/rm-third/600/800',
    description: 'Limited edition charcoal and gold third kit.',
    rating: 4.8
  },
  {
    id: 'k2-h',
    name: 'Man City 25/26 Home Kit',
    category: 'New Kits',
    kitType: 'Home',
    price: 90.00,
    image: 'https://picsum.photos/seed/mc-home/600/800',
    description: 'Sky blue classic with modern patterns.',
    rating: 4.6
  },
  {
    id: 'k2-a',
    name: 'Man City 25/26 Away Kit',
    category: 'New Kits',
    kitType: 'Away',
    price: 90.00,
    image: 'https://picsum.photos/seed/mc-away/600/800',
    description: 'Retro-inspired away stripes for 25/26.',
    rating: 4.5
  },
  {
    id: 'k2-t',
    name: 'Man City 25/26 Third Kit',
    category: 'New Kits',
    kitType: 'Third',
    price: 90.00,
    image: 'https://picsum.photos/seed/mc-third/600/800',
    description: 'Abstract neon third kit for European nights.',
    rating: 4.9
  },

  // --- RETRO KITS ---
  {
    id: 'r1',
    name: 'Brazil 2002 World Cup Retro',
    category: 'Retro Kits',
    price: 75.00,
    image: 'https://picsum.photos/seed/bz-retro/600/800',
    description: 'Relive the magic of Ronaldo and Ronaldinho.',
    rating: 5.0
  },
  {
    id: 'r2',
    name: 'AC Milan 1994 Home Retro',
    category: 'Retro Kits',
    price: 80.00,
    image: 'https://picsum.photos/seed/ac-retro/600/800',
    description: 'The golden era of the Rossoneri.',
    rating: 4.9
  },
  {
    id: 'r3',
    name: 'Arsenal 2004 Invincibles',
    category: 'Retro Kits',
    price: 85.00,
    image: 'https://picsum.photos/seed/ars-retro/600/800',
    description: 'Commemorating the unbeaten Premier League season.',
    rating: 5.0
  },

  // --- BOOTS ---
  {
    id: 'b1',
    name: 'Nike Mercurial Vapor XV',
    category: 'Boots',
    brand: 'Nike',
    price: 240.00,
    image: 'https://picsum.photos/seed/nike-vapor/600/800',
    description: 'Built for speed. The lightest boot in the game.',
    rating: 4.9
  },
  {
    id: 'b2',
    name: 'Adidas Predator Elite',
    category: 'Boots',
    brand: 'Adidas',
    price: 260.00,
    image: 'https://picsum.photos/seed/adi-pred/600/800',
    description: 'Unrivaled control and swerve technology.',
    rating: 4.8
  },
  {
    id: 'b3',
    name: 'Puma Future Ultimate',
    category: 'Boots',
    brand: 'Puma',
    price: 210.00,
    image: 'https://picsum.photos/seed/puma-future/600/800',
    description: 'Adaptive fit for the most creative playmakers.',
    rating: 4.7
  },

  // --- BALLS ---
  {
    id: 'ball1',
    name: 'UCL Pro Match Ball',
    category: 'Balls',
    price: 150.00,
    image: 'https://picsum.photos/seed/ucl-ball/600/800',
    description: 'Official match ball for the 25/26 Champions League.',
    rating: 4.9
  },
  {
    id: 'ball2',
    name: 'Premier League Flight',
    category: 'Balls',
    price: 135.00,
    image: 'https://picsum.photos/seed/pl-ball/600/800',
    description: 'Engineered for precision flight and consistent touch.',
    rating: 4.8
  },

  // --- GYM WEAR ---
  {
    id: 'g1',
    name: 'Pro-Performance Compression Tee',
    category: 'Gym Wear',
    price: 45.00,
    image: 'https://picsum.photos/seed/gym-tee/600/800',
    description: 'Moisture-wicking fabric for intense training sessions.',
    rating: 4.6
  },
  {
    id: 'g2',
    name: 'Elite Training Shorts',
    category: 'Gym Wear',
    price: 35.00,
    image: 'https://picsum.photos/seed/gym-shorts/600/800',
    description: 'Lightweight shorts designed for maximum mobility.',
    rating: 4.7
  }
];
