'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { type ProductModalProps } from '@/app/types';
import { CopyButton } from '../atoms/CopyButton';
import Image from 'next/image';

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="relative h-64 w-full mb-4">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">クーポンコード:</span>
            <CopyButton text={product.couponCode} />
          </div>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-lg text-center font-medium"
          >
            商品を購入する
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}