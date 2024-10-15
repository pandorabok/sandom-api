import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowHyperevmPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('hyperevm', tokenPrices);
};
