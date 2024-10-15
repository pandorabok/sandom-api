import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowMoonbeamPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('moonbeam', tokenPrices);
};
