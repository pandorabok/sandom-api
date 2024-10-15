import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowLiskPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('lisk', tokenPrices);
};
