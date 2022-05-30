import React from 'react'

export default function Home() {

  const image = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

  return (
    <div className="flex justify-center">
      <div className="md:flex py-12 lg:w-1/2 lg:space-x-14 space-y-14">
        <div className="w-full flex justify-center items-center">
          <img className="h-48 w-48 rounded-full" src={image} alt="" />
        </div>
        <div className="flex flex-col md:w-screen px-10 md:px-0">
          <div className="mb-8">
            <div className="text-gray-100 font-semibold text-5xl mb-2">Olá! 👋</div>
            <p className="text-gray-100 text-2xl py-4">Me chamo <span className="font-extrabold">Venilson</span> Santos e sou Desenvolvedor Full Stack.</p>
            <p className="text-gray-100 md:text-xl py-2">Este é meu cantinho digital, fique a vontade para navegar e saber o sobre o que estou trabalhando e aprendendo.  🚀 📚</p>
          </div>
        </div>
      </div>
    </div>
  )
}
