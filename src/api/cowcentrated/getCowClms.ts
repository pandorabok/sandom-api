import { ApiChain } from '../../utils/chain';
import { CowClm, validateCowClms } from './types';
import optimismPools from '../../data/optimism/samiCowVaults.json';
import basePools from '../../data/base/samiCowVaults.json';
import arbitrumPools from '../../data/arbitrum/samiCowVaults.json';
import moonbeamPools from '../../data/moonbeam/samiCowVaults.json';
import lineaPools from '../../data/linea/samiCowVaults.json';
import polygonPools from '../../data/matic/samiCowVaults.json';
import zksyncPools from '../../data/zksync/samiCowVaults.json';
import mantaPools from '../../data/manta/samiCowVaults.json';
import mantlePools from '../../data/mantle/samiCowVaults.json';
import seiPools from '../../data/sei/samiCowVaults.json';
import bscPools from '../../data/bsc/samiCowVaults.json';
import avaxPools from '../../data/avax/samiCowVaults.json';
import rootstockPools from '../../data/rootstock/samiCowVaults.json';
import scrollPools from '../../data/scroll/samiCowVaults.json';
import modePools from '../../data/mode/samiCowVaults.json';
import liskPools from '../../data/lisk/samiCowVaults.json';
import sonicPools from '../../data/sonic/samiCowVaults.json';
import berachainPools from '../../data/berachain/samiCowVaults.json';
import gnosisPools from '../../data/gnosis/samiCowVaults.json';
import sagaPools from '../../data/saga/samiCowVaults.json';
import hyperevmPools from '../../data/hyperevm/samiCowVaults.json';
const chainToClms: Readonly<Partial<Record<ApiChain, CowClm[]>>> = {
  optimism: validateCowClms(optimismPools),
  base: validateCowClms(basePools),
  arbitrum: validateCowClms(arbitrumPools),
  moonbeam: validateCowClms(moonbeamPools),
  linea: validateCowClms(lineaPools),
  polygon: validateCowClms(polygonPools),
  zksync: validateCowClms(zksyncPools),
  manta: validateCowClms(mantaPools),
  mantle: validateCowClms(mantlePools),
  sei: validateCowClms(seiPools),
  bsc: validateCowClms(bscPools),
  avax: validateCowClms(avaxPools),
  rootstock: validateCowClms(rootstockPools),
  scroll: validateCowClms(scrollPools),
  mode: validateCowClms(modePools),
  lisk: validateCowClms(liskPools),
  sonic: validateCowClms(sonicPools),
  berachain: validateCowClms(berachainPools),
  gnosis: validateCowClms(gnosisPools),
  saga: validateCowClms(sagaPools),
  hyperevm: validateCowClms(hyperevmPools),
};

const chainsWithClms = (Object.keys(chainToClms) as ReadonlyArray<ApiChain>).filter(
  chainId => chainToClms[chainId].length > 0
);

export function getCowClmChains(): ReadonlyArray<ApiChain> {
  return chainsWithClms;
}

export function getCowClms(chainId: ApiChain): ReadonlyArray<CowClm> {
  return chainToClms[chainId] || [];
}

export function getAllCowClmsByChain() {
  return chainToClms;
}
