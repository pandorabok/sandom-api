import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowAvaxPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('avax', tokenPrices);
};
