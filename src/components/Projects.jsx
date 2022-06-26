import React from 'react'
import spaceBetweenUnderline from '../utils/space'
import { projects } from '../data/data'

export default function Projects() {

  const image = "https://avatars.githubusercontent.com/u/57969262?v=4"

  return (
    <>
      <div className="mt-8">
        <div className="text-center -space-y-3 mb-10">
          <span className="text-5xl font-extrabold">Alguns Projetos</span>
          <p className='underline'>{spaceBetweenUnderline}</p>
        </div>


        {
          projects.map(({ id, title, url, description, techs }) => {
            return (
              <>
                <div key={id} className="w-full mt-10 lg:mx-auto lg:w-9/12">
                  <div className={` border border-gray-700 bg-gray-800 rounded-xl p-4 
          flex flex-col justify-between mx-4`}>
                    <div className="flex items-center mb-4">
                      <img className="w-6 h-6 mr-4 rounded-md" src={image} alt="" />
                      <a href={url} target="_blank" rel="noreferrer"
                        className="text-gray-100 font-bold text-lg cursor-pointer hover:text-blue-400">{title}</a>
                    </div>
                    <p className="text-gray-100 text-base text-ellipsis overflow-hidden">{description}</p>
                    <div className="py-4 flex flex-wrap">
                      {
                        techs.map(({ id, tech, badge }) => {
                          return <span key={id} className={`${badge} 
                          text-xs font-semibold mr-2 px-2 mt-2 rounded
                          `}>{tech}</span>
                        })
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }



      </div>
    </>
  )
}
