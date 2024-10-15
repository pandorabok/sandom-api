import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowMantaApys = async () => {
  return await getCowApys('manta');
};
