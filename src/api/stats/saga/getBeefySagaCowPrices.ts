import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowSagaPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('saga', tokenPrices);
};
