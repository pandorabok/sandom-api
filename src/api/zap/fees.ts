import { addressBook } from '../../../packages/address-book/src/address-book';
import { ApiChain } from '../../utils/chain';
import { ProviderId } from './swap/providers';
import { ZERO_ADDRESS } from '../../utils/address';

export type ZapFee = {
  value: number;
  receiver?: string;
};

const DEFAULT_ZAP_FEE = 0.0005;

export const getZapProviderFee = (provider: ProviderId, chain: ApiChain): ZapFee => {
  if (provider === 'odos') {
    // It's static to the odos code config, we can't make it dynamic
    return {
      value: DEFAULT_ZAP_FEE,
    };
  }

  const samiPlatform = addressBook[chain].platforms.samifinance;
  if (!samiPlatform) {
    throw new Error(`No Sami Platform found for chain ${chain}`);
  }

  const receiver = [
    samiPlatform.treasurySwapper,
    samiPlatform.treasuryMultisig,
    samiPlatform.treasury,
  ].find(a => !!a && a !== ZERO_ADDRESS);

  if (!receiver) {
    throw new Error(
      `No fee receiver (treasurySwapper, or treasuryMultisig, or treasury) found for ${provider} on ${chain}`
    );
  }

  return {
    value: DEFAULT_ZAP_FEE,
    receiver: receiver,
  };
};
