import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowModePrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('mode', tokenPrices);
};
