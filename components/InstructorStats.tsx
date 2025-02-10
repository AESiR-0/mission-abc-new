import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="flex-1 text-center">
    <div className="mb-1 text-2xl font-semibold text-yellow-400 max-sm:text-xl">
      {number}
    </div>
    <div className="text-sm text-white opacity-90">{label}</div>
  </div>
);

export default function InstructorStats() {
  return (
    <section className="bg-black text-white p-8">
   
    </section>
  )
}