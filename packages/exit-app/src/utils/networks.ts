export enum NETWORK {
  MAINNET = 1,
  OPTIMISM = 10,
  BSC = 56,
  GOERLI = 5,
  XDAI = 100,
  POLYGON = 137,
  ARBITRUMONE = 42161,
  AVALANCHE = 43114,
  LINEA_GOERLI = 59140,
  LINEA_SEPOLIA = 59141,
  LINEA = 59144
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
  LINEA_ETH: { symbol: "ETH", decimals: 18 },
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
  [NETWORK.LINEA_GOERLI]: NATIVE_ASSET.LINEA_ETH,
  [NETWORK.LINEA]: NATIVE_ASSET.LINEA_ETH,
  [NETWORK.LINEA_SEPOLIA]: NATIVE_ASSET.LINEA_ETH,
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
  [NETWORK.LINEA_GOERLI]: 'Linea Testnet',
  [NETWORK.LINEA]: 'Linea',
  [NETWORK.LINEA_SEPOLIA]: 'Linea Sepolia',
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
  [NETWORK.LINEA_GOERLI]: `https://linea-goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [NETWORK.LINEA]: `https://linea-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [NETWORK.LINEA_SEPOLIA]: `https://linea-sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
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
