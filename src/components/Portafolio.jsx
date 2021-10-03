import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Project } from './Project'
import { useWindowSize } from '../hooks/useWindowSize'
import Carousel, { consts } from 'react-elastic-carousel'
export const Portafolio = ({ data }) => {
  const size = useWindowSize();
	const breakpoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200	, itemsToShow: 4 },
	]

	const arrow = ({ type, onClick, isEdge }) => {
		const pointer = type === consts.PREV ? 
			<div className='press-animation w-12 h-12 p-1 border-4 hover:text-gray-600 hover:border-green-400 transition rounded-full border-gray-600 flex items-center justify-center text-4xl  text-green-400'>
				<i class="fas mr-0.5  fa-angle-double-left"></i>
			</div>
		: 
			<div className='press-animation w-12 h-12 p-1 border-4 hover:text-gray-600 hover:border-green-400 transition rounded-full border-gray-600 flex items-center justify-center text-4xl text-green-400 press-animation'>
			<i class="fas ml-0.5 fa-angle-double-right"></i>
			</div>
		return (
			<button onClick={onClick} disabled={isEdge} className=' '>
				{pointer}
			</button>
		)
	}
	console.log(consts)
	return(
		<div className=' text-gray-700 bg-grey-100 py-10 flex flex-col items-center'>
			<p className='pb-2 w-min border-b-4 flextext-center border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.title}</p>
			<p className='text-gray-600 text-base md:text-xl px-10 pt-10 text-center'>{data.description}</p>
			<div className=' text-shadow w-full lg:py-10 flex flex-col lg:flex-row justify-start items-center'>
				
				<Carousel pagination={false} breakPoints={breakpoints} className='p-4 '  enableSwipe={true} renderArrow={arrow} >
				{
					Object.values(data.projects).map((project) => {
						return (
							<div className='mx-10	'>
								<Project id={project.id} name={project.title} description={project.description} img={project.imgFile} link={project.url} />
							</div>
						)
					})
				}
					</Carousel>
				
			
			</div>

		</div>
	)	
}