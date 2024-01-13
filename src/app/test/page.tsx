import { Check } from '@/components/icons/Check'
import { Xmark } from '@/components/icons/Xmark'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[300px] bg-white rounded-lg flex flex-col items-center p-4 gap-2'>
        <span className=' text-2xl font-medium'>Expense 1</span>
        <span className=' text-xl font-medium text-red-500'>100$</span>
        <span className=' self-end '>13/1/2024</span>
        <div className='flex flex-col w-full'>
          <span className=' text-2xl font-medium'>Description</span>
          <span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt perferendis doloribus asperiores commodi</span>
        </div>
        <div className='flex w-full justify-between items-center'>
          <span className=' text-2xl font-medium'>Category</span>
          <span>Clothing</span>
        </div>
        <div className='flex w-full justify-center items-center gap-16'>
          <button className=' bg-gray-200 text-green-400 p-2 rounded-lg'><Check/></button>
          <button className=' bg-gray-200 text-red-400 p-2 rounded-lg'><Xmark/></button>
        </div>
      </div>
    </div>
  )
}
