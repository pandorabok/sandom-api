import { getCowApys } from '../common/getCowVaultApys';

export const getSamiCowBerachainApys = async () => {
  return await getCowApys('berachain');
};
