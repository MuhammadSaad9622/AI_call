import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Phone, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut,
  Bot
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Active Call', href: '/call/call-123', icon: Phone },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white w-64">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-700">
        <Bot className="h-8 w-8 text-primary-500" />
        <span className="ml-2 text-xl font-bold">AI Sales Assistant</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link key={item.name} to={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`
                  flex items-center px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-gray-700">
        <div className="flex items-center px-4 py-2">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-8 w-8 rounded-full"
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};