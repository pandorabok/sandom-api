import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowSeiPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('sei', tokenPrices);
};
