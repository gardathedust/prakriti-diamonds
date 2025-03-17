'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    price: 1999.99,
    image: '/images/ring1.jpg',
    category: 'rings'
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    price: 899.99,
    image: '/images/necklace1.jpg',
    category: 'necklaces'
  },
  {
    id: '3',
    name: 'Diamond Stud Earrings',
    price: 1499.99,
    image: '/images/earring1.jpg',
    category: 'earrings'
  }
];

export default function Home() {
  return (
    <div className="fade-in">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container container">
          <Link href="/" className="nav-logo">
            Prakriti Diamonds
          </Link>
          <div className="nav-links">
            <Link href="/rings">Rings</Link>
            <Link href="/necklaces">Necklaces</Link>
            <Link href="/earrings">Earrings</Link>
            <Link href="/cart">Cart (0)</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mt-8">
        <h1 className="text-center mb-4">Welcome to Prakriti Diamonds</h1>
        <p className="text-center mb-8">Discover our collection of ethically sourced diamonds and fine jewelry</p>
      </div>

      {/* Featured Products */}
      <div className="container mb-8">
        <div className="product-grid">
          {/* Diamond Solitaire Ring */}
          <div className="product-card">
            <div className="relative" style={{ height: '200px', background: 'linear-gradient(to right, #e2e8f0, #cbd5e1)' }}>
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">Diamond Ring</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-title">Diamond Solitaire Ring</h3>
              <p className="mb-2">Elegant solitaire ring with ethically sourced diamond</p>
              <div className="product-price">$1,999.99</div>
              <button className="button mt-4 w-full">Add to Cart</button>
            </div>
          </div>

          {/* Pearl Necklace */}
          <div className="product-card">
            <div className="relative" style={{ height: '200px', background: 'linear-gradient(to right, #e2e8f0, #cbd5e1)' }}>
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">Pearl Necklace</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-title">Pearl Necklace</h3>
              <p className="mb-2">Classic pearl necklace with sterling silver chain</p>
              <div className="product-price">$899.99</div>
              <button className="button mt-4 w-full">Add to Cart</button>
            </div>
          </div>

          {/* Diamond Stud Earrings */}
          <div className="product-card">
            <div className="relative" style={{ height: '200px', background: 'linear-gradient(to right, #e2e8f0, #cbd5e1)' }}>
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">Diamond Earrings</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-title">Diamond Stud Earrings</h3>
              <p className="mb-2">Brilliant cut diamond studs in 18k gold</p>
              <div className="product-price">$1,499.99</div>
              <button className="button mt-4 w-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mb-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <h3>Ethically Sourced</h3>
            <p>All our diamonds are conflict-free and ethically sourced</p>
          </div>
          <div className="card text-center">
            <h3>Expert Craftsmanship</h3>
            <p>Each piece is handcrafted by skilled artisans</p>
          </div>
          <div className="card text-center">
            <h3>Lifetime Warranty</h3>
            <p>Every purchase comes with our lifetime warranty</p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mb-8">
        <div className="card">
          <h2 className="text-center mb-4">Stay Updated</h2>
          <p className="text-center mb-4">Subscribe to receive updates about new collections and special offers</p>
          <div className="flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
} 