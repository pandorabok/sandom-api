import { getCowApys } from '../common/getCowVaultApys';

export const getSamiOPCowApys = async () => {
  return await getCowApys('optimism');
};
