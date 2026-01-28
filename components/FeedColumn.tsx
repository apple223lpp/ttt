import React from 'react';
import { ArrowRight, Box, FileText, Link as LinkIcon, HelpCircle, Clock } from 'lucide-react';
import { Block, Transaction, IcmMessage } from '../types';

interface FeedColumnProps {
  title: string;
  icon: React.ReactNode;
  type: 'blocks' | 'transactions' | 'icm';
  data: (Block | Transaction | IcmMessage)[];
}

const FeedColumn: React.FC<FeedColumnProps> = ({ title, icon, type, data }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="px-4 py-3.5 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
        <div className="flex items-center gap-2.5">
           <div className="text-avalanche-red bg-red-50 p-1.5 rounded-md">{icon}</div>
           <h2 className="font-bold text-gray-900 text-sm tracking-tight">{title}</h2>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Live</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {data.map((item, idx) => (
          <div key={idx} className="p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/80 transition-colors group cursor-pointer">
            
            {/* BLOCKS LAYOUT */}
            {type === 'blocks' && (
               <div className="flex gap-3.5">
                   <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-white group-hover:text-avalanche-red group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-gray-200 transition-all duration-300">
                        <Box className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1.5">
                            <span className="text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer transition-colors">{(item as Block).id}</span>
                            <div className="flex items-center gap-1 text-[11px] text-gray-400">
                                <Clock className="w-3 h-3" />
                                {(item as Block).timeAgo}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                             <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium text-white shadow-sm ${(item as Block).validator.iconColor}`}>
                                 <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
                                    <Box className="w-2 h-2" />
                                 </div>
                                 {(item as Block).validator.name}
                             </div>
                             <span className="text-[10px] text-purple-700 font-medium bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100">{(item as Block).txCount} txns</span>
                        </div>
                        <div className="flex justify-end">
                            <span className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{(item as Block).reward}</span>
                        </div>
                   </div>
               </div>
            )}

            {/* TRANSACTIONS LAYOUT */}
            {type === 'transactions' && (
                <div className="flex gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-white group-hover:text-blue-500 group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-gray-200 transition-all duration-300">
                        <FileText className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1.5">
                            <span className="text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer truncate max-w-[120px] transition-colors">{(item as Transaction).hash}</span>
                            <div className="text-right flex items-center gap-1 text-[11px] text-gray-400">
                                 <Clock className="w-3 h-3" />
                                 <span>{(item as Transaction).timeAgo}</span>
                            </div>
                        </div>
                         <div className="flex justify-end mb-2 -mt-1">
                             <span className="text-[10px] font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{(item as Transaction).value}</span>
                         </div>
                        <div className="flex flex-col gap-2">
                            <div className={`flex items-center gap-1.5 text-[10px] font-medium text-blue-700 bg-blue-50 w-fit px-2 py-0.5 rounded border border-blue-100`}>
                                <div className={`w-3 h-3 rounded-full ${(item as Transaction).platform.iconColor}`}></div>
                                {(item as Transaction).platform.name}
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                <span className="text-gray-400">From</span>
                                <span className="text-purple-600 cursor-pointer hover:underline truncate max-w-[80px] font-mono">{(item as Transaction).from}</span>
                                <ArrowRight className="w-3 h-3 mx-0.5 text-gray-300" />
                                <span className="text-gray-400">To</span>
                                <span className="text-purple-600 cursor-pointer hover:underline truncate max-w-[80px] font-mono">{(item as Transaction).to}</span>
                            </div>
                        </div>
                   </div>
                </div>
            )}

            {/* ICM LAYOUT */}
            {type === 'icm' && (
                <div className="flex gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50/50 flex items-center justify-center shrink-0 text-orange-500 group-hover:bg-white group-hover:shadow-sm ring-1 ring-transparent group-hover:ring-gray-200 transition-all duration-300">
                        <LinkIcon className="w-5 h-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1.5">
                            <span className="text-sm font-semibold text-orange-600 hover:text-orange-700 cursor-pointer truncate max-w-[120px] transition-colors">{(item as IcmMessage).id}</span>
                            <div className="text-right flex items-center gap-1 text-[11px] text-gray-400">
                                <Clock className="w-3 h-3" />
                                <span>{(item as IcmMessage).timeAgo}</span>
                            </div>
                        </div>
                         <div className="flex justify-end mb-2 -mt-1">
                             <span className="text-[10px] font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{(item as IcmMessage).value}</span>
                         </div>
                        
                        <div className="flex items-center gap-2 mb-1">
                             {/* Source */}
                             <div className="flex items-center gap-1.5 bg-gray-100 rounded px-2 py-1 max-w-[45%] border border-gray-200">
                                <div className={`w-3.5 h-3.5 rounded-full shrink-0 ${(item as IcmMessage).source.iconColor}`}></div>
                                <span className="text-[10px] font-semibold text-gray-700 truncate">{(item as IcmMessage).source.name}</span>
                             </div>
                             
                             <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />

                             {/* Dest */}
                             <div className={`flex items-center gap-1.5 rounded px-2 py-1 max-w-[45%] border ${(item as IcmMessage).destination.type === 'unknown' ? 'bg-gray-100 border-gray-200 text-gray-500' : 'bg-red-50 border-red-100 text-red-700'}`}>
                                <div className={`w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center ${(item as IcmMessage).destination.type === 'unknown' ? 'bg-gray-300' : 'bg-red-500'}`}>
                                     {(item as IcmMessage).destination.type === 'chain' ? <div className="w-1.5 h-1.5 bg-white rounded-full"></div> : <HelpCircle className="w-2 h-2 text-white" />}
                                </div>
                                <span className="text-[10px] font-semibold truncate">{(item as IcmMessage).destination.name}</span>
                             </div>
                        </div>
                   </div>
                </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;