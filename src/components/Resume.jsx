import React from 'react'
import { Bar } from './Bar'

export const Resume = ({ data }) => {
	return(
		<div id='resume' className='py-20  lg:px-80 bg-gray-100 text-gray-800 flex flex-col items-center justify-center  '>
			<div className='container  flex flex-col md:flex-row pb-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.education.title}</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>{data.education.unrc.title}</h1>
						<p className='text-gray-700 italic text-base pt-2 font-medium'>{data.education.unrc.header}</p>
						<span className='text-gray-700 font-bold'><span className='text-red-400 '>•</span> {data.education.unrc.status}</span>
						<p className='text-gray-600 text-base pt-4'>{data.education.unrc.description} </p>
					</div>
					<div>
						<h1 className='font-bold text-2xl pt-10'>{data.education.itec.title}</h1>
						<p className='text-gray-700 italic text-base font-medium pt-2'>{data.education.itec.header} </p>
						<span className='text-gray-700 font-bold'><span className='text-green-500 '>•</span> {data.education.itec.status}</span>
						<p className='text-gray-600 text-base pt-4'>{data.education.itec.description}</p>
					</div>
				</div>
			</div>
			<div className='container flex flex-col md:flex-row py-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase '>{data.work.title}</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>{data.work.escuchaActiva.title}</h1>
						<p className='text-gray-700 italic text-base pt-2 font-medium'>{data.work.escuchaActiva.header}  <span className='text-gray-700 font-bold'><span className='text-green-500 '>• </span>{data.work.escuchaActiva.status}</span></p>
						<p className='text-gray-600 text-base pt-4'>{data.work.escuchaActiva.description}</p>
					</div>	
				</div>
			</div>
			<div className='container flex flex-col md:flex-row pt-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.skills.title}</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='text-base text-gray-700 pb-10'>{data.skills.description}</h1>
						<ul>
							<Bar name={'HTML5'} percentage={80} />
							<Bar name={'CSS'} percentage={70} />
							<Bar name={'REACTJS'} percentage={75} />
							<Bar name={'GIT'} percentage={65} />
							<Bar name={'TAILWIND CSS'} percentage={70} />
							<Bar name={'DOCKER'} percentage={33} />
							<Bar name={'MATERIAL UI'} percentage={38} />
						</ul>
					</div>
				</div>
			</div>
    </div>
	)
}