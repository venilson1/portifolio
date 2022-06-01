import React, { useEffect, useState } from 'react'
import spaceBetweenUnderline from '../utils/space'
import { AiOutlineGithub } from 'react-icons/ai'
import api from '../data/api';

export default function Opensource() {

  const [repos, setRepos] = useState();

  useEffect(() => {
    api
      .get("/repos")
      .then((response) => setRepos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, []);

  return (

    <>
      <div className="mt-10">
        <div className="text-center -space-y-3 mb-10">
          <span className="text-5xl font-extrabold">Código aberto</span>
          <p className='underline'>{spaceBetweenUnderline}</p>
        </div>
      </div>

      <div className="lg:mx-auto lg:w-8/12 mt-10 flex justify-center flex-wrap gap-6 my-10">

        {
          repos?.map(({ id, name, html_url, description, topics }) => {
            return (
              <div key={id} className="lg:w-96 border border-gray-700 bg-gray-800 rounded-xl p-4 
              flex flex-col justify-between">
                <div className="flex items-center space-x-2">
                  <AiOutlineGithub />
                  <a href={html_url} target="_blank" rel="noreferrer" className="font-bold text-base cursor-pointer text-blue-400">{name}</a>
                </div>
                <div className="py-1 flex flex-wrap">
                  {
                    topics.map((el, i) => {
                      return <span key={i} className="bg-gray-100 text-gray-800 text-xs mr-2 px-2 rounded dark:bg-gray-700 dark:text-gray-300">{el}</span>
                    })
                  }
                </div>
                <p className="text-gray-400 text-sm text-ellipsis overflow-hidden">{description}</p>
              </div>
            )
          })
        }
      </div>

    </>
  )
}
