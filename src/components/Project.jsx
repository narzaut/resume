import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
export const Project =  ({ id, name, description, img, link}) => {
	
	const [projects, setProjects] = useLocalStorage(`projects`, {
		[id]: false
	})

	return(
		<div onClick={() => setProjects({...projects, [id]:true })} href={link} className='m-2 mb-4 relative  hover-press-animation transition shadow-lg hover:shadow-2xl cursor-pointer bg-gray text-white  text-center hover:text-green-400 '>
			<img alt = 'asd' className='' src={process.env.PUBLIC_URL + `/assets/${img}`}/>
			<div className='p-2 bg-gray  flex items-center justify-start flex-col h-32 w-auto '>
				<p className=' font-bold text-base border-b-2 border-green-500 rounded text-center text-base'>{name}</p>
				<p className='pt-2 text-sm'>{description}</p>
			</div>		
			{projects[id] != true && <span class="absolute -bottom-2 -left-2 z-20 animate-ping flex z-20 rounded-full w-6 h-6  bg-green-500"></span>}
		</div>
	)
}

