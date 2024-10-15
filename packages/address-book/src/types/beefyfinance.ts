export interface SamiFinance {
  devMultisig: string;
  treasuryMultisig: string;
  strategyOwner: string;
  vaultOwner: string;
  tokenManager?: string;
  tokenOwner?: string;
  keeper: string;
  treasurer: string;
  launchpoolOwner: string;
  rewardPool: string;
  treasury: string;
  samiFeeRecipient: string;
  multicall: string;
  samiMaxiStrategy?: string;
  voter: string;
  samiFeeConfig?: string;
  vaultFactory?: string;
  legacyStrategyFactory?: string;
  zap?: string;
  zapTokenManager?: string;
  treasurySwapper?: string;

  /// SAMI Token Contracts
  moosamiLockbox?: string;
  axelarBridge?: string;
  optimismBridge?: string;
  ccipBridge?: string;
  layerZeroBridge?: string;
  moosami4626?: string;

  /// CLM Contracts
  clmFactory?: string;
  clmStrategyFactory?: string;
  clmRewardPoolFactory?: string;
  positionMulticall?: string;

  /// Sami Swapper Contracts
  samiSwapper?: string;
  samiOracle?: string;
  samiOracleChainlink?: string;
  samiOracleChainlinkEthBase?: string;
  samiOracleUniswapV3?: string;
  samiOracleUniswapV2?: string;
  samiOracleSolidly?: string;
  samiOracleAlgebra?: string;
}
