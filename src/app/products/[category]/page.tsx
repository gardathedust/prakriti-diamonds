import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category } = await props.params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${formattedCategory} Collection - Prakriti Diamonds`,
    description: `Explore our beautiful ${category} collection at Prakriti Diamonds.`,
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category } = await props.params;
  const categoryProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">{category} Collection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Filters could go here */}
          
          {/* Product grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <Link key={product.id} href={product.href} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.subcategory || product.category}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            
            {categoryProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">We couldn't find any products in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 