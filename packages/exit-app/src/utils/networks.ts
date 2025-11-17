export enum NETWORK {
  MAINNET = 1,
  OPTIMISM = 10,
  BSC = 56,
  XDAI = 100,
  POLYGON = 137,
  ARBITRUMONE = 42161,
  AVALANCHE = 43114,
  SEPOLIA = 11155111,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  MOONBASE = 1287,
  LINEA = 59144,
  LINEA_SEPOLIA = 59141,
  PLASMA = 9745,
  PLASMA_TESTNET = 9746,
  ZETACHAIN = 7000,
  ZETACHAIN_TESTNET = 7001,
  FLOW_EVM_MAINNET = 747,
  FLOW_EVM_TESTNET = 545,
}

export const NETWORK_NAME: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: 'Mainnet',
  [NETWORK.SEPOLIA]: 'Sepolia',
  [NETWORK.BSC]: 'Binance Smart Chain',
  [NETWORK.XDAI]: 'Gnosis Chain',
  [NETWORK.POLYGON]: 'Polygon',
  [NETWORK.OPTIMISM]: 'Optimism',
  [NETWORK.ARBITRUMONE]: 'Arbitrum One',
  [NETWORK.AVALANCHE]: 'Avalanche',
  [NETWORK.MOONBEAM]: 'Moonbeam',
  [NETWORK.MOONRIVER]: 'Moonriver',
  [NETWORK.MOONBASE]: 'Moonbase',
  [NETWORK.LINEA]: 'Linea',
  [NETWORK.LINEA_SEPOLIA]: 'Linea Sepolia',
  [NETWORK.PLASMA]: 'Plasma',
  [NETWORK.PLASMA_TESTNET]: 'Plasma Testnet',
  [NETWORK.ZETACHAIN]: 'ZetaChain',
  [NETWORK.ZETACHAIN_TESTNET]: 'ZetaChain Testnet',
  [NETWORK.FLOW_EVM_MAINNET]: 'Flow EVM Mainnet',
  [NETWORK.FLOW_EVM_TESTNET]: 'Flow EVM Testnet',
}

export const NETWORK_DEFAULT_RPC: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: 'https://eth.llamarpc.com',
  [NETWORK.SEPOLIA]: 'https://ethereum-sepolia-rpc.publicnode.com',
  [NETWORK.BSC]: 'https://bsc-rpc.publicnode.com', 
  [NETWORK.XDAI]: 'https://gnosis.publicnode.com', 
  [NETWORK.POLYGON]: 'https://polygon-rpc.com',
  [NETWORK.OPTIMISM]: 'https://mainnet.optimism.io',
  [NETWORK.ARBITRUMONE]: 'https://arb1.arbitrum.io/rpc',
  [NETWORK.AVALANCHE]: 'https://avalanche.publicnode.com',
  [NETWORK.MOONBEAM]: 'https://rpc.api.moonbeam.network',
  [NETWORK.MOONRIVER]: 'https://rpc.api.moonriver.moonbeam.network',
  [NETWORK.MOONBASE]: 'https://rpc.api.moonbase.moonbeam.network',
  [NETWORK.LINEA]: `https://rpc.linea.build`,
  [NETWORK.LINEA_SEPOLIA]: `https://rpc.sepolia.linea.build`,
  [NETWORK.PLASMA]: 'https://rpc.plasma.to',
  [NETWORK.PLASMA_TESTNET]: 'https://testnet-rpc.plasma.to',
  [NETWORK.ZETACHAIN]: 'https://zetachain-mainnet.g.allthatnode.com/archive/evm',
  [NETWORK.ZETACHAIN_TESTNET]: 'https://zetachain-athens.g.allthatnode.com/archive/evm',
  [NETWORK.FLOW_EVM_MAINNET]: 'https://mainnet.evm.nodes.onflow.org',
  [NETWORK.FLOW_EVM_TESTNET]: 'https://testnet.evm.nodes.onflow.org',
}

export function getNetworkRPC(network: NETWORK) {
  return NETWORK_DEFAULT_RPC[network]
}

export function getNetworkName(network: NETWORK) {
  return NETWORK_NAME[network]
}

/* comment out unused code
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
}

export const NETWORK_NATIVE_ASSET: Record<NETWORK, Coin> = {
  [NETWORK.MAINNET]: NATIVE_ASSET.ETH,
  [NETWORK.SEPOLIA]: NATIVE_ASSET.ETH,
  [NETWORK.BSC]: NATIVE_ASSET.BNB,
  [NETWORK.XDAI]: NATIVE_ASSET.XDAI,
  [NETWORK.POLYGON]: NATIVE_ASSET.MATIC,
  [NETWORK.OPTIMISM]: NATIVE_ASSET.ETH,
  [NETWORK.ARBITRUMONE]: NATIVE_ASSET.ETH,
  [NETWORK.AVALANCHE]: NATIVE_ASSET.AVAX,
}

export function getNetworkNativeAsset(network: NETWORK) {
  return NETWORK_NATIVE_ASSET[network]
}
*/
