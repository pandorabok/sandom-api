import { getCowApys } from '../common/getCowVaultApys';

export const getSamiGnosisCowApys = async () => {
  return await getCowApys('gnosis');
};
