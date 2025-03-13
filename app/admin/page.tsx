'use client';

import { useState } from 'react';
import { Header } from '../components/organisms/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product } from '../types';
import Image from 'next/image';

// Mock data for admin page
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

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">商品登録・編集</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">商品タイトル</label>
                <Input placeholder="商品名を入力" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">商品画像URL</label>
                <Input placeholder="画像URLを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">商品説明</label>
                <Textarea placeholder="商品の説明を入力" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">クーポンコード</label>
                <Input placeholder="クーポンコードを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">アフィリエイトリンク</label>
                <Input placeholder="購入リンクを入力" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">カテゴリー</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                  <option value="肉">肉</option>
                  <option value="麺">麺</option>
                  <option value="海鮮">海鮮</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                {selectedProduct ? '更新する' : '登録する'}
              </Button>
            </form>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg p-6 shadow-sm overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">商品一覧</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>画像</TableHead>
                    <TableHead>タイトル</TableHead>
                    <TableHead>クリック数</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="relative h-16 w-16">
                          <Image
                            src={product.imageUrl}
                            alt={product.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.clickCount}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProduct(product)}
                        >
                          編集
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}