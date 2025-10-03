
import React, { useState, useMemo } from 'react';
import VendorCard from '../components/VendorCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { VENDORS } from '../data/dummyData';
import { Vendor } from '../types';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVendors = useMemo(() => {
    return VENDORS.filter((vendor: Vendor) => {
      const matchesCategory =
        selectedCategory === 'All' || vendor.category === selectedCategory;
      const matchesSearch =
        vendor.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Discover Local Vendors in Nashik</h1>
        <p className="text-lg text-gray-600">Support your community by shopping local.</p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl shadow-lg space-y-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {filteredVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-700">No Vendors Found</h2>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
