import type { Chain } from '../../types/chain.js';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap.js';
import * as platforms from './platforms/index.js';
import { tokens } from './tokens/tokens.js';

export const mantle = {
  platforms,
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
  native: {
    symbol: 'MNT',
    oracleId: 'MNT',
  },
} as const satisfies Chain;
