import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowSagaApys = async () => {
  return await getCowApys('saga');
};
