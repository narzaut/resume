import React from 'react'
import { NavBar } from './NavBar'
import { HashLink as Link } from 'react-router-hash-link';

export const Header= ({ data }) => {
	
	return(
		<header id="home" className="relative fadeIn main_section  text-white text-shadow " >
			<NavBar data = {data.navBar}/>
			<div className=' flex flex-col justify-start pt-10 lg:pt-20 h-full items-center '>
				<div className='px-10 absolute top-1/2  transform  -translate-y-1/2 fadeIn max-w-3xl'>
					<div>
						<div className='transition' href='https://github.com/narzaut?tab=repositories'>
							<i class="animate-wiggle   fab fa-github text-9xl  cursor-pointer hover:text-green-500 transition-colors transition" />
						</div>
						<h1 className=' text-gray-200 text-5xl pt-6 md:text-6xl lg:text-7xl text-gray-100'>
    					{data.title}
    				</h1>	
						<p className='py-10 text-base md:text-lg lg:text-lg text-gray-300'>
							{data.description}
						</p>
					</div>	
				</div>
				<div className='absolute bottom-10 fadeInDown'>
					<Link to='#products' > <i class=" text-gray-300 fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover:text-green-500 transition-colors" ></i></Link> 
				</div>
			</div>
		</header>
	)
}