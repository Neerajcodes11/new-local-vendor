
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { VENDORS } from '../data/dummyData';
import VendorCard from '../components/VendorCard';
import { Link } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
  const { favorites, user } = useAuth();

  if (!user) {
      return (
          <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-700">Please Log In</h2>
              <p className="text-gray-500 mt-2">Log in to see your favorite vendors.</p>
              <Link to="/login" className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
                Login
              </Link>
          </div>
      )
  }

  const favoriteVendors = VENDORS.filter(vendor => favorites.includes(vendor.id));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Favorite Vendors</h1>
      {favoriteVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favoriteVendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-700">No Favorites Yet</h2>
          <p className="text-gray-500 mt-2">
            Click the heart icon on a vendor's card to add them to your favorites.
          </p>
          <Link to="/" className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Browse Vendors
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
