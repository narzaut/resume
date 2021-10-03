import React, { useContext, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { GlobalContext } from '../context/GlobalState';

export const NavBar = ({ data }) => {
	const { languageState } = useContext(GlobalContext)
	const [language, setLanguage] = languageState
	const [flagUrl, setFlagUrl] = useState('https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg')
	
	return(
		<nav class="relative glass shadow-lg fadeInDown pt-12 pb-8 lg:py-14 lg:items-center  w-full flex md:flex-row lg:flex-row  justify-around ">
  	  <ul className='text-xs md:text-lg absolute px-4 w-full text-center flex flex-row font-mono  mx-10 max-w-lg justify-around' id='nav' >
				<li >
	      	<Link to='#home'> <div className='border-b-2 border-transparent hover:border-green-400 rounded font-bold text-gray-200 hover:text-green-400 transition uppercase'>{data[0]}</div></Link>
				</li>
	    	<li className=''>
	    	  <Link to='#products'> <div href="#products" className='border-b-2 border-transparent hover:border-green-400 rounded smoothscroll font-bold text-gray-200 hover:text-green-400 transition    uppercase'>{data[1]}</div></Link>
				</li>
				<li>
	    	  <Link to='#resume'> <div className='border-b-2 border-transparent hover:border-green-400 font-bold text-gray-200 rounded hover:text-green-400 transition  uppercase'>{data[2]}</div></Link>
				</li>
				<li>
	    	  <Link to='#footer'> <div className='border-b-2 border-transparent hover:border-green-400 font-bold rounded text-gray-200 hover:text-green-400 transition  uppercase'>{data[3]}</div></Link>
		
				</li>
				
				
	 		</ul>
			 
			<div onClick={() => {
				setLanguage(!language)
				{language == 0 ? setFlagUrl('https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg') : setFlagUrl('https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg')}
				console.log(language)
			}}className='transition fadeIn absolute top-3 right-5  lg:right-0 lg:top-1/2 cursor-pointer transform  lg:-translate-y-1/2 lg:mr-24'><img className='w-6 h-6 lg:h-8 lg:w-8 rounded-full' src={flagUrl}></img>
  				<span class="absolute animate-ping flex bottom-0 rounded-full w-2 h-2 lg:h-2  lgw-2 bg-green-400"></span>
			</div>

  	</nav>
	)
}