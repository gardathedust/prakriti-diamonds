import React from 'react';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductView from '@/components/product/ProductView';

interface ProductPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata(props: ProductPageProps): Promise<Metadata> {
  const { category, slug } = props.params;
  return {
    title: `${slug} - Prakriti Diamonds`,
    description: `View our beautiful ${slug} from our ${category} collection`,
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { category, slug } = props.params;
  const product = products.find((p) => p.href === `/products/${category}/${slug}`);

  if (!product) {
    notFound();
  }

  return <ProductView product={product} />;
} 