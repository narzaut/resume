import React from 'react'
import { Bar } from './Bar'

export const Resume = () => {
	return(
		<div id='resume' className='py-20 bg-gray-100 flex flex-col items-center justify-center divide-y divide-gray-300 '>
			<div className='container px-0 md:px-20 lg:px-80 flex flex-col md:flex-row pb-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-600 font-bold text-2xl '>EDUCACIÓN</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>Universidad Nacional de Río Cuarto</h1>
						<p className='text-gray-600 italic text-base pt-2 font-medium'>Analsita en Computación  <span className='text-gray-700 font-bold'>• Abandonada</span></p>
						<p className='text-gray-500 text-base pt-4'>Curse primer año y regularice las materias Lógica, Introducción a la Algorítmica e Introducción al Algebra. (3/4). De todas maneras decidí dejar porque la dirección que tomaba no era lo que esperaba. </p>
					</div>
					<div>
						<h1 className='font-bold text-2xl pt-10'>Instituto Tecnológico de Río Cuarto</h1>
						<p className='text-gray-600 italic text-base font-medium pt-2'>Tecnicatura Superior en Desarrollo de Software  <span className='text-gray-700 font-bold'>• En curso</span></p>
						<p className='text-gray-500 text-base pt-4'>Me gustó mucho mas la experiencia academica de esta institución, llevo la carrera en buenas condiciones y tambien formo parte del equipo del iTec Lab (Iniciativa de la institución para introducir a los alumnos al mundo laboral).</p>
					</div>
				</div>
			</div>
			<div className='container px-0 md:px-20 lg:px-80 flex flex-col md:flex-row py-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-600 font-bold text-2xl '>TRABAJO</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='font-bold text-2xl'>Plataforma EscuchActiva</h1>
						<p className='text-gray-600 italic text-base pt-2 font-medium'>Front-end Developer  <span className='text-gray-700 font-bold'>• 2021</span></p>
						<p className='text-gray-500 text-base pt-4'>Forme parte del equipo del iTec Lab como programador front-end para el desarrollo de la plataforma de EscuchActiva. Me encargue de trabajar en la landing page, y otras 3 views linkeadas al flujo de la misma. Se logró el diseño del mock-up provisto de manera optima full responsive. No tuve inconveniencias que no pudiera resolver por mis propios medios. </p>
					</div>	
				</div>
			</div>
			<div className='container px-0 md:px-20 lg:px-80 flex flex-col md:flex-row pt-10 items-center text-center md:items-start md:text-left'>
				<div className='md:w-1/4 pb-8'>
					<span className='pb-2 border-b-4 border-green-600 font-bold text-2xl '>SKILLS</span>
				</div>
				<div className='w-3/4'>
					<div>
						<h1 className='text-base text-gray-600 pb-10'>Estas son algunas de las tecnologias/frameworks que manejo. Los porcentajes no son del todo representativos.</h1>
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