import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowBscPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('bsc', tokenPrices);
};
