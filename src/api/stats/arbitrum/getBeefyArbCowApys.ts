import { getCowApys } from '../common/getCowVaultApys';

export const getSamiArbCowApys = async () => {
  return await getCowApys('arbitrum');
};
