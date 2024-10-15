import { addressBook } from '../../../packages/address-book/src/address-book';
import { omitBy } from 'lodash';
import { ZERO_ADDRESS } from '../../utils/address';
import { SamiFinance } from '../../../packages/address-book/src/types/samifinance';

const configsByChain: Record<string, SamiFinance> = {};

export const initConfigService = () => {
  Object.keys(addressBook).forEach(chain => {
    const config = addressBook[chain].platforms.samifinance;
    // Prune ab fields
    configsByChain[chain] = omitBy(
      config,
      value => value === undefined || value === null || value === ZERO_ADDRESS
    );
  });

  console.log('> Configs initialized');
};

export const getAllConfigs = () => {
  return configsByChain;
};

export const getSingleChainConfig = (chain: string) => {
  return configsByChain[chain] ?? {};
};
