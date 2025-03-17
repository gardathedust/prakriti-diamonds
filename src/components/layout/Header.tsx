'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Prakriti Diamonds
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/products/rings" className="text-gray-600 hover:text-gray-900">
              Rings
            </Link>
            <Link href="/products/necklaces" className="text-gray-600 hover:text-gray-900">
              Necklaces
            </Link>
            <Link href="/products/earrings" className="text-gray-600 hover:text-gray-900">
              Earrings
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
              Cart ({cartItemCount})
            </Link>
            {user ? (
              <button onClick={logout} className="text-gray-600 hover:text-gray-900">
                Logout
              </button>
            ) : (
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 