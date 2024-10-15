import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowSonicPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('sonic', tokenPrices);
};
