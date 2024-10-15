import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowGnosisPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('gnosis', tokenPrices);
};
