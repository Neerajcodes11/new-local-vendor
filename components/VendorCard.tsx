
import React from 'react';
import { Link } from 'react-router-dom';
import { Vendor } from '../types';
import StarIcon from './icons/StarIcon';
import MapPinIcon from './icons/MapPinIcon';
import HeartIcon from './icons/HeartIcon';
import { useAuth } from '../context/AuthContext';


interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  const { user, favorites, toggleFavorite } = useAuth();
  const isFavorite = favorites.includes(vendor.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if(user) {
      toggleFavorite(vendor.id);
    } else {
        alert("Please log in to add favorites.");
    }
  };

  return (
    <Link to={`/vendor/${vendor.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={vendor.images[0]}
            alt={vendor.shopName}
          />
          <div
            className={`absolute top-2 right-2 p-1.5 rounded-full transition ${isFavorite ? 'bg-red-100' : 'bg-white/70'}`}
            onClick={handleFavoriteClick}
          >
            <HeartIcon filled={isFavorite} />
          </div>
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full text-sm font-semibold text-gray-800">
            {vendor.category}
          </div>
          {vendor.isOpen ? (
             <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                OPEN
             </div>
          ) : (
             <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                CLOSED
             </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 truncate group-hover:text-orange-600">
            {vendor.shopName}
          </h3>
          <div className="flex items-center text-gray-500 mt-1">
             <MapPinIcon />
             <p className="ml-1 text-sm truncate">{vendor.location}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <StarIcon />
              <span className="text-gray-700 font-semibold ml-1">{vendor.rating}</span>
              <span className="text-gray-500 text-sm ml-1">(Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
