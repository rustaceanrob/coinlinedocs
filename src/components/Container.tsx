import { TRANSITION } from "../constants"

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className={`h-full w-full flex flex-col p-5 ${TRANSITION} md:pl-20 md:pr-20 lg:pl-60 lg:pr-60 2xl:pl-[400px] 2xl:pr-[400px] 4xl:pl-[500px] 4xl:pr-[500px] overflow-scroll scrollbar-hide pb-40`}>
        { children }
    </div>
  )
}

export default Container