import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowMantlePrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('mantle', tokenPrices);
};
