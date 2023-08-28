import Container from '../Container'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Fades from '../Fades'
import CLICommand from '../CLICommand'


const Setup = () => {
  return (
    <Container>
        <div className='flex flex-row justify-between items-center w-full pb-5'>
            <Link to="/installation">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <FaArrowLeft color={"#3b82f6"} size={13}/>
                    <h1 className='text-blue-500 font-link'>
                        Installation
                    </h1>
                </div>
            </Link>
            <Link to="/usage">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <h1 className='text-blue-500 font-link'>
                        Usage
                    </h1>
                    <FaArrowRight color={"#3b82f6"} size={13}/>
                </div>
            </Link>
        </div>
        <Fades style='' delay={200}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5 list-disc'>
                Coldcard
            </h1>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pb-5 '>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>1. Insert a MicroSD card into your ColdCard and power it on with a power-only cord.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>2. Log-in to your device and navigate to Advanced/Tools in the main menu.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>3. Navigate to Export Wallet.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>4. Select Generic JSON and export account 0.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>5. Wait for the ColdCard to write the JSON file to the MicroSD.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>6. Take the MicroSD card out of the ColdCard and insert it into this computer.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>7. Run the command below. Note the file path is an absolute path.</h1>
                </li>
            </ul>
            <CLICommand command='coinline set-file coldcard /path/to/your/coldcard-export.json'/>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pt-5 pb-5'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>8. Navigate to the Address Explorer on your Coldcard and find the <span className='font-bold'>bc1q</span> address.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>9. Verify your addresses were properly imported.</h1>
                </li>
            </ul>
            <CLICommand command='coinline addresses'/>
        </Fades>
        <Fades style='pt-5' delay={300}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Ledger
            </h1>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pb-5'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>1. Plug your Ledger into the computer.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>2. Enter your pin and navigate to the Bitcoin app on your Ledger.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>3. Check the Ledger is properly connected.</h1>
                </li>
            </ul>
            <CLICommand command='coinline ledger'/>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pt-5 pb-5'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>4. Begin the import.</h1>
                </li>
            </ul>
            <CLICommand command='coinline set-ledger'/>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pt-5 pb-5'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>5. Follow the prompts on your Ledger.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>6. Verify the device import was successful: compare the addresses on displayed on Ledger Live with the addresses produced by Coinline.</h1>
                </li>
            </ul>
            <CLICommand command='coinline addresses'/>
        </Fades>
        <Fades style='pt-5' delay={400}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Keystone
            </h1>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pb-5 list-disc'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>1. Insert a MicroSD Card into your Keystone and power it on.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>2. Select the menu in the top left corner of your Keystone.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>3. Select the 'Watch-Only Wallet' menu item and set it to 'Generic Wallet'.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>4. Navigate home and select the 3 dots in the top right corner.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>5. Export your wallet as a file and insert the MicroSD card into your computer.</h1>
                </li>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>6. Run the command below. Note the file path is an absolute path.</h1>
                </li>
            </ul>
            <CLICommand command='coinline set-file keystone /path/to/your/p2wpkh-pubkey.txt'/>
            <ul className='flex flex-col justify-start items-start w-full space-y-2 pt-5 pb-5'>
                <li className='flex flex-row justify-center items-center space-x-1'>
                    {/* <FaArrowRight size={8}/> */}
                    <h1 className='text-sm font-link lg:text-lg'>7. Verify the device import was successful by comparing the addresses on your Keystone.</h1>
                </li>
            </ul>
            <CLICommand command='coinline addresses'/>
        </Fades>
        <Fades style='pt-5' delay={500}>
            <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
                Generic
            </h1>
            <p className='font-link dark:text-white pb-5'>
                Coinline also supports any BIP-84 wallet that is capable of signing Partially Signed Bitcoin Transactions (PSBT) files. To import a wallet, provide the <span className='font-bold'>m/</span> 
                wallet fingerprint and <span className='font-bold'>m/84h/0h/0h/</span> extended public key.
            </p>
            <CLICommand command='coinline set <MASTER FINGERPRINT> <BIP84 XPUB>'/>
        </Fades>
    </Container>
  )
}

export default Setup