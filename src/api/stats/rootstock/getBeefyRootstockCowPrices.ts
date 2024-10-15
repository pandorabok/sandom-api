import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowRootstockPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('rootstock', tokenPrices);
};
