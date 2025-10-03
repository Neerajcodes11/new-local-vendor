
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (vendorId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const login = (role: UserRole) => {
    // This is a mock login. In a real app, you'd get user data from Firebase.
    const mockUser: User = {
      id: role === UserRole.VENDOR ? 'vendor123' : 'customer456',
      email: role === UserRole.VENDOR ? 'vendor@example.com' : 'customer@example.com',
      role: role,
      name: role === UserRole.VENDOR ? 'Ramesh Patel' : 'Ananya Singh',
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };
  
  const toggleFavorite = (vendorId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(vendorId)) {
        return prevFavorites.filter(id => id !== vendorId);
      } else {
        return [...prevFavorites, vendorId];
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, favorites, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
