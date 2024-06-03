export enum NETWORK {
  MAINNET = 1,
  OPTIMISM = 10,
  BSC = 56,
  GOERLI = 5,
  XDAI = 100,
  POLYGON = 137,
  ARBITRUMONE = 42161,
  AVALANCHE = 43114,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  MOONBASE = 1287,
}

export interface Coin {
  symbol: string
  decimals: number
}

export const NATIVE_ASSET: Record<string, Coin> = {
  ETH: { symbol: 'ETH', decimals: 18 },
  XDAI: { symbol: 'xDai', decimals: 18 },
  MATIC: { symbol: 'MATIC', decimals: 18 },
  BNB: { symbol: 'BNB', decimals: 18 },
  AVAX: { symbol: 'AVAX', decimals: 18 },
  GLMR: { symbol: 'GLMR', decimals: 18 },
  MOVR: { symbol: 'MOVR', decimals: 18 },
  DEV: { symbol: 'DEV', decimals: 18 },
}

export const NETWORK_NATIVE_ASSET: Record<NETWORK, Coin> = {
  [NETWORK.MAINNET]: NATIVE_ASSET.ETH,
  [NETWORK.GOERLI]: NATIVE_ASSET.ETH,
  [NETWORK.BSC]: NATIVE_ASSET.BNB,
  [NETWORK.XDAI]: NATIVE_ASSET.XDAI,
  [NETWORK.POLYGON]: NATIVE_ASSET.MATIC,
  [NETWORK.OPTIMISM]: NATIVE_ASSET.ETH,
  [NETWORK.ARBITRUMONE]: NATIVE_ASSET.ETH,
  [NETWORK.AVALANCHE]: NATIVE_ASSET.AVAX,
  [NETWORK.MOONBEAM]: NATIVE_ASSET.GLMR,
  [NETWORK.MOONRIVER]: NATIVE_ASSET.MOVR,
  [NETWORK.MOONBASE]: NATIVE_ASSET.DEV,
}

export const NETWORK_NAME: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: 'Mainnet',
  [NETWORK.GOERLI]: 'Goerli',
  [NETWORK.BSC]: 'Binance Smart Chain',
  [NETWORK.XDAI]: 'Gnosis Chain',
  [NETWORK.POLYGON]: 'Polygon',
  [NETWORK.OPTIMISM]: 'Optimism',
  [NETWORK.ARBITRUMONE]: 'Arbitrum One',
  [NETWORK.AVALANCHE]: 'Avalanche',
  [NETWORK.MOONBEAM]: 'Moonbeam',
  [NETWORK.MOONRIVER]: 'Moonriver',
  [NETWORK.MOONBASE]: 'Moonbase',
}

export const NETWORK_DEFAULT_RPC: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  [NETWORK.GOERLI]: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  [NETWORK.BSC]: 'https://bsc-dataseed.binance.org',
  [NETWORK.XDAI]: 'https://rpc.gnosischain.com',
  [NETWORK.POLYGON]: 'https://polygon-rpc.com',
  [NETWORK.OPTIMISM]: 'https://mainnet.optimism.io',
  [NETWORK.ARBITRUMONE]: 'https://arb1.arbitrum.io/rpc',
  [NETWORK.AVALANCHE]: 'https://avalanche-c-chain.publicnode.com',
  [NETWORK.MOONBEAM]: 'https://rpc.api.moonbeam.network',
  [NETWORK.MOONRIVER]: 'https://rpc.api.moonriver.moonbeam.network',
  [NETWORK.MOONBASE]: 'https://rpc.api.moonbase.moonbeam.network',
}

export const NETWORK_BASE_API: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: 'https://safe-client.safe.global',
  [NETWORK.GOERLI]: 'https://safe-client.safe.global',
  [NETWORK.BSC]: 'https://safe-client.safe.global',
  [NETWORK.XDAI]: 'https://safe-client.safe.global',
  [NETWORK.POLYGON]: 'https://safe-client.safe.global',
  [NETWORK.OPTIMISM]: 'https://safe-client.safe.global',
  [NETWORK.ARBITRUMONE]: 'https://safe-client.safe.global',
  [NETWORK.AVALANCHE]: 'https://safe-client.safe.global',
  [NETWORK.MOONBEAM]: 'https://gateway.multisig.moonbeam.network',
  [NETWORK.MOONRIVER]: 'https://gateway.multisig.moonbeam.network',
  [NETWORK.MOONBASE]: 'https://gateway.multisig.moonbeam.network',
}

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
export const NETWORK_INFURA_ID: Record<NETWORK, string | undefined> = {
  [NETWORK.MAINNET]: INFURA_KEY,
  [NETWORK.GOERLI]: INFURA_KEY,
  [NETWORK.BSC]: INFURA_KEY,
  [NETWORK.XDAI]: INFURA_KEY,
  [NETWORK.POLYGON]: INFURA_KEY,
  [NETWORK.OPTIMISM]: INFURA_KEY,
  [NETWORK.ARBITRUMONE]: INFURA_KEY,
  [NETWORK.AVALANCHE]: INFURA_KEY,
  [NETWORK.MOONBEAM]: INFURA_KEY,
  [NETWORK.MOONRIVER]: INFURA_KEY,
  [NETWORK.MOONBASE]: INFURA_KEY,
}

export function getNetworkNativeAsset(network: NETWORK) {
  return NETWORK_NATIVE_ASSET[network]
}

export function getNetworkRPC(network: NETWORK) {
  return NETWORK_DEFAULT_RPC[network]
}

export function getNetworkName(network: NETWORK) {
  return NETWORK_NAME[network]
}


