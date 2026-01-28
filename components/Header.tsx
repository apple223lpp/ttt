import React from 'react';
import { Search, Moon, User, Command, Triangle, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left Section: Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
             {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md">
                <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mr-4 lg:mr-8 cursor-pointer group">
                <div className="text-avalanche-red group-hover:opacity-80 transition-opacity">
                    <Triangle className="fill-current w-6 h-6 rotate-0" />
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">Builder Hub</span>
            </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-gray-600">
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Academy</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Blog</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Chat</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Console</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Documentation</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Events</a>
          <a href="#" className="bg-gray-100 text-gray-900 px-3 py-2 rounded-md font-semibold">Explorer</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Grants</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Integrations</a>
          <a href="#" className="px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors">Stats</a>
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Search Button */}
          <button className="hidden sm:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-500 px-3 py-2 rounded-lg text-sm border border-gray-200/50 min-w-[160px] group">
            <Search className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            <span className="text-gray-500 group-hover:text-gray-700">Search</span>
            <div className="ml-auto flex items-center gap-0.5 text-[10px] font-bold text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-200">
               <Command className="w-2.5 h-2.5" />
               <span>K</span>
            </div>
          </button>

          {/* Mobile Search Icon */}
           <button className="sm:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Moon className="w-5 h-5" />
          </button>

          {/* User Profile */}
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]">
                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                     <User className="w-3.5 h-3.5 text-gray-700" />
                 </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;