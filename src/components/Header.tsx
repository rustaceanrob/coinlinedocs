import { SiGithub } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import Fades from './Fades'

type Props = {
    npm: string,
    github: string,
}

const Header = ({ npm, github }: Props) => {
  return (
    <div className='flex flex-row justify-between items-center w-full p-5 border-b border-zinc-300 dark:border-zinc-900'>
        <div>
            <h1 className='font-black font-link text-xl text-blue-500'>coinline</h1>
        </div>
        <div className='flex flex-row justify-center items-center space-x-4'>
            <a href={npm} target='_blank'>
                <Fades delay={100} style=''>
                    <FaNpm className="hover:text-red-700 duration-200 dark:text-white" size={32}/>
                </Fades>

            </a>
            <a href={github} target='_blank'>
                <Fades delay={200} style=''>
                <SiGithub className="hover:text-blue-800 duration-200 dark:text-white" size={20}/>
                </Fades>
            </a>
        </div>
    </div>
  )
}

export default Header