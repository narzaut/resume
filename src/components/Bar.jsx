import React from 'react'

export const Bar = ({ name, percentage }) => {
	return(
		<li className='py-5'>
		<p className='py-1 text-xl font-semibold'>{name}</p>
		<div className='w-full h-10 rounded bg-gray-300 '>
			<div className='h-full rounded bg-gradient-to-r from-green-300 to-green-500 border-l-4 border-green-600' style={{width:`${percentage}%`}} />
		</div>
	</li>
	)
}