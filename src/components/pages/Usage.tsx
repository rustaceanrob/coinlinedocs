import { Link } from "react-router-dom"
import Container from "../Container"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Fades from "../Fades"
import CLICommand from "../CLICommand"


const Usage = () => {
  return (
    <Container>
        <div className='flex flex-row justify-between items-center w-full pb-5'>
            <Link to="/setup">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <FaArrowLeft color={"#3b82f6"} size={13}/>
                    <h1 className='text-blue-500 font-link'>
                        Setup
                    </h1>
                </div>
            </Link>
            <Link to="/send">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <h1 className='text-blue-500 font-link'>
                        Sending Transactions
                    </h1>
                    <FaArrowRight color={"#3b82f6"} size={13}/>
                </div>
            </Link>
        </div>
        <Fades style='' delay={100}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Wallet Balance
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Sum up all the Native Segwit Unspent Transaction Outputs (UTXOs) assigned to your wallet.
            </p>
            <CLICommand command="coinline balance"/>
        </Fades>
        <Fades style='pt-5' delay={200}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Transaction History
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Reconstruct the entire wallet history. This may take a while if you have a lot of transactions.
            </p>
            <CLICommand command="coinline history"/>
        </Fades>
        <Fades style='pt-5' delay={300}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Receive Bitcoin
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Finds the next unused address in your wallet and displays a BIP-21 URI as a QR code in the terminal along with the address.
            </p>
            <CLICommand command="coinline receive"/>
        </Fades>
        <Fades style='pt-5' delay={400}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Health Check
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Small UTXOs can become annoyingly costly to spend if too many of them accumulate. You can scan to see how many small UTXOs that you have using Coinline. 
            </p>
            <CLICommand command="coinline dust"/>
        </Fades>
        <Fades style='pt-5' delay={400}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Fees
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Get a list of estimated on-chain transaction fees from the configured Electrum server.
            </p>
            <CLICommand command="coinline fees"/>
        </Fades>
        <Fades style='pt-5' delay={400}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Other commands
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Every command has its own help message.
            </p>
            <CLICommand command="coinline <SUBCOMMAND> --help"/>
        </Fades>
        <Fades style='pt-5 w-full' delay={500}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Find a bug?
            </h1>
            <p className='font-link dark:text-white'>
                Create an issue on Github <a href='https://xorizon/coinline/issues/' target='_blank' className='font-bold underline'>here</a>.
            </p>
        </Fades>
    </Container>
  )
}

export default Usage