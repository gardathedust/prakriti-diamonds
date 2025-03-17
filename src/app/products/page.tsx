import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    href: '/products/rings/diamond-solitaire',
    price: '$1,999',
    category: 'Rings',
    imageSrc: '/images/diamond-ring.jpg',
    imageAlt: 'Diamond Solitaire Ring',
  },
  {
    id: 2,
    name: 'Diamond Tennis Bracelet',
    href: '/products/bracelets/tennis-bracelet',
    price: '$2,499',
    category: 'Bracelets',
    imageSrc: '/images/tennis-bracelet.jpg',
    imageAlt: 'Diamond Tennis Bracelet',
  },
  {
    id: 3,
    name: 'Diamond Stud Earrings',
    href: '/products/earrings/diamond-studs',
    price: '$999',
    category: 'Earrings',
    imageSrc: '/images/stud-earrings.jpg',
    imageAlt: 'Diamond Stud Earrings',
  },
  {
    id: 4,
    name: 'Diamond Pendant Necklace',
    href: '/products/necklaces/pendant',
    price: '$1,499',
    category: 'Necklaces',
    imageSrc: '/images/pendant-necklace.jpg',
    imageAlt: 'Diamond Pendant Necklace',
  },
  // Add more products as needed
];

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'rings', label: 'Rings' },
      { value: 'necklaces', label: 'Necklaces' },
      { value: 'earrings', label: 'Earrings' },
      { value: 'bracelets', label: 'Bracelets' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'under-1000', label: 'Under $1,000' },
      { value: '1000-2000', label: '$1,000 to $2,000' },
      { value: '2000-5000', label: '$2,000 to $5,000' },
      { value: 'over-5000', label: 'Over $5,000' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Collection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Filters */}
          <div className="hidden lg:block">
            <h2 className="sr-only">Filters</h2>
            {filters.map((filter) => (
              <div key={filter.id} className="border-b border-gray-200 py-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">{filter.name}</h3>
                <div className="space-y-4">
                  {filter.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option.value}
                        name={filter.id}
                        value={option.value}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 