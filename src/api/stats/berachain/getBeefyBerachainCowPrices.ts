import { getSamiCowcentratedVaultPrices } from '../common/getSamiCowcentratedVaultPrices';

export const getSamiCowBerachainPrices = async tokenPrices => {
  return await getSamiCowcentratedVaultPrices('berachain', tokenPrices);
};
