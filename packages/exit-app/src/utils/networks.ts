import { getAllRegistryChains, getRegistryChain } from '../chains/registry'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

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
  BERACHAIN = 80094,
  SHAPE = 360,
  SHAPE_SEPOLIA = 11011,
  SEI = 1329,
  SEI_TESTNET = 1328,
}

export const NETWORK_CGW_BASE_URI: Partial<Record<NETWORK, string>> = {
  [NETWORK.MOONBEAM]: 'https://gateway.multisig.moonbeam.network',
  [NETWORK.MOONRIVER]: 'https://gateway.multisig.moonbeam.network',
  [NETWORK.MOONBASE]: 'https://gateway.multisig.moonbeam.network',
  [NETWORK.LINEA]: `https://gateway.safe.linea.build`,
  [NETWORK.LINEA_SEPOLIA]: `https://gateway.safe.linea.build`,
  [NETWORK.PLASMA]: 'https://gateway.safe.protofire.io',
  [NETWORK.PLASMA_TESTNET]: 'https://gateway.safe.protofire.io',
  [NETWORK.ZETACHAIN]: 'https://gateway.safe.zetachain.com',
  [NETWORK.ZETACHAIN_TESTNET]: 'https://gateway.safe.zetachain.com',
  [NETWORK.FLOW_EVM_MAINNET]: 'https://gateway.safe.flow.com',
  [NETWORK.FLOW_EVM_TESTNET]: 'https://gateway.safe.flow.com',
  [NETWORK.BERACHAIN]: 'https://gateway.safe.berachain.com',
  [NETWORK.SHAPE]: IS_PRODUCTION
    ? 'https://gateway.safe.shape.network'
    : 'https://gateway.staging.safe.shape.network/',
  [NETWORK.SHAPE_SEPOLIA]: IS_PRODUCTION
    ? 'https://gateway.safe.shape.network'
    : 'https://gateway.staging.safe.shape.network/',
  [NETWORK.SEI]: IS_PRODUCTION
    ? 'https://gateway.sei-safe.protofire.io'
    : 'https://gateway.staging.sei-safe.protofire.io',
  [NETWORK.SEI_TESTNET]: IS_PRODUCTION
    ? 'https://gateway.sei-safe.protofire.io'
    : 'https://gateway.staging.sei-safe.protofire.io',
}

const DEFAULT_MULTICALL_V3_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11'

export const CUSTOM_MULTICALL_ADDRESSES: Partial<Record<NETWORK, string>> = {
  [NETWORK.LINEA_SEPOLIA]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.PLASMA]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.PLASMA_TESTNET]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.ZETACHAIN]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.ZETACHAIN_TESTNET]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.FLOW_EVM_MAINNET]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.FLOW_EVM_TESTNET]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.BERACHAIN]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.SHAPE]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.SHAPE_SEPOLIA]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.SEI]: DEFAULT_MULTICALL_V3_ADDRESS,
  [NETWORK.SEI_TESTNET]: DEFAULT_MULTICALL_V3_ADDRESS,
}

export function getNetworkRPC(network: NETWORK) {
  return getRegistryChain(network)?.rpc
}

export function getNetworkName(network: NETWORK) {
  return getRegistryChain(network)?.name
}

/**
 * The networks to offer in pickers (Header dropdown, AttachAccount). Replaces the
 * iterated NETWORK_NAME map: sourced from the registry, already gated to the supported
 * NETWORK enum ids by the registry store.
 */
export function getSupportedNetworks(): { chainId: number; name: string }[] {
  return getAllRegistryChains().map((chain) => ({ chainId: chain.chainId, name: chain.name }))
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
