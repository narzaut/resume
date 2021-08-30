import React from 'react'
import { NavBar } from './NavBar'

export const Header= () => {
	return(
		<header id="home" className="main_section fadeIn text-white">
			<NavBar />
			<div 
				className='flex flex-col justify-start pt-20 h-full items-center '
			>
				<div className=' max-w-3xl'>
					<div>
						<a href='https://github.com/narzaut?tab=repositories'><i class="fab text-shadow fa-github text-9xl  cursor-pointer hover:text-green-600 transition-colors" ></i></a>
						<h1 className='text-5xl pt-6 md:text-6xl lg:text-7xl text-gray-100 text-shadow'>
    					Ignacio Arzaut
    				</h1>	
						<p className='py-10 text-base md:text-lg lg:text-lg text-gray-300 text-shadow'>
							Un desarrollador de software con mucha motivación para trabajar y seguir aprendiendo.
						</p>
					</div>	
				</div>
				<div className='absolute bottom-10'>
					<a href='#products'> <i class="fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover:text-green-600 transition-colors" ></i></a> 
				</div>
			</div>
			
			
		</header>
	)
}