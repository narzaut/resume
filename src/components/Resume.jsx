import React from 'react'
import { Bar } from './Bar'

export const Resume = ({ data }) => {
	return(
		<div className='bg-gray-100 flex  items-center justify-center	'>

		<div id='resume' className='py-20 lg:w-3/5 md:px-8  text-gray-700 flex flex-col items-center justify-center  '>
			<div className='container  flex flex-col  md:flex-row pb-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8 md:text-center'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.education.title}</span>
				</div>
				<div className='w-full px-6   lg:w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>{data.education.unrc.title}</h1>
						<p className='text-gray-700 italic text-base pt-2 font-medium'>{data.education.unrc.header}</p>
						<span className='text-gray-700 font-bold flex items-center justify-center lg:justify-start'><div className='far fa-times-circle mr-2 bg-red-300 text-lg rounded-full '/> <span>{data.education.unrc.status}</span></span>
						<p className='text-gray-600 text-base pt-4'>{data.education.unrc.description} </p>
					</div>
					<div>
						<h1 className='font-bold text-2xl pt-10'>{data.education.itec.title}</h1>
						<p className='text-gray-700 italic text-base font-medium pt-2'>{data.education.itec.header} </p>
						<span className='text-gray-700 font-bold flex items-center justify-center lg:justify-start'><div className='fas fa-sync-alt border-2 p-0.5 text-xs  border-gray-800 rounded-full animate-spin mr-2  bg-blue-300 rounded-full '/><span>{data.education.itec.status}</span> </span>
						<p className='text-gray-600 text-base pt-4'>{data.education.itec.description}</p>
					</div>
				</div>
			</div>
			<div className='container flex flex-col md:flex-row py-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8 md:text-center'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase '>{data.work.title}</span>
				</div>
				<div className='w-full px-6  lg:w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>{data.work.escuchaActiva.title}</h1>
						<span className='flex flex-col   text-gray-700 italic text-base pt-2 font-medium'>
								<span>{data.work.escuchaActiva.header}</span>
								<div className='flex items-center justify-center lg:justify-start'>
									<div className='far fa-check-circle mr-2   text-lg  bg-green-300 rounded-full '/>
									<span className='text-gray-700 font-bold'>{data.work.escuchaActiva.status}</span>
								</div>
							
						</span>
						<p className='text-gray-600 text-base pt-4'>{data.work.escuchaActiva.description}</p>
					</div>	
				</div>
			</div>
			<div className='container flex flex-col md:flex-row pt-10 items-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8 md:text-center'>
					<span className='pb-2 border-b-4 border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.skills.title}</span>
				</div>
				<div className='w-full px-6 lg:w-3/4'>
					<div>
						<h1 className='text-center text-base text-gray-700 pb-10'>{data.skills.description}</h1>
						<ul>
							<Bar icon={'fab fa-html5'} name={'HTML5'} percentage={85} />
							<Bar icon={'fab fa-css3-alt'} name={'CSS'} percentage={70} />
							<Bar icon={'fab fa-react'} name={'REACTJS'} percentage={75} />
							<Bar icon={'fas fa-wind'} name={'TAILWIND CSS'} percentage={75} />
							<Bar icon={'fab fa-node-js'} name={'NODEJS'} percentage={65} />
							<Bar icon={'fas fa-database'} name={'SQL'} percentage={55} />
							<Bar icon={'fab fa-github'} name={'GIT'} percentage={72} />
							<Bar icon={'fab fa-docker'} name={'DOCKER'} percentage={40} />
						</ul>
					</div>
				</div>
			</div>
    </div>
		</div>
	)
}