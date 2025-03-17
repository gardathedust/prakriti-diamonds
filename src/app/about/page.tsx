import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Prakriti Diamonds</h1>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Welcome to Prakriti Diamonds, where nature meets luxury. Our journey began with a simple
                yet profound vision: to create exquisite diamond jewelry that captures the raw beauty of
                nature while maintaining the highest standards of craftsmanship and ethical sourcing.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and meticulously crafted by our
                team of expert artisans, who bring decades of experience and passion to their work.
                We believe that every diamond tells a story, and we're here to help you find the
                perfect piece that resonates with yours.
              </p>
              <p>
                At Prakriti Diamonds, we're committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ethical sourcing of all our diamonds and materials</li>
                <li>Exceptional craftsmanship and attention to detail</li>
                <li>Superior customer service and satisfaction</li>
                <li>Sustainable and responsible business practices</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-banner.jpg"
              alt="Prakriti Diamonds workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our diamonds or craftsmanship,
                ensuring each piece meets our rigorous standards.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in our sourcing and pricing,
                building trust with our customers through honest practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                While respecting traditional craftsmanship, we embrace modern technology
                and design to create timeless yet contemporary pieces.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Designer',
                image: '/images/team-1.jpg',
              },
              {
                name: 'Michael Chen',
                role: 'Master Craftsman',
                image: '/images/team-2.jpg',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Gemologist',
                image: '/images/team-3.jpg',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 