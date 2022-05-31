import React from 'react'
import spaceBetweenUnderline from '../utils/space'

export default function Stacks() {

  const image = "https://avatars.githubusercontent.com/u/57969262?v=4"

  return (
    <>
      <div className="mt-10 h-screen">
        <div className="text-center -space-y-3 mb-10">
          <span className="text-5xl font-extrabold">Tecnologias</span>
          <p className='underline'>{spaceBetweenUnderline}</p>
        </div>

        <div className="my-10 flex justify-center ">
          <div className=" flex justify-center md:w-6/12 flex-wrap gap-2 md:gap-4">
            <button className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-green-100 focus:text-gray-900  focus:ring-blue-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Tudo
            </button>

            <button className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-stone-200 focus:text-gray-900  focus:ring-blue-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Desenvolvimento Web
            </button>

            <button className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-orange-100 focus:text-gray-900  focus:ring-blue-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Designer Web
            </button>

            <button className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-red-100 focus:text-gray-900  focus:ring-blue-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Devops
            </button>
          </div>
        </div>

        <div className="lg:mx-auto lg:w-6/12 px-2 flex flex-wrap gap-4 justify-center">
          <div className="md:w-72 border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-10 h-10 rounded-md" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-base font-bold">Java</p>
              <p className="text-gray-100 text-sm mb-1">Desenvolvimento web</p>
            </div>
          </div>

          <div className="md:w-72 border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-10 h-10 rounded-md" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-base font-bold">Java</p>
              <p className="text-gray-100 text-sm mb-1">Desenvolvimento web</p>
            </div>
          </div>

          <div className="md:w-72 border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-10 h-10 rounded-md" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-base font-bold">Java</p>
              <p className="text-gray-100 text-sm mb-1">Desenvolvimento web</p>
            </div>
          </div>

          <div className="md:w-72 border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-10 h-10 rounded-md" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-base font-bold">Java</p>
              <p className="text-gray-100 text-sm mb-1">Desenvolvimento web</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
