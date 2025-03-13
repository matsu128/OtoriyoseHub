'use client';

import Image from 'next/image';
import { type RankingItemProps } from '@/app/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function RankingItem({ product, onProductClick }: RankingItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group bg-white hover:bg-gray-50 transition-all duration-300',
        'rounded-xl shadow-sm hover:shadow-md cursor-pointer'
      )}
    >
      <div 
        className="flex items-center gap-4 p-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 truncate pr-4">
              {product.title}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0">
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product);
            }}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            商品詳細を見る
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}