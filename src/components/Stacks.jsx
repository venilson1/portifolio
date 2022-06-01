import React, { useState } from 'react'
import { skills } from '../data/data'
import spaceBetweenUnderline from '../utils/space'

export default function Stacks() {

  const [skillsFiltered, setSkillsFiltered] = useState(skills);

  const handlerSkillsFilter = (type) => {

    if (type === 'all') {
      return setSkillsFiltered(skills)
    } else {
      const skillsByType = skills.filter(el => el.type === type);
      type === 'all' ? setSkillsFiltered(skills) : setSkillsFiltered(skillsByType)
    }
  }

  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <div className="-space-y-3">
            <span className="text-5xl font-extrabold ">Tecnologias</span>
            <p className='underline'>{spaceBetweenUnderline}</p>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="text-xl  lg:w-4/12 px-2">
              <span className="">Uma lista das minhas ferramentas e tecnologias favoritas que uso regularmente.</span>
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-center ">
          <div className=" flex justify-center md:w-6/12 flex-wrap gap-2 md:gap-4">

            <button onClick={() => handlerSkillsFilter('all')} className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-blue-200 focus:text-gray-700  focus:ring-blue-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Tudo
            </button>

            <button onClick={() => handlerSkillsFilter('development')} className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-violet-300 focus:text-gray-700  focus:ring-violet-400 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Desenvolvimento Web
            </button>

            <button onClick={() => handlerSkillsFilter('design')} className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-orange-200 focus:text-gray-700  focus:ring-orange-300 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Designer Web
            </button>

            <button onClick={() => handlerSkillsFilter('devops')} className="bg-gray-800 focus:outline-none 
              focus:ring focus:bg-red-200 focus:text-gray-700  focus:ring-red-300 
              rounded-full px-5 py-1 font-bold text-gray-400">
              Devops
            </button>
          </div>
        </div>

        <div className="lg:mx-auto lg:w-6/12 px-2 flex flex-wrap gap-6 justify-center my-16">
          {
            skillsFiltered.map(({ id, name, description, link, type, image }) => {
              return (

                <div key={id} className="w-72 border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
                  <div className="flex-none flex items-center px-2 bg-slate-600 rounded-lg">
                    <img className="w-8 h-8 rounded-md" src={image} alt={name} />
                  </div>
                  <div className="grow px-2">
                    <p className="text-gray-100 text-base font-bold">{name}</p>
                    <p className="text-gray-100 text-sm mb-1">{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}
