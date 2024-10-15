import { getCowApys } from '../common/getCowVaultApys';

export const getSamizkSyncCowApys = async () => {
  return await getCowApys('zksync');
};
