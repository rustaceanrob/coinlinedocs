import { FaArrowRight } from 'react-icons/fa'
import Container from '../Container'
import Fades from '../Fades'
import { Link } from 'react-router-dom'
import CLICommand from '../CLICommand'

const Home = () => {
  return (
    <Container>
        <div className='flex flex-col justify-start items-start'>
            <div className='flex flex-row justify-between items-center w-full pb-5'>
                <h1 className='font-link dark:text-white font-semibold text-lg'>
                    About
                </h1>
                <Link to="/installation">
                    <div className='flex flex-row items-center justify-center space-x-1'>
                        <h1 className='font-link text-blue-500'>
                            Installation
                        </h1>
                        <FaArrowRight color={"#3b82f6"} size={13}/>
                    </div>
                </Link>
            </div>
            <Fades style='' delay={100}>
                <p className='font-link dark:text-white'>
                    Coinline is a commmand line interface (CLI) tool to interact with the <span className='font-extrabold'>Coldcard MK4, Ledger Nano S, and Keystone</span> Bitcoin hardware wallets.
                    The goal of Coinline is to make these hardware wallets accessible in a discrete way, without having to run a Bitcoin node. For the Coldcard MK4 and Keystone, Coinline allows for an airgapped workflow.
                    The CLI is shipped with a number of features, including the ability to scan for small Unspent Transaction Outputs (UTXOs), display QR codes in the terminal to receive Bitcoin to your wallet, and send Bitcoin in one command with your Ledger.
                    The code for this tool is fully open-source and built with the Rust programming language.
                </p>
            </Fades>
            <Fades style='pt-5' delay={200}>
                <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                    Limitations
                </h1>
                <p className='font-link dark:text-white'>
                    First and foremost, this wallet is designed for technical users that have experience with the terminal and a strong understanding of Bitcoin. There is no support for using Legacy or Nested Segwit addresses, and multisignature workflows are not supported (yet). Lastly, Tor routing has not been added (yet).
                </p>
            </Fades>
            <Fades style='pt-5' delay={300}>
                <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                    Details
                </h1>
                <p className='font-link dark:text-white'>
                    Full functionality includes: getting the wallet balance, getting the transaction history, finding the next unused receiving address, sending transactions, scanning for small UTXOs, getting current transaction fees, setting the wallet gap, and getting/setting the wallet configuration file. 
                    To communicate with your hardware, Coinline uses the Partially Signed Bitcoin Transaction (PSBT) BIP-174 specification. 
                </p>
            </Fades>
            <Fades style='pt-5 w-full' delay={400}>
                <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                    Quick Start
                </h1>
                <div className='w-full space-y-5'>
                    <CLICommand command='npm install -g coinline_cli'/>
                    <CLICommand command='coinline --help'/>
                </div>
            </Fades>
        </div>
    </Container>
  )
}

export default Home