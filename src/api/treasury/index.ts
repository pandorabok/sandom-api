import { getAllSamiHoldings, getSamiTreasury, getMarketMakerBalances } from './getTreasury';

export const getTreasury = ctx => {
  const chainTokens = getSamiTreasury();
  if (chainTokens) {
    ctx.status = 200;
    ctx.body = chainTokens;
  } else {
    ctx.status = 500;
    ctx.body = 'Not available yet';
  }
};

export const getMMBal = ctx => {
  const chainTokens = getMarketMakerBalances();
  if (chainTokens) {
    ctx.status = 200;
    ctx.body = chainTokens;
  } else {
    ctx.status = 500;
    ctx.body = 'Not available yet';
  }
};

export const getAllTreasury = ctx => {
  const chainTokens = getAllSamiHoldings();
  if (chainTokens) {
    ctx.status = 200;
    ctx.body = chainTokens;
  } else {
    ctx.status = 500;
    ctx.body = 'Not available yet';
  }
};
