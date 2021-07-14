import React from 'react'
import { Project } from './Project'

export const Portafolio = () => {
	return(
		<div className='bg-grey-100 p-10 flex flex-col items-center'>
			<p className='pb-2 w-min border-b-4 flextext-center border-green-600 font-bold text-2xl'>PORTAFOLIO</p>
			<p className='text-gray-500 text-base md:text-xl pt-10 text-center'>Estos son algunos de mis proyectos y trabajos.</p>
			<div className='container p-10 flex flex-col md:flex-row items-center justify-center'>
				<Project name={'Diccionario'} description={'Es el integrador de React para una empresa de software.'} img={'diccionario-react.png'} link={'https://narzaut.github.io/diccionario-react/#/'} />
				<Project name={'Aplicación del clima'} description={'Aplicación de portafolio'} img={'weather-app.png'} link={'https://narzaut.github.io/weather-react-app/#/'}/>
				<Project name={'Plataforma EscuchActiva'} description={'Trabajé en equipo como desarrollador front-end'} img={'escuchaactiva.png'} link={'https://github.com/narzaut'} />
				<Project name={'Gestor de expensas'} description={'Aplicación de portafolio'} img={'expense-tracker.png'} link={'https://narzaut.github.io/expense-tracker-react/#/'}/>
			</div>
		</div>
	)	
}