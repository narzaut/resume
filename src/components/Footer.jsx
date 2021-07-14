import React from 'react'

export const Footer = () => {
	return(
		<footer id="footer" className='relative bg-gray py-20 flex flex-col items-center text-gray-400 text-sm'> 
      <a href='#home' className='h-12 w-12 rounded-full bg-lightgray hover:bg-green-600 transition absolute  flex items-center justify-center cursor-pointer -top-5 animate-bounce'>
				<i class="fas fa-arrow-up text-3xl text-white "></i>
			</a>
			<a href='https://github.com/narzaut?tab=repositories'><i class="fab fa-github pb-4 text-5xl cursor-pointer hover:text-green-600 transition"></i></a>
			<div>Hecho por <span className='text-green-500'>Ignacio Arzaut</span></div>
			<div>Copyright © 2021</div>
    </footer>
	)
}