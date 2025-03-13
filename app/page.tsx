'use client';

import { useState } from 'react';
import { type Product } from './types';
import { Header } from './components/organisms/Header';
import { RankingItem } from './components/molecules/RankingItem';
import { ProductModal } from './components/organisms/ProductModal';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Temporary mock data
const mockProducts: Product[] = [
  {
    id: '1',
    title: '特選 和牛すき焼きセット',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
    description: '最高級の和牛を使用したすき焼きセット。まろやかな味わいと絶妙な霜降りが特徴です。',
    couponCode: 'WAGYU2024',
    affiliateLink: 'https://example.com/product-1',
    clickCount: 150,
    rank: 1,
    category: '肉'
  },
  {
    id: '2',
    title: '有機野菜 季節のお任せBOX',
    imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=2070',
    description: '全国の契約農家から直送される新鮮な有機野菜の詰め合わせ。',
    couponCode: 'ORGANIC2024',
    affiliateLink: 'https://example.com/product-2',
    clickCount: 120,
    rank: 2,
    category: '野菜'
  },
];

const categories = ['すべて', '肉', '麺', '海鮮'] as const;
const rankingTypes = [
  { id: 'popular', label: '動画で人気ランキング' },
  { id: 'recommended', label: 'ぽんまつの一推し' },
  { id: 'clicks', label: 'クリック数ランキング' }
] as const;

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRankingType, setSelectedRankingType] = useState<string>('popular');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            🔥 厳選グルメランキング 🔥
          </h1>
          <p className="text-gray-600 text-center mb-8">話題の商品をお得にゲット！</p>
        </motion.div>

        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 backdrop-blur-lg backdrop-filter">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'relative overflow-hidden rounded-xl p-3 text-sm font-medium transition-all duration-300',
                  'before:absolute before:inset-0 before:transition-transform before:duration-300',
                  selectedCategory === category
                    ? 'bg-yellow-500 text-white shadow-md hover:bg-yellow-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {rankingTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedRankingType(type.id)}
                className={cn(
                  'relative overflow-hidden rounded-xl p-3 text-sm font-medium transition-all duration-300',
                  'before:absolute before:inset-0 before:transition-transform before:duration-300',
                  selectedRankingType === type.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md hover:from-yellow-500 hover:to-yellow-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {type.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {mockProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <RankingItem
                product={product}
                onProductClick={setSelectedProduct}
              />
            </motion.div>
          ))}
        </motion.div>

        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </main>
    </div>
  );
}