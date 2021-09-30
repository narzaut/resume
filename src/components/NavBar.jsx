import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const NavBar = () => {
	return(
		<nav class="fadeInDown py-10 w-full bg-red-400 flex md:flex-row lg:flex-row  justify-around bg-transparent">
  	  <ul className='absolute w-full text-center flex font-mono  mx-10 max-w-lg justify-around' id='nav' >
  	    <li>
	      	<Link to='#home'> <div className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>INICIO</div></Link>
				</li>
	    	<li>
	    	  <Link to='#products'> <div href="#products" className='smoothscroll font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>SOBRE MI</div></Link>
				</li>
				<li>
	    	  <Link to='#resume'> <div className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg '>CURRICULUM</div></Link>
				</li>
				<li>
	    	  <Link to='#footer'> <div className='font-bold text-gray-200 hover:text-indigo-500 transition text-base md:text-lg lg:text-lg'>PORTAFOLIO</div></Link>
				</li>
	 		</ul>
			<div className='absolute self-end  '>asd</div>

  	</nav>
	)
}