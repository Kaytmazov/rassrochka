import React from 'react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';

type NumberFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  value: number;
  min: number;
  max: number;
  sliderStep?: number;
  postfix?: string;
  onChange: (value: number) => void;
  onBlur?: () => void;
};

export function NumberField({
  name,
  label,
  placeholder,
  value,
  min,
  max,
  sliderStep = 1000,
  postfix = 'руб.',
  onChange,
  onBlur,
}: NumberFieldProps) {
  return (
    <div>
      <Label className="mb-1 block" htmlFor={name}>
        {label}
      </Label>
      <div className="relative">
        <Input
          type="number"
          id={name}
          className="pr-10 text-right"
          value={value}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={(evt) => onChange(Number(evt.target.value))}
          onBlur={onBlur}
        />
        <span className="absolute inset-y-0 right-2 flex items-center text-foreground">{postfix}</span>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={min}
        max={max}
        step={sliderStep}
        onValueChange={([value]) => onChange(value)}
      />
    </div>
  );
}
