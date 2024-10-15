import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowPolyPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('polygon', tokenPrices);
};
