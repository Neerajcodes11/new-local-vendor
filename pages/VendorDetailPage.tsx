
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { VENDORS } from '../data/dummyData';
import NotFoundPage from './NotFoundPage';
import StarIcon from '../components/icons/StarIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import ClockIcon from '../components/icons/ClockIcon';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';


const VendorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = VENDORS.find((v) => v.id === id);
  const [inquiry, setInquiry] = useState('');
  const { user } = useAuth();


  if (!vendor) {
    return <NotFoundPage />;
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to send an inquiry.");
      return;
    }
    if (inquiry.trim() === '') {
      alert("Inquiry message cannot be empty.");
      return;
    }
    // In a real app, this would be sent to Firestore
    console.log(`Inquiry for ${vendor.shopName} from ${user.name}: ${inquiry}`);
    alert('Your inquiry has been sent!');
    setInquiry('');
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <img
            src={vendor.images[0]}
            alt={vendor.shopName}
            className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
          />
          <div className="grid grid-cols-3 gap-2">
            {vendor.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${vendor.shopName} gallery ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Vendor Info */}
        <div className="flex flex-col">
          <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded-full self-start">
            {vendor.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">{vendor.shopName}</h1>
          <p className="text-md text-gray-500">by {vendor.name}</p>

          <div className="flex items-center my-4">
            <div className="flex items-center">
                {[...Array(Math.floor(vendor.rating))].map((_, i) => <StarIcon key={i}/>)}
                <span className="text-gray-600 font-semibold ml-2">{vendor.rating}</span>
            </div>
             <span className="mx-2 text-gray-300">|</span>
             <div className="flex items-center text-gray-600">
                {vendor.isOpen ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                ) : (
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></span>
                )}
                <span>{vendor.isOpen ? "Open Now" : "Closed"}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">{vendor.description}</p>
          
          <div className="space-y-3 text-gray-800 border-t pt-4">
             <div className="flex items-center">
                <MapPinIcon />
                <span className="ml-3">{vendor.location}</span>
             </div>
             <div className="flex items-center">
                <ClockIcon />
                <span className="ml-3">{vendor.openingHours}</span>
             </div>
             <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href={`tel:${vendor.contactNumber}`} className="ml-3 hover:text-orange-600">{vendor.contactNumber}</a>
             </div>
          </div>

        </div>
      </div>
      
      {/* Inquiry Form */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Vendor</h2>
        <form onSubmit={handleInquirySubmit} className="space-y-4">
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            placeholder={user ? "Write your message or question here..." : "Please log in to send a message."}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={!user}
          ></textarea>
          <Button type="submit" disabled={!user}>
            Send Inquiry
          </Button>
        </form>
      </div>

    </div>
  );
};

export default VendorDetailPage;
