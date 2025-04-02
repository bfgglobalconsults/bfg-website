'use client'

import { useState, useEffect } from 'react'
import useCounter from '../../hooks/useCounter'



const CounterItem = ({ end, label, duration = 2000 }) => {
  const count = useCounter(end, duration)

  return (
    <div>
      <h3 className="text-4xl text-white text-center font-bold">
        {count}
        +
      </h3>
      <p className="text-white text-center">{label}</p>
    </div>
  )
}

export default CounterItem

