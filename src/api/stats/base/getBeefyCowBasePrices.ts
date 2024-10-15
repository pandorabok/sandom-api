import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowBasePrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('base', tokenPrices);
};
