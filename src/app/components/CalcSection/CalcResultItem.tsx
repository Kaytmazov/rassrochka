import React from 'react';

type CalcResultItemProps = {
  label: string;
  value: number;
};

export function CalcResultItem({ label, value }: CalcResultItemProps) {
  return (
    <div className="rounded-2xl border p-3 text-center sm:text-left md:rounded-3xl md:p-4 lg:p-6">
      <h2 className="mb-2 text-base font-bold leading-none sm:text-2xl sm:font-extrabold md:mb-2 md:text-3xl lg:mb-4 lg:text-5xl">
        {value} <span className="hidden sm:inline sm:text-xl md:text-3xl">руб.</span>
        <span className="sm:hidden">р.</span>
      </h2>
      <div className="text-xs sm:text-base sm:font-semibold lg:text-lg">{label}</div>
    </div>
  );
}
