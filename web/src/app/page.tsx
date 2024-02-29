"use client"
import { toast } from '../../../dist';
import { useState } from 'react';

export default function Home() {

  const [position, setPosition] = useState('bottom-right')

  const handleClick = (position: string) => {
    setPosition(position)
    toast(
      'Toaster',
      {
        description: 'A universal library for toast notifications'
      }
    )
  }

  return (
    <main className="p-4">
      <section className="mx-auto w-full lg:w-[740px] py-3 flex flex-col items-center gap-2.5">
        <h1 className="text-3xl font-bold">Toaster Universal</h1>
        <p className="text-base font-light">A library to render notifications no matter your framework</p>
      </section>
      <section className="mx-auto w-full lg:w-[740px] py-4 flex justify-center gap-2.5">
        <button className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-[1px] p-2 rounded-md text-sm"
                onClick={() => handleClick('bottom-left')}>Bottom Left
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-[1px] p-2 rounded-md text-sm"
                onClick={() => handleClick('bottom-right')}>Bottom Right
        </button>
      </section>
      <div id="toaster-wrapper" data-position={position}></div>
    </main>
  );
}
