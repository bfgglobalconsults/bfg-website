import dynamic from 'next/dynamic'

const CounterItem = dynamic(() => import('./CounterItem'), { ssr: false })

const CounterSection = () => {
  return (
    <div className=" flex-justify-center px-3 py-6 rounded-2xl">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex justify-center items-center  w-[45%] lg:w-[40%] h-[200px] border border-3 border-[#F6CAB0] p-2 rounded-lg bg-[#E26015]">
          <CounterItem end={899} label="Projects Completed" />
        </div>
        <div className="flex justify-center items-center w-[45%] lg:w-[40%] h-[200px] border border-3 border-[#F6CAB0] p-2 rounded-lg bg-[#E26015]">
        <CounterItem end={20} label="Team Members" />

        </div>
        <div className="flex justify-center items-center  w-[45%] lg:w-[40%] h-[200px] border border-3 border-[#F6CAB0] p-2 rounded-lg bg-[#E26015]">
        <CounterItem end={10} label="Winning Awards" />

        </div>
        <div className="flex justify-center items-center  w-[45%] lg:w-[40%] h-[200px] border border-3 border-[#F6CAB0] p-2 rounded-lg bg-[#E26015]">
        <CounterItem end={99} label="Clients Covered" />

        </div>
      </div>
    </div>
  )
}

export default CounterSection

