import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowLineaPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('linea', tokenPrices);
};
