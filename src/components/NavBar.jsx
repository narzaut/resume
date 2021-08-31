import React from 'react'

export const NavBar = () => {
	return(
		<nav class="fadeInDown py-10 flex flex-col md:flex-row lg:flex-row items-center justify-center bg-transparent">
  	  <ul className='w-full flex font-mono  mx-10 max-w-lg justify-around' id='nav' >
  	    <li>
	      	<a href="#home" className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>INICIO</a>
				</li>
	    	<li>
	    	  <a href="#products" className='smoothscroll font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>SOBRE MI</a>
				</li>
				<li>
	    	  <a href="#resume" className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>CURRICULUM</a>
				</li>
				<li>
	    	  <a href="#footer" className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg'>PORTAFOLIO</a>
				</li>
	 		</ul>
  	</nav>
	)
}