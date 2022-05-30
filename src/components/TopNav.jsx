import React, { useState } from 'react';

export default function TopNav() {


  const [isMenu, setIsMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const image = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

  const handlerIsMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 dark:bg-gray-700">
      <div className=" container flex flex-wrap justify-between  items-center mx-auto">
        <div className=' flex'>
          <a href="https://flowbite.com" className="flex items-center">
            <img className="h-8 w-8 rounded-full" src={image} alt="" />
          </a>
        </div>
        <div className="hidden md:flex flex-row space-x-4 text-lg font-medium dark:text-gray-100">
          <ul>
            <li>
              <button className="hover:bg-gray-900 hover:text-blue-300 px-2 py-1 rounded-md">
                Sobre
              </button>
            </li>
          </ul>
          <ul>
            <button className="hover:bg-gray-900 hover:text-blue-300 px-2 py-1 rounded-md">
              Blog
            </button>
          </ul>
          <ul>
            <li>
              <button className="flex hover:bg-gray-900 hover:text-blue-300 px-2 py-1 rounded-md" onClick={() => setDropDown(!dropDown)}>
                <span>Links</span>
                <svg className="h-6 w-6 pt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          </ul>

          {dropDown &&
            <>
              <div className="origin-top-right absolute right-0 top-12 mt-2 w-56 rounded-md 
              shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <button href="#" className="text-gray-100 block px-4 py-2 text-base hover:bg-gray-600 w-full hover:text-blue-300" role="menuitem" tabIndex="-1" id="menu-item-0">Stacks</button>
                  <button href="#" className="text-gray-100 block px-4 py-2 text-base hover:bg-gray-600 w-full hover:text-blue-300" role="menuitem" tabIndex="-1" id="menu-item-1">Open Source</button>
                  <button href="#" className="text-gray-100 block px-4 py-2 text-base hover:bg-gray-600 w-full hover:text-blue-300" role="menuitem" tabIndex="-1" id="menu-item-2">História</button>
                  <button href="#" className="text-gray-100 block px-4 py-2 text-base hover:bg-gray-600 w-full hover:text-blue-300" role="menuitem" tabIndex="-1" id="menu-item-2">Conquistas</button>
                </div>
              </div>
            </>
          }
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => handlerIsMenu()} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {
              !isMenu &&
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

            }
            {
              isMenu &&
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            }
          </button>
        </div>
        {
          isMenu &&
          <div className="justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</span>
              </li>
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</span>
              </li>
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Open Source</span>
              </li>
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</span>
              </li>
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stacks</span>
              </li>
              <li>
                <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">História</span>
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
  )
}