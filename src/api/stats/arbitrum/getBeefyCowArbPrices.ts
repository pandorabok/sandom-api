import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowArbPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('arbitrum', tokenPrices);
};
