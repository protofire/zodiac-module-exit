import { getRegistryChain } from '../chains/registry'

// Explorer metadata is sourced from the Chain Registry (via getRegistryChain). This app
// reads balances/transactions through the Client Gateway, so this accessor is EXPLORER
// ONLY — it intentionally does NOT surface a registry transactionService. The explorer
// API key is the shared Etherscan V2 key (exit divergence).
const REACT_APP_ETHERSCAN_V2_KEY = process.env.REACT_APP_ETHERSCAN_V2_KEY

export const getNetworkExplorerInfo = (chainId: number) => {
  const chain = getRegistryChain(chainId)
  if (!chain) return
  return {
    name: chain.explorer.name,
    url: chain.explorer.url,
    apiUrl: chain.explorer.apiUrl,
    apiKey: REACT_APP_ETHERSCAN_V2_KEY,
    safeUrl: chain.safeUrl,
    verifyUrl: chain.verifyContractUrl,
  }
}
