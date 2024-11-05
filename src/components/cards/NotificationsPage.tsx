import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotificationsPage() {
  return (
    <>
    <div className="border min-h-64 border-gray-300 rounded-lg relative pt-8 flex flex-col gap-4 text-center bg-slate-100">
      <span className="rounded-full bg-emerald-200 text-green-700 text-sm px-4 py-1 -top-2.5 left-10 absolute">
        Live preview - Email
      </span>
      <div className="mx-2 rounded-sm border-gray-200 border bg-white shadow-inner p-4 text-sm font-sans text-start flex flex-col gap-2 pb-12">
        Hey John Doe,
        <br />
        <br />
        You just made a testimonial to 🥳

        <div className="rounded-lg bg-orange-200 py-6 px-4 font-bold">
            Wow, What a great product!
        </div>

        Retweet to spread the world 👇

        <button className='bg-blue-500 rounded-md shadow-inner text-white font-medium max-w-fit text-base py-1 px-3'>Share on X</button>

        -- Damon from Testimonial

        <hr className='mt-5'/>

        <p className='flex items-center gap-1'>
        💗 Love video testimonials? <Link href='/register' className='text-blue-800 underline'>Sign up</Link>  | <Link href='/affiliate' className='text-blue-800 underline'>Become an affiliate</Link>
        </p>
      </div>
      <div className="flex items-stretch justify-between">
         <button className="bg-purple-600 text-center flex flex-1 rounded-bl-lg text-white font-medium justify-center py-2 px-4">Text</button>
         <button className="text-center flex flex-1 rounded-br-lg text-gray-800 font-medium justify-center py-2 px-4 border-t border-gray-300">Video</button>
      </div>
    </div>
    <button className="border border-gray-300 rounded-md shadow-inner text-gray-800 flex items-center gap-1.5 py-1.5 px-4 my-2 "><ArrowLeft className="text-gray-800 h-5 w-5" /> Go back</button>
    </>
  )
}
