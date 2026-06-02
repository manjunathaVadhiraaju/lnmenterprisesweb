/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Users, Calendar, Activity } from 'lucide-react';
import { STATS } from '../data';

export default function Stats() {
  // Mapping dynamic icons to lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-300" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-300" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-pink-300" />;
      case 'Activity': return <Activity className="w-6 h-6 text-amber-300" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <div className="py-12 bg-black/10 border-y border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <div 
              id={`stat-card-${stat.id}`}
              key={stat.id} 
              className="group p-6 rounded-3xl bg-white/10 border border-white/10 hover:border-white/35 hover:bg-white/15 transition-all duration-300 text-center backdrop-blur-lg shadow-lg"
            >
              
              {/* Icon Container with subtle scale hover effect */}
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(stat.iconName)}
              </div>

              {/* Counter Value */}
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center justify-center gap-0.5">
                <span>{stat.value.toLocaleString()}</span>
                <span className="text-amber-400 font-extrabold">{stat.suffix}</span>
              </div>

              {/* Label Title */}
              <span className="block text-xs sm:text-sm text-blue-100 font-semibold mt-1 font-sans">
                {stat.label}
              </span>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
