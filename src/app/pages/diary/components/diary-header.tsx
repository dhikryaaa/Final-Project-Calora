import React from 'react'
import { format } from 'date-fns'
function DiaryHeader() {
  return (
    <div>
        <div className='text-center mt-5 space-y-2'>
            <div className='text-3xl'>
                Diary
            </div>
            <div className='text-xl'>
                {format(Date.now(), 'MMM dd, yyyy')}
            </div>
        </div>
    </div>
  )
}

export default DiaryHeader