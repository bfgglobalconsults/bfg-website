import dynamic from 'next/dynamic'

const CounterItem = dynamic(() => import('./CounterItem'), { ssr: false })

const CounterSection = () => {
  return (
    <div className="bg-[#E26015] flex-justify-center px-3 py-6 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <CounterItem end={899} label="Complete project" />
        <CounterItem end={20} label="Team Member" />
        <CounterItem end={10} label="Winning Award" />
        <CounterItem end={99} label="Clients covered" />
      </div>
    </div>
  )
}

export default CounterSection

