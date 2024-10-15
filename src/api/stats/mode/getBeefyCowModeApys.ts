import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowModeApys = async () => {
  return await getCowApys('mode');
};
