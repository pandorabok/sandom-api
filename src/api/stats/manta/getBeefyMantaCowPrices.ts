import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowMantaPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('manta', tokenPrices);
};
