import { Link } from "react-router-dom"
import Container from "../Container"
import { FaArrowLeft } from "react-icons/fa"
import Fades from "../Fades"
import CLICommand from "../CLICommand"


const Send = () => {
  return (
    <Container>
        <div className='flex flex-row justify-between items-center w-full pb-5'>
            <Link to="/usage">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <FaArrowLeft color={"#3b82f6"} size={13}/>
                    <h1 className='text-blue-500 font-link'>
                        Usage
                    </h1>
                </div>
            </Link>
        </div>
        <Fades style='space-y-5' delay={100}>
            <h1 className='font-link dark:text-white font-semibold text-lg '>
                Sending Transactions
            </h1>
            <p className='font-link dark:text-white'>
                When a wallet is selecting Unspent Transaction Outputs (UTXOs) to fund a transaction, there are many ways to do so. 
                Coinline currently offers two methods of collecting coins, largest first or smallest first. 
                Largest first is an algorithm that sorts your UTXOs in descending order, and uses as little UTXOs as possible in your transaction. 
                Because the amount of UTXOs in the transaction is minimized, the fees for this type of transaction are minimized. 
                It may sound like it is always better to take the largest UTXOs and use them in a transaction, but, over time, this can result in a clutter of small UTXOs that will be expensive to spend.
                To occasionally clean up these small UTXOs, Coinline allows for users to spend their smallest UTXOs in a transaction with the smallest first algorithm.
                The trade off of cleaning up your wallet is that fees may be large. Note that the default is largest first coin selection.
            </p>
            <CLICommand command="coinline send <SIGNER> <ADDRESS> <AMOUNT> <BLOCK> largest"/>
            <CLICommand command="coinline send <SIGNER> <ADDRESS> <AMOUNT> <BLOCK> smallest"/>
            <p className='font-link dark:text-white'>
                The transaction fee also depends on how many blocks in the future until the transaction is included. 
                To select the estimated block in the future for your transaction to be included, you may pick a block 1-25.
            </p>
            <CLICommand command="coinline send <SIGNER> <ADDRESS> <AMOUNT> 5 largest"/>
            <p className='font-link dark:text-white'>
                Finally, the amount you are sending is denominated in Satoshis, the smallest unit of Bitcoin. 
                You may convert between Bitcoin, Satoshis, and dollars with <a href="https://www.kraken.com/learn/satoshi-to-usd-converter" target="_blank" className="font-bold underline">this</a> tool.
            </p>
            <h1 className='font-link dark:text-white font-semibold text-lg'>
                Sending Transactions with Ledger
            </h1>
            <p className='font-link dark:text-white'>
                To send transactions with your Ledger, plug it in, enter your pin, and select the Bitcoin app. Next, run the command.
            </p>
            <CLICommand command="coinline send ledger <ADDRESS> <AMOUNT> <BLOCK> <ALGORITHM?>"/>
            <h1 className='font-link dark:text-white font-semibold text-lg'>
                Sending Transactions with Coldcard or Keystone
            </h1>
            <p className='font-link dark:text-white'>
                The first step to sending coins from your wallet is to construct a Partially Signed Bitcoin Transaction (PSBT) file to give to your device to sign.
                You can do so easily by running the command below. When it is complete, upload the PSBT from your Downloads folder to your MircoSD card.
            </p>
            <CLICommand command="coinline send file <ADDRESS> <AMOUNT> <BLOCK> <ALGORITHM?>"/>
            <p className='font-link dark:text-white'>
                After your device signs the PSBT, you are ready to broadcast it to the network. To do so, run the following command once you upload the signed PSBT to your computer.
            </p>
            <CLICommand command="coinline broadcast /path/to/your/<FILENAME>.psbt"/>
        </Fades>
    </Container>
  )
}

export default Send