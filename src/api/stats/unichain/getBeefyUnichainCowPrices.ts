import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowUnichainPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('unichain', tokenPrices);
};
