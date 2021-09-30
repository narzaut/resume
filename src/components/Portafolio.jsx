import React from 'react'
import { Project } from './Project'

export const Portafolio = ({ data }) => {
	return(
		<div className='text-gray-800 bg-grey-100 p-10 flex flex-col items-center'>
			<p className='pb-2 w-min border-b-4 flextext-center border-green-500 rounded-lg font-bold text-2xl uppercase'>{data.title}</p>
			<p className='text-gray-600 text-base md:text-xl pt-10 text-center'>{data.description}</p>
			<div className='text-shadow container p-10 flex flex-col md:flex-row items-center justify-center'>
				<Project name={data.dictionary.title} description={data.dictionary.description} img={'diccionario-react.webp'} link={data.dictionary.url} />
				<Project name={data.weatherApp.title} description={data.weatherApp.description} img={'weather-app.webp'} link={data.weatherApp.url}/>
				<Project name={data.escuchaActiva.title} description={data.escuchaActiva.description} img={'escuchaactiva.webp'} link={data.escuchaActiva.url} />
				<Project name={data.expenseTracker.title} description={data.expenseTracker.description} img={'expense-tracker.webp'} link={data.expenseTracker.url}/>
			</div>
		</div>
	)	
}