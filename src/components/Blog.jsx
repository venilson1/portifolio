import React from 'react'
import spaceBetweenUnderline from '../utils/space'

export default function Blog() {
  return (
    <div className="mt-10 h-screen">
      <div className="text-center -space-y-3 mb-10">
        <span className="text-5xl font-extrabold">Artigos Publicados</span>
        <p className='underline'>{spaceBetweenUnderline}{spaceBetweenUnderline}</p>
      </div>
    </div>
  )
}
