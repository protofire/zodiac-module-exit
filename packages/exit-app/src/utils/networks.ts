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
  LINEA_GOERLI = 59140,
  LINEA_SEPOLIA = 59141,
  LINEA = 59144,
  PLASMA = 9745,
  PLASMA_TESTNET = 9746,
  ZETACHAIN_TESTNET = 7001,
  ZETACHAIN = 7000,
  FLOW_EVM_MAINNET = 747,
  FLOW_EVM_TESTNET = 545,
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
  [NETWORK.LINEA_GOERLI]: 'Linea Testnet',
  [NETWORK.LINEA]: 'Linea',
  [NETWORK.LINEA_SEPOLIA]: 'Linea Sepolia',
  [NETWORK.PLASMA_TESTNET]: 'Plasma Testnet',
  [NETWORK.PLASMA]: 'Plasma',
  [NETWORK.ZETACHAIN_TESTNET]: 'ZetaChain Testnet',
  [NETWORK.ZETACHAIN]: 'ZetaChain',
  [NETWORK.FLOW_EVM_MAINNET]: 'Flow EVM Mainnet',
  [NETWORK.FLOW_EVM_TESTNET]: 'Flow EVM Testnet',
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
  [NETWORK.LINEA_GOERLI]: `https://linea-goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [NETWORK.LINEA]: `https://linea-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [NETWORK.LINEA_SEPOLIA]: `https://linea-sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  [NETWORK.PLASMA_TESTNET]: 'https://testnet-rpc.plasma.to',
  [NETWORK.PLASMA]: 'https://rpc.plasma.to',
  [NETWORK.ZETACHAIN_TESTNET]: 'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
  [NETWORK.ZETACHAIN]: 'https://zetachain-evm.blockpi.network/v1/rpc/public',
  [NETWORK.FLOW_EVM_MAINNET]: 'https://mainnet.evm.nodes.onflow.org',
  [NETWORK.FLOW_EVM_TESTNET]: 'https://testnet.evm.nodes.onflow.org',
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
  [NETWORK.LINEA_GOERLI]: 'https://gateway.safe.linea.build',
  [NETWORK.LINEA]: 'https://gateway.safe.linea.build',
  [NETWORK.LINEA_SEPOLIA]: 'https://gateway.safe.linea.build',
  [NETWORK.PLASMA_TESTNET]: 'https://gateway.safe.protofire.io',
  [NETWORK.PLASMA]: 'https://gateway.safe.protofire.io',
  [NETWORK.ZETACHAIN_TESTNET]: 'https://gateway.safe.zetachain.com',
  [NETWORK.ZETACHAIN]: 'https://gateway.safe.zetachain.com',
  [NETWORK.FLOW_EVM_MAINNET]: 'https://gateway.safe.flow.com',
  [NETWORK.FLOW_EVM_TESTNET]: 'https://gateway.safe.flow.com',
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
  [NETWORK.LINEA_GOERLI]: INFURA_KEY,
  [NETWORK.LINEA]: INFURA_KEY,
  [NETWORK.LINEA_SEPOLIA]: INFURA_KEY,
  [NETWORK.PLASMA_TESTNET]: INFURA_KEY,
  [NETWORK.PLASMA]: INFURA_KEY,
  [NETWORK.ZETACHAIN_TESTNET]: INFURA_KEY,
  [NETWORK.ZETACHAIN]: INFURA_KEY,
  [NETWORK.FLOW_EVM_MAINNET]: undefined, // network is not supported by Infura
  [NETWORK.FLOW_EVM_TESTNET]: undefined, // network is not supported by Infura
}

export function getNetworkRPC(network: NETWORK) {
  return NETWORK_DEFAULT_RPC[network]
}

export function getNetworkName(network: NETWORK) {
  return NETWORK_NAME[network]
}


