import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = ({ data }) => {
	return(
		<footer id="footer" className='border-t-4 border-green-500 text-shadow relative bg-gray py-20 flex flex-col items-center text-gray-300 text-sm'> 
      <div href='#home' className='h-12 w-12 rounded-full bg-gray-500 transition-color hover:bg-green-400 transition absolute  flex items-center justify-center cursor-pointer -top-5 animate-bounce'>
			<Link to='#home'><i class="fas fa-arrow-up text-3xl text-white "></i></Link>
			</div>
			<a href='https://github.com/narzaut?tab=repositories'><i class="hover-press-animation  fab fa-github pb-4 text-5xl cursor-pointer hover:text-green-500 transition"></i></a>
			<div>{data.credits.made} <span className='text-green-400'>{data.credits.by}</span></div>
			<div>{data.copyright}</div>
    </footer>
	)
}