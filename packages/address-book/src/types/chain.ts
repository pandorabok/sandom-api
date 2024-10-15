import type { SamiFinance } from './samifinance.js';
import type { Token, TokenWithId } from './token.js';

export interface Chain {
  readonly platforms: Record<string, Record<string, string>> & {
    samifinance: SamiFinance;
  };
  readonly tokens: { WNATIVE: Token; FEES: Token } & { [id: string]: Token };
  readonly tokenAddressMap: Record<string, TokenWithId>;
  readonly native: {
    readonly symbol: string;
    readonly oracleId: string;
  };
}

// back-compat
export type { Chain as default };
