import React from 'react'
import TargetHeader from './components/target-header'
import MainGoal from './components/main-goal'
import InfoCard from './components/info-card'

function Page() {
  return (
    <div>
      <TargetHeader />
      <div className='grid w-fit mt-8 gap-3 grid-cols-1 space-y-4 justify-self-center'>
        <InfoCard />
        <MainGoal />
      </div>
    </div>
  )
}

export default Page