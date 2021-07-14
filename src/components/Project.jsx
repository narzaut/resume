import React from 'react'

export const Project = ({ name, description, img, link}) => {
	return(
		<a href={link} className='shadow-lg hover:shadow-2xl cursor-pointer mx-6 w-60 md:w-96 bg-gray text-white  max-w-xs text-center hover:text-green-400 my-8 md:my-0'>
			<img className='' src={process.env.PUBLIC_URL + `/assets/portfolio/${img}`}/>
			<div className='p-2 flex items-center justify-center flex-col h-24'>
				<p className=' font-bold text-base border-b-2 border-green-400 text-center text-base'>{name}</p>
				<p className='pt-2 text-sm'>{description}</p>
			</div>		
		</a>
	)
}

