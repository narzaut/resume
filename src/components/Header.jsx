import React from 'react'
import { NavBar } from './NavBar'
import { HashLink as Link } from 'react-router-hash-link';
export const Header= ({ data }) => {
	return(
		<header id="home" className="main_section fadeIn text-white text-shadow " >
			<NavBar />
			<div 
				className='flex flex-col justify-start pt-10 lg:pt-20 h-full items-center '
			>
				<div className=' max-w-3xl px-10'>
					<div>
						<div className='transition' href='https://github.com/narzaut?tab=repositories'><i class=" hover-press-animation fab fa-github text-9xl  cursor-pointer hover:text-indigo-600 transition-colors transition" ></i></div>
						<h1 className='text-gray-200 text-5xl pt-6 md:text-6xl lg:text-7xl text-gray-100'>
    					{data.title}
    				</h1>	
						<p className='py-10 text-base md:text-lg lg:text-lg text-gray-300'>
							{data.description}
						</p>
					</div>	
				</div>
				<div className='absolute bottom-10'>
				<Link to='#products' > <i class="text-gray-300 fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover:text-indigo-600 transition-colors" ></i></Link> 

				</div>
			</div>
			
			
		</header>
	)
}