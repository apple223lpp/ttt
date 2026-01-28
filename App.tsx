import React from 'react';
import { 
  Globe, 
  Search, 
  ChevronRight, 
  Box, 
  ArrowRightLeft, 
  MessageSquare,
  Activity,
  Layers,
  Zap,
  Repeat
} from 'lucide-react';

import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import StatsCard from './components/StatsCard';
import FeedColumn from './components/FeedColumn';

import { MOCK_BLOCKS, MOCK_TXS, MOCK_ICMS, ACTIVITY_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col font-sans text-slate-900">
      <TopBanner />
      <Header />

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-6 font-medium">
          <span className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors"><Globe className="w-3.5 h-3.5" /> Ecosystem</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors"><Search className="w-3.5 h-3.5" /> Explorer</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="flex items-center gap-1 bg-gray-200/60 px-2 py-0.5 rounded text-gray-700"><Globe className="w-3.5 h-3.5 text-avalanche-red" /> All Chains</span>
        </div>

        {/* Title Section */}
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-2 text-avalanche-red font-bold text-xs tracking-wider uppercase">
                <div className="w-0.5 h-3 bg-avalanche-red"></div>
                Avalanche Ecosystem
                <div className="flex -space-x-1.5 ml-2">
                     <div className="w-5 h-5 rounded-full bg-[#E84142] border-2 border-white ring-1 ring-gray-100"></div>
                     <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white ring-1 ring-gray-100"></div>
                     <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-white ring-1 ring-gray-100"></div>
                     <div className="w-5 h-5 rounded-full bg-purple-500 border-2 border-white ring-1 ring-gray-100"></div>
                     <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-white ring-1 ring-gray-100"></div>
                </div>
                <span className="text-gray-400 font-medium ml-1 lowercase text-[10px] bg-gray-100 px-1.5 py-0.5 rounded-full">+34 more</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-50 rounded-xl shadow-sm border border-red-100">
                    <Globe className="w-8 h-8 text-avalanche-red" strokeWidth={1.5} />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">All Chains</h1>
            </div>
            
            <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
                Real-time activity across all Avalanche L1 chains - blocks, transactions, and cross-chain messages from the entire ecosystem.
            </p>
        </div>

        {/* Big Search Bar */}
        <div className="mb-10 relative group max-w-4xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-avalanche-red transition-colors" />
            </div>
            <input 
                type="text" 
                className="block w-full pl-12 pr-32 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-avalanche-red shadow-sm transition-all text-sm" 
                placeholder="Search by Address, Tx Hash, Block, or Token" 
            />
            <div className="absolute inset-y-0 right-1.5 flex items-center">
                <button className="bg-avalanche-red hover:bg-avalanche-dark text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm">
                    Search
                </button>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-1 mb-8 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
                <div className="p-5 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red shrink-0"><Globe className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Active Chains</div>
                        <div className="text-xl font-bold text-gray-900">43 <span className="text-sm font-normal text-gray-400">/ 81</span></div>
                     </div>
                </div>
                
                <div className="p-5 flex items-start gap-4 hover:bg-gray-50/50 transition-colors border-t sm:border-t-0 sm:border-l border-gray-100 lg:border-l-0">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red shrink-0"><ArrowRightLeft className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Total Transactions</div>
                        <div className="text-xl font-bold text-gray-900">4.19B <span className="text-xs font-normal text-gray-400 block sm:inline">(50.26 TPS)</span></div>
                     </div>
                </div>

                <div className="p-5 flex items-start gap-4 hover:bg-gray-50/50 transition-colors border-t lg:border-t-0">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red shrink-0"><Box className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">Blocks/Sec</div>
                        <div className="text-xl font-bold text-gray-900">4.74</div>
                     </div>
                </div>

                <div className="p-5 flex items-start gap-4 hover:bg-gray-50/50 transition-colors border-t sm:border-t-0 sm:border-l lg:border-l-0 border-gray-100">
                     <div className="p-2.5 rounded-full bg-red-50 text-avalanche-red shrink-0"><Repeat className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-1">ICM/Sec</div>
                        <div className="text-xl font-bold text-gray-900">0.183</div>
                     </div>
                </div>

                <div className="p-5 min-h-[100px] sm:col-span-2 lg:col-span-1 border-t lg:border-t-0">
                     <StatsCard label="Ecosystem Activity (14 Days)" value={null} chartData={ACTIVITY_DATA} className="!p-0 !shadow-none !border-none !bg-transparent h-full" />
                </div>
            </div>
        </div>

        {/* Feeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeedColumn 
                title="Latest Blocks" 
                icon={<Box className="w-4 h-4" />} 
                type="blocks" 
                data={MOCK_BLOCKS} 
            />
            <FeedColumn 
                title="Latest Transactions" 
                icon={<ArrowRightLeft className="w-4 h-4" />} 
                type="transactions" 
                data={MOCK_TXS} 
            />
            <FeedColumn 
                title="ICM Messages" 
                icon={<MessageSquare className="w-4 h-4" />} 
                type="icm" 
                data={MOCK_ICMS} 
            />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;