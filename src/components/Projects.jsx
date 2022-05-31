import React from 'react'
import spaceBetweenUnderline from '../utils/space'

export default function Projects() {

  const image = "https://avatars.githubusercontent.com/u/57969262?v=4"

  return (
    <>
      <div className="mt-8">
        <div className="text-center -space-y-3 mb-10">
          <span className="text-5xl font-extrabold">Projetos</span>
          <p className='underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full mt-10 lg:mx-auto lg:w-9/12">
          <div className={` border border-gray-700 bg-gray-800 rounded-xl p-4 
          flex flex-col justify-between mx-4`}>
            <div className="flex items-center mb-4">
              <img className="w-6 h-6 mr-4 rounded-md" src={image} alt="" />
              <div className="text-gray-100 font-bold text-lg cursor-pointer hover:text-blue-400">Can coffee make you a better developer</div>
            </div>
            <p className="text-gray-100 text-base text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            <div className="py-4 flex flex-wrap">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Default</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
              <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Red</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Green</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Yellow</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">Indigo</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Purple</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">Pink</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
