export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  couponCode: string;
  affiliateLink: string;
  clickCount: number;
  rank: number;
  category: string;
}

export interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface RankingItemProps {
  product: Product;
  onProductClick: (product: Product) => void;
}