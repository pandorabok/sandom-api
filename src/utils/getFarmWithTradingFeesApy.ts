import { compound } from './compound';

export const getFarmWithTradingFeesApy = (
  farmApr: number,
  tradingApr: number | undefined,
  compoundingsPerYear: number,
  t: number,
  shareAfterSamiPerformanceFee: number
) => {
  const farmApy = farmApr
    ? compound(farmApr, compoundingsPerYear, t, shareAfterSamiPerformanceFee)
    : 0;
  return (1 + farmApy) * (1 + Number(tradingApr || 0)) - 1;
};
