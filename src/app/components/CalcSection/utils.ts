type CalcMonthlyPaymentParams = {
  priceValue: number;
  initialFeeValue: number;
  periodValue: number;
  marginPercent: number;
};

type CalcResult = {
  monthlyFee: number;
  margin: number;
  totalPrice: number;
};

export const calcResult = ({
  priceValue,
  initialFeeValue,
  periodValue,
  marginPercent,
}: CalcMonthlyPaymentParams): CalcResult => {
  const initialDebt = priceValue - initialFeeValue;
  const margin = Math.ceil(initialDebt * (marginPercent / 100));
  const totalPrice = priceValue + margin;
  const monthlyFee = Math.ceil((totalPrice - initialFeeValue) / periodValue);

  return {
    monthlyFee,
    margin,
    totalPrice,
  };
};
