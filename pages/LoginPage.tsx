
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // In a real app, these would have more state and validation
  const handleAuth = (e: React.FormEvent, role: UserRole) => {
    e.preventDefault();
    login(role);
    if(role === UserRole.VENDOR) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const AuthForm = ({ role }: { role: UserRole }) => (
    <form onSubmit={(e) => handleAuth(e, role)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" defaultValue={`${role.toLowerCase()}@example.com`} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" defaultValue="password" />
      </div>
      <Button type="submit" className="w-full">
        {isLogin ? 'Login' : 'Sign Up'} as {role === UserRole.CUSTOMER ? 'Customer' : 'Vendor'}
      </Button>
    </form>
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {isLogin ? 'Welcome Back!' : 'Create an Account'}
        </h2>
        <p className="text-center text-gray-500 mb-6">Access your local vendor network.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-center mb-2">For Customers</h3>
            <AuthForm role={UserRole.CUSTOMER} />
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-center mb-2">For Vendors</h3>
            <AuthForm role={UserRole.VENDOR} />
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-orange-600 hover:underline">
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
