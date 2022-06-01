import React from 'react'
import { carrers, institutes, voluntaries } from '../data/data'
import spaceBetweenUnderline from '../utils/space'

export default function About() {

  return (
    <>
      <div className="mt-8">
        <div className="text-center -space-y-3 mb-4 lg:w-6/12 lg:pr-12 lg:mb-4">
          <span className="text-4xl font-extrabold">Carreira</span>
          <p className=' underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full lg:mx-auto lg:w-6/12 px-2">
          {
            carrers.map(({ id, company, occupation, techs, initial, final, image }) => {
              return (
                <div key={id} className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex my-4">
                  <div className="flex-none flex items-center px-2">
                    <img className="w-16 h-16 bg-white rounded-full p-1" src={image} alt="Avatar of Jonathan Reinink" />
                  </div>
                  <div className="grow px-2">
                    <p className="text-gray-100 text-2xl font-bold">{company}</p>
                    <p className="text-gray-100 text-base font-bold mb-1">{occupation}</p>
                    <div className="flex flex-wrap">
                      {
                        techs.map(({ id, tech, badge }) => {
                          return (
                            <span key={id} className={`${badge} 
                            text-xs font-semibold mr-2 px-2 mt-2 rounded
                            `}>{tech}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="hidden md:block flex-none">
                    <span>{initial} - {final}</span>
                  </div>
                </div>
              )
            }).sort((a, b) => {
              return a - b
            })
          }
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center -space-y-3 mb-4 lg:w-6/12 lg:pr-12 lg:mb-4">
          <span className="text-4xl font-extrabold lg:ml-24">Voluntariado</span>
          <p className='ml-24 underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full lg:mx-auto lg:w-6/12 px-2">
          {
            voluntaries.map(({ id, company, occupation, techs, initial, final, image }) => {
              return (
                <div key={id} className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex my-4">
                  <div className="flex-none flex items-center px-2">
                    <img className="w-16 h-16 rounded-full p-1" src={image} alt="Avatar of Jonathan Reinink" />
                  </div>
                  <div className="grow px-2">
                    <p className="text-gray-100 text-2xl font-bold">{company}</p>
                    <p className="text-gray-100 text-base font-bold mb-1">{occupation}</p>
                    <div className="flex flex-wrap">
                      {
                        techs.map(({ id, tech, badge }) => {
                          return (
                            <span key={id} className={`${badge} 
                            text-xs font-semibold mr-2 px-2 mt-2 rounded
                            `}>{tech}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="hidden md:block flex-none">
                    <span>{initial} - {final}</span>
                  </div>
                </div>
              )
            }).sort((a, b) => {
              return a - b
            })
          }
        </div>
      </div>


      <div className="mt-20">
        <div className="text-center -space-y-3 mb-4 lg:w-6/12 lg:pr-12 lg:mb-4">
          <span className="text-4xl font-extrabold">Educação</span>
          <p className=' underline'>{spaceBetweenUnderline}</p>
        </div>
        <div className="w-full lg:mx-auto lg:w-6/12 px-2">
          {
            institutes.map(({ id, name, course, image, initiation, conclusion }) => {
              return (
                <div key={id} className="border border-gray-700 bg-gray-800 rounded-xl p-4 flex">
                  <div className="flex-none flex items-center px-2">
                    <img className="w-16 h-16 bg-white rounded-full p-1" src={image} alt="Avatar of Jonathan Reinink" />
                  </div>
                  <div className="grow px-2">
                    <p className="text-gray-100 text-2xl font-bold">{name}</p>
                    <p className="text-gray-100 text-base font-bold mb-1">{course}</p>
                    <div className="flex flex-wrap">
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Estrutura de dados</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Desenvolvimento web</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2 mt-2 rounded dark:bg-gray-700 dark:text-gray-300">Gerenciamento de projetos</span>
                    </div>
                  </div>
                  <div className="hidden md:block flex-none">
                    <span>{initiation} - {conclusion}</span>
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
