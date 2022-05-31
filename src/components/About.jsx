import React from 'react'
import spaceBetweenUnderline from '../utils/space'

export default function About() {

  const image = "https://avatars.githubusercontent.com/u/57969262?v=4"

  return (
    <>
      <div className="mt-8">
        <div className="text-center -space-y-3 mb-4 lg:w-6/12 lg:pr-12 lg:mb-4">
          <span className="text-4xl font-extrabold">Carreira</span>
          <p className=' underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full lg:mx-auto lg:w-6/12 px-2">
          <div className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-16 h-16 bg-white rounded-full p-1" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-2xl font-bold">Solução Casting</p>
              <p className="text-gray-100 text-base font-bold mb-1">Programador</p>
              <div className="flex flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-blue-200 dark:text-blue-800">.NET</span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-red-200 dark:text-red-900">Sql Server</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-green-200 dark:text-green-900">VueJs</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-yellow-200 dark:text-yellow-900">Java script</span>
              </div>
            </div>
            <div className="hidden md:block flex-none">
              <span>2020 - 2020</span>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-20">
        <div className="text-center -space-y-3 mb-4 lg:w-6/12 lg:pr-12 lg:mb-4">
          <span className="text-4xl font-extrabold">Educação</span>
          <p className=' underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full lg:mx-auto lg:w-6/12 px-2">
          <div className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
            <div className="flex-none flex items-center px-2">
              <img className="w-16 h-16 bg-white rounded-full p-1" src={image} alt="Avatar of Jonathan Reinink" />
            </div>
            <div className="grow px-2">
              <p className="text-gray-100 text-2xl font-bold">Universidade nove de julho</p>
              <p className="text-gray-100 text-base font-bold mb-1">Tecnólogo em análise e desenvolvimento de sistemas</p>
              <div className="flex flex-wrap">
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Estrutura de dados</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Desenvolvimento web</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Gerenciamento de projetos</span>
              </div>
            </div>
            <div className="hidden md:block flex-none">
              <span>2019 - 2021</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
