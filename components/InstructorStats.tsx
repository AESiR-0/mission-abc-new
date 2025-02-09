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

export const InstructorStats = () => {
  const stats = [
    {
      number: "29 Years +",
      label: "of transforming lives"
    },
    {
      number: "76,000 Hrs +",
      label: "Delivered onstage"
    },
    {
      number: "100,000 Admits +",
      label: "to top schools & counting"
    }
  ];

  return (
    <section className="flex gap-10 p-5 mt-10 rounded-xl bg-black bg-opacity-20 max-md:flex-col max-md:gap-5 max-sm:p-4">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          number={stat.number}
          label={stat.label}
        />
      ))}
    </section>
  );
};