import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowOPPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('optimism', tokenPrices);
};
