import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowRootstockApys = async () => {
  return await getCowApys('rootstock');
};
