import React from 'react'
import { format } from 'date-fns'
import { getSessionServer } from '@/lib/get-session-server'

async function DashboardHeader() {
  const session = await getSessionServer()


  return (
    <>
      <div className='p-4'>
        <div className='text-3xl'>
          {'Welcome Back, ' + session?.user.username }
        </div>
        <div className='text-xl'>
          {format(Date.now(), 'MMM dd, yyyy')}
        </div>
      </div>
    </>
  )
}

export default DashboardHeader