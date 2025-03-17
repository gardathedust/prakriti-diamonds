export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  subcategory?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Radiant Solitaire Diamond Ring',
    description: 'A stunning solitaire ring featuring a brilliant-cut diamond set in 18k white gold, perfect for engagements or special occasions.',
    price: '$1,999',
    originalPrice: '$2,499',
    category: 'Rings',
    subcategory: 'Engagement',
    href: '/products/rings/radiant-solitaire-diamond',
    imageSrc: '/images/products/radiant-solitaire-ring.jpg',
    imageAlt: 'Radiant Solitaire Diamond Ring',
    images: [
      '/images/products/radiant-solitaire-ring-1.jpg',
      '/images/products/radiant-solitaire-ring-2.jpg',
      '/images/products/radiant-solitaire-ring-3.jpg',
    ],
    features: [
      'Ethically sourced diamond',
      'IGI certified',
      'Lifetime warranty',
      'Free resizing',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Diamond Weight': '0.50 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Ring Size': '4-12',
    },
  },
  {
    id: 2,
    name: 'Classic Tennis Bracelet',
    description: 'An elegant tennis bracelet featuring a continuous line of round brilliant diamonds set in 18k white gold.',
    price: '$2,499',
    originalPrice: '$2,999',
    category: 'Bracelets',
    subcategory: 'Tennis',
    href: '/products/bracelets/classic-tennis',
    imageSrc: '/images/products/classic-tennis-bracelet.jpg',
    imageAlt: 'Classic Tennis Bracelet',
    images: [
      '/images/products/classic-tennis-bracelet-1.jpg',
      '/images/products/classic-tennis-bracelet-2.jpg',
      '/images/products/classic-tennis-bracelet-3.jpg',
    ],
    features: [
      'Premium quality diamonds',
      'Double safety clasp',
      'Adjustable length',
      'IGI certified',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '3.00 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Length': '7 inches',
    },
  },
  {
    id: 3,
    name: 'Diamond Cluster Stud Earrings',
    description: 'Beautiful cluster stud earrings featuring multiple diamonds arranged in a floral pattern.',
    price: '$999',
    originalPrice: '$1,299',
    category: 'Earrings',
    subcategory: 'Studs',
    href: '/products/earrings/diamond-cluster-studs',
    imageSrc: '/images/products/diamond-cluster-studs.jpg',
    imageAlt: 'Diamond Cluster Stud Earrings',
    images: [
      '/images/products/diamond-cluster-studs-1.jpg',
      '/images/products/diamond-cluster-studs-2.jpg',
      '/images/products/diamond-cluster-studs-3.jpg',
    ],
    features: [
      'Secure screw backs',
      'IGI certified diamonds',
      'Lightweight design',
      'Hypoallergenic',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '0.75 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Back Type': 'Screw',
    },
  },
  {
    id: 4,
    name: 'Infinity Diamond Pendant',
    description: 'A delicate infinity-shaped pendant adorned with brilliant-cut diamonds, symbolizing eternal love.',
    price: '$1,499',
    originalPrice: '$1,799',
    category: 'Necklaces',
    subcategory: 'Pendants',
    href: '/products/necklaces/infinity-diamond-pendant',
    imageSrc: '/images/products/infinity-diamond-pendant.jpg',
    imageAlt: 'Infinity Diamond Pendant',
    images: [
      '/images/products/infinity-diamond-pendant-1.jpg',
      '/images/products/infinity-diamond-pendant-2.jpg',
      '/images/products/infinity-diamond-pendant-3.jpg',
    ],
    features: [
      'Adjustable chain length',
      'IGI certified diamonds',
      'Tangle-free design',
      'Spring ring clasp',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '0.50 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Chain Length': '16-18 inches',
    },
  },
  {
    id: 5,
    name: 'Emerald Cut Eternity Band',
    description: 'A sophisticated eternity band featuring emerald-cut diamonds set in platinum.',
    price: '$3,499',
    originalPrice: '$3,999',
    category: 'Rings',
    subcategory: 'Eternity Bands',
    href: '/products/rings/emerald-cut-eternity',
    imageSrc: '/images/products/emerald-cut-eternity.jpg',
    imageAlt: 'Emerald Cut Eternity Band',
    images: [
      '/images/products/emerald-cut-eternity-1.jpg',
      '/images/products/emerald-cut-eternity-2.jpg',
      '/images/products/emerald-cut-eternity-3.jpg',
    ],
    features: [
      'Channel setting',
      'Platinum construction',
      'IGI certified diamonds',
      'Comfort fit',
    ],
    specifications: {
      'Metal': 'Platinum',
      'Total Diamond Weight': '2.00 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Ring Size': '4-12',
    },
  },
  {
    id: 6,
    name: 'Diamond Drop Earrings',
    description: 'Elegant drop earrings featuring pear-shaped diamonds suspended from a line of round brilliants.',
    price: '$2,799',
    originalPrice: '$3,299',
    category: 'Earrings',
    subcategory: 'Drop',
    href: '/products/earrings/diamond-drop',
    imageSrc: '/images/products/diamond-drop-earrings.jpg',
    imageAlt: 'Diamond Drop Earrings',
    images: [
      '/images/products/diamond-drop-earrings-1.jpg',
      '/images/products/diamond-drop-earrings-2.jpg',
      '/images/products/diamond-drop-earrings-3.jpg',
    ],
    features: [
      'French wire backs',
      'IGI certified diamonds',
      'Articulated design',
      'Secure closure',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '1.50 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Length': '1.5 inches',
    },
  },
  {
    id: 7,
    name: 'Three-Stone Diamond Ring',
    description: 'A classic three-stone ring symbolizing past, present, and future, set with round brilliant diamonds.',
    price: '$4,999',
    originalPrice: '$5,499',
    category: 'Rings',
    subcategory: 'Three-Stone',
    href: '/products/rings/three-stone-diamond',
    imageSrc: '/images/products/three-stone-ring.jpg',
    imageAlt: 'Three-Stone Diamond Ring',
    images: [
      '/images/products/three-stone-ring-1.jpg',
      '/images/products/three-stone-ring-2.jpg',
      '/images/products/three-stone-ring-3.jpg',
    ],
    features: [
      'Platinum setting',
      'IGI certified center stone',
      'Tapered band design',
      'Secure prong setting',
    ],
    specifications: {
      'Metal': 'Platinum',
      'Total Diamond Weight': '2.50 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Ring Size': '4-12',
    },
  },
  {
    id: 8,
    name: 'Diamond Line Necklace',
    description: 'A sophisticated line necklace featuring graduated round brilliant diamonds.',
    price: '$3,999',
    originalPrice: '$4,499',
    category: 'Necklaces',
    subcategory: 'Line',
    href: '/products/necklaces/diamond-line',
    imageSrc: '/images/products/diamond-line-necklace.jpg',
    imageAlt: 'Diamond Line Necklace',
    images: [
      '/images/products/diamond-line-necklace-1.jpg',
      '/images/products/diamond-line-necklace-2.jpg',
      '/images/products/diamond-line-necklace-3.jpg',
    ],
    features: [
      'Graduated design',
      'Double safety clasp',
      'IGI certified diamonds',
      'Adjustable length',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '4.00 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Length': '16-18 inches',
    },
  },
  {
    id: 9,
    name: 'Diamond Bangle Bracelet',
    description: 'An elegant bangle bracelet featuring a continuous line of round brilliant diamonds.',
    price: '$5,999',
    originalPrice: '$6,499',
    category: 'Bracelets',
    subcategory: 'Bangles',
    href: '/products/bracelets/diamond-bangle',
    imageSrc: '/images/products/diamond-bangle.jpg',
    imageAlt: 'Diamond Bangle Bracelet',
    images: [
      '/images/products/diamond-bangle-1.jpg',
      '/images/products/diamond-bangle-2.jpg',
      '/images/products/diamond-bangle-3.jpg',
    ],
    features: [
      'Hidden clasp',
      'IGI certified diamonds',
      'Oval shape design',
      'Safety chain',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '5.00 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Size': 'Standard',
    },
  },
  {
    id: 10,
    name: 'Halo Diamond Stud Earrings',
    description: 'Classic stud earrings featuring center diamonds surrounded by a halo of smaller diamonds.',
    price: '$2,299',
    originalPrice: '$2,799',
    category: 'Earrings',
    subcategory: 'Studs',
    href: '/products/earrings/halo-diamond-studs',
    imageSrc: '/images/products/halo-diamond-studs.jpg',
    imageAlt: 'Halo Diamond Stud Earrings',
    images: [
      '/images/products/halo-diamond-studs-1.jpg',
      '/images/products/halo-diamond-studs-2.jpg',
      '/images/products/halo-diamond-studs-3.jpg',
    ],
    features: [
      'Double security backs',
      'IGI certified center stones',
      'Comfortable fit',
      'Brilliant sparkle',
    ],
    specifications: {
      'Metal': '18k White Gold',
      'Total Diamond Weight': '1.20 CT',
      'Diamond Color': 'F-G',
      'Diamond Clarity': 'VS1-VS2',
      'Back Type': 'Double Security',
    },
  },
]; 