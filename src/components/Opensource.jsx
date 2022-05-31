import React from 'react'
import spaceBetweenUnderline from '../utils/space'
import { AiOutlineGithub } from 'react-icons/ai'

export default function Opensource() {

  return (
    <>
      <div className="mt-10">
        <div className="text-center -space-y-3 mb-10">
          <span className="text-5xl font-extrabold">Código aberto</span>
          <p className='underline'>{spaceBetweenUnderline}</p>
        </div>
      </div>

      <div className="lg:mx-auto lg:w-8/12 mt-10 flex justify-center flex-wrap gap-2">

        <div className="lg:w-96 border border-gray-700 bg-gray-800 rounded-xl p-4 
          flex flex-col justify-between mx-4">
          <div className="flex items-center space-x-2">
            <AiOutlineGithub />
            <div className="font-bold text-base cursor-pointer text-blue-400">Can coffee make you a better developer</div>
          </div>
          <div className="py-1 flex flex-wrap">
            <span className="bg-gray-100 text-gray-800 text-xs mr-2 px-2 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
          </div>
          <p className="text-gray-400 text-sm text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis.</p>
        </div>
      </div>

    </>
  )
}
