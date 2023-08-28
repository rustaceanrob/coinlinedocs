import Container from '../Container'
import { Link } from 'react-router-dom'
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa'
import Fades from '../Fades'
import CLICommand from '../CLICommand'


const Installation = () => {
  return (
    <Container>
        <div className='flex flex-row justify-between items-center w-full pb-5'>
            <Link to="/">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <FaArrowLeft color={"#3b82f6"} size={13}/>
                    <h1 className='text-blue-500 font-link'>
                        Home
                    </h1>
                </div>
            </Link>
            <Link to="/setup">
                <div className='flex flex-row items-center justify-center space-x-1'>
                    <h1 className='text-blue-500 font-link'>
                        Setup
                    </h1>
                    <FaArrowRight color={"#3b82f6"} size={13}/>
                </div>
            </Link>
        </div>
        <h1 className='font-link dark:text-white font-semibold text-lg pb-5'>
            Installing Coinline
        </h1>
        <Fades style='' delay={100}>
            <p className='font-link dark:text-white pb-5'>
                Coinline is distributed with <a href='https://www.npmjs.com/' target='_blank' className='underline font-bold'>npm</a>, the Node package manager. As such, Node must be installed on your machine. 
                If you do not already have Node installed, you can download the LTS version <a href='https://nodejs.org/en' target='_blank' className='underline font-bold'>here</a>. 
                Alternatively, Homebrew users can install Node from the terminal.
            </p>
            <CLICommand command='brew install node'/>
        </Fades>
        <Fades style='pt-5' delay={200}>
            <p className='font-link dark:text-white pb-5'>
                To install the CLI, you must install the package globally. Please note that the terminal may appear to hang while installing the package, but the package is being installed.
            </p>
            <CLICommand command='npm install -g coinline_cli'/>
        </Fades>
        <Fades style='pt-5' delay={300}>
            <p className='font-link dark:text-white pb-5'>
                Finally, check that Coinline was installed correctly. Running this command should bring up the help message.
            </p>
            <CLICommand command='coinline --help'/>
        </Fades>
    </Container>
  )
}

export default Installation