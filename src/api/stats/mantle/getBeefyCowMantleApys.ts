import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowMantleApys = async () => {
  return await getCowApys('mantle');
};
