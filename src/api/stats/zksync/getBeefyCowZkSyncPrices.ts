import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowZkSyncPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('zksync', tokenPrices);
};
