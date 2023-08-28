import { useState } from 'react'
import { GoCopy } from 'react-icons/go'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Fades from './Fades'

type Props = {
    command: string
}

const CLICommand = ({ command }: Props) => {
    const [didCopy, setDidCopy] = useState<boolean>(false)

    const copy = () => {
        setDidCopy(true)
        navigator.clipboard.writeText(command) 
        setTimeout(() => {
            setDidCopy(false)
        }, 2000)
    }

    return (
        <div className='w-full flex flex-row justify-between items-center bg-zinc-100 dark:bg-zinc-950 px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-900'>
            <div className='flex flex-row justify-center items-center dark:text-white font-mono space-x-1'>
                {/* <p className='text-zinc-300 dark:text-zinc-700 text-sm'>$</p> */}
                <p>{command}</p>
            </div>
            <button onClick={() => copy()} className='dark:text-white'>
                {!didCopy ? (
                    <GoCopy className='dark:text-white'/>
                ) : (
                    <Fades style="" delay={100}>
                        <AiOutlineCheckCircle color={"green"}/>
                    </Fades>
                )}
            </button>
        </div>
    )
}

export default CLICommand