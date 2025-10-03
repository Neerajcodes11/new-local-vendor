
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole, Vendor, Inquiry } from '../types';
import { VENDORS, INQUIRIES } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const VendorDashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [vendorData, setVendorData] = useState<Vendor | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    if (!user || user.role !== UserRole.VENDOR) {
      navigate('/login');
    } else {
      // Mock fetching vendor data. user.id would be used to fetch.
      const currentVendor = VENDORS.find(v => v.name === user.name);
      if (currentVendor) {
        setVendorData(currentVendor);
        // Mock fetching inquiries for this vendor
        const vendorInquiries = INQUIRIES.filter(i => i.vendorId === currentVendor.id);
        setInquiries(vendorInquiries);
      }
    }
  }, [user, navigate]);

  if (!vendorData) {
    return <div className="text-center p-10">Loading vendor dashboard...</div>;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVendorData(prev => prev ? {...prev, [name]: value} : null);
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, this would save the data to Firestore.
      alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Vendor Dashboard</h1>

      {/* Profile Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Manage Your Profile</h2>
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Name</label>
            <input type="text" name="shopName" value={vendorData.shopName} onChange={handleInputChange} className="mt-1 w-full input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select name="category" value={vendorData.category} onChange={handleInputChange} className="mt-1 w-full input-field">
              {Object.values(vendorData.category).map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" value={vendorData.description} onChange={handleInputChange} rows={4} className="mt-1 w-full input-field"></textarea>
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Opening Hours</label>
            <input type="text" name="openingHours" value={vendorData.openingHours} onChange={handleInputChange} className="mt-1 w-full input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="text" name="contactNumber" value={vendorData.contactNumber} onChange={handleInputChange} className="mt-1 w-full input-field" />
          </div>
          <div className="md:col-span-2">
             <label className="block text-sm font-medium text-gray-700">Shop/Product Images</label>
             <input type="file" multiple className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"/>
          </div>
          <div className="md:col-span-2 text-right">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>

      {/* Customer Inquiries */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Customer Inquiries</h2>
        <div className="space-y-4">
          {inquiries.length > 0 ? inquiries.map(inq => (
            <div key={inq.id} className="border p-4 rounded-md bg-gray-50">
                <p className="text-gray-800">"{inq.message}"</p>
                <div className="text-sm text-gray-500 mt-2 flex justify-between">
                    <span>From: <strong>{inq.customerName}</strong></span>
                    <span>{inq.timestamp.toLocaleDateString()}</span>
                </div>
            </div>
          )) : (
            <p className="text-gray-500">You have no new inquiries.</p>
          )}
        </div>
      </div>
      <style>{`.input-field { border: 1px solid #D1D5DB; padding: 0.5rem 0.75rem; border-radius: 0.375rem; } .input-field:focus { outline: none; ring: 2px; ring-color: #F97316; border-color: #F97316; }`}</style>
    </div>
  );
};

export default VendorDashboardPage;
