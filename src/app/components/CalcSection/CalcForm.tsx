'use client';

import React from 'react';

import { NumberField } from '@/components/NumberField';
import { calcResult } from '@/app/components/CalcSection/utils';
import { CalcResultItem } from '@/app/components/CalcSection/CalcResultItem';

const MIN_PRICE = 5000;
const MAX_PRICE = 500000;
const DEFAULT_PERIOD = 3;
const MAX_PERIOD = 6;
const BASE_MARGIN_PERCENT = 3.3;
// const BASE_MIN_PRICE_PERCENT = 25;

export function CalcForm() {
  const [priceValue, setPriceValue] = React.useState(MIN_PRICE);
  const [initialFeeValue, setInitialFeeValue] = React.useState(0);
  const [periodValue, setPeriodValue] = React.useState(DEFAULT_PERIOD);

  const marginPercent = periodValue * BASE_MARGIN_PERCENT;

  const onPriceChange = (value: number) => {
    setPriceValue(value);

    if (value < initialFeeValue) {
      setInitialFeeValue(value);
    }
  };

  const onPriceBlur = () => {
    if (priceValue < MIN_PRICE) {
      setPriceValue(MIN_PRICE);
      setInitialFeeValue(0);
      return;
    }

    if (priceValue > MAX_PRICE) {
      setPriceValue(MAX_PRICE);
      setInitialFeeValue(MAX_PRICE);
      return;
    }
  };

  const onInitialFeeChange = (value: number) => {
    setInitialFeeValue(value);
  };

  const onPeriodChange = (value: number) => {
    setPeriodValue(value);
  };

  const result = calcResult({ priceValue, initialFeeValue, periodValue, marginPercent });

  return (
    <div>
      <div className="mb-16 grid gap-4 sm:grid-cols-3 sm:gap-6 md:gap-10 lg:mb-24">
        <NumberField
          name="price"
          label="Стоимость товара"
          placeholder="Стоимость товара"
          value={priceValue}
          min={MIN_PRICE}
          max={MAX_PRICE}
          onChange={onPriceChange}
          onBlur={onPriceBlur}
        />

        <NumberField
          name="initialFee"
          label="Первоначальный взнос"
          placeholder="Первоначальный взнос"
          value={initialFeeValue}
          min={0}
          max={priceValue}
          onChange={onInitialFeeChange}
        />

        <NumberField
          name="period"
          label="Срок рассрочки"
          placeholder="Срок рассрочки"
          value={periodValue}
          min={1}
          max={MAX_PERIOD}
          sliderStep={1}
          postfix="мес."
          onChange={onPeriodChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10">
        <CalcResultItem value={result.monthlyFee} label="Ежемесячный плятеж" />
        <CalcResultItem value={result.margin} label="Наценка за рассрочку" />
        <CalcResultItem value={result.totalPrice} label="Итоговая стоимость" />
      </div>
    </div>
  );
}
