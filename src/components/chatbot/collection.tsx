import { ChevronRight } from 'lucide-react';
import React from 'react'

type Props = {
    heading: string;
    desc: string;
    articles: number;
}

export default function Collection({heading, desc, articles}: Props) {
  return (
    <div className='w-full hover:bg-purple-100 py-3 cursor-pointer'>
        <div className="px-3 flex justify-between w-full items-center">
            <div className="flex flex-col gap-2 5">
                <h4 className='text-base hover:text-purple-700 font-medium text-gray-800'>{heading}</h4>
                <p className='text-[13px] text-gray-500 max-w-xs'>{desc}</p>
                <span className='text-xs text-zinc-400 font-sans'>{articles} articles</span>
            </div>
            <ChevronRight className='h-6 w-6 text-purple-600' />
        </div>
    </div>
  )
}