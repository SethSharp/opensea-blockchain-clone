import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks"

// ChainId 4 represents the Rinkeby network
const supportedChainIds = [4]
// injected connector is web3 connection method used by Metamask
const connectors = {
  injected:{},
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  ) 
}

export default MyApp
