import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowScrollPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('scroll', tokenPrices);
};
