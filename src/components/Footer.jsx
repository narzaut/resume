import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Item } from './Item'
export const Footer = ({ data, aboutData }) => {

	return(
		<footer id="footer" className='border-t-4 border-green-500 text-shadow relative bg-gray py-4 flex flex-col items-center text-gray-300 text-sm'> 
      <div className=' w-28 border-b-4 rounded-lg flex flex-col border-green-400 '>
				<p className='mt-3'></p>
				</div>
			<div className='flex  text-center pb-4  flex-col items-center lg:items-start '>
				<p className='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8'>				
					{aboutData.contactDescription.map((item, index) => {
						return index != 0 && <Item item={ item }/>
					})}
				</p>
			</div>
			<Link className='h-12 w-12 rounded-full bg-gray-500 transition-color hover:bg-green-400 transition absolute  flex items-center justify-center cursor-pointer -top-5   animate-bounce' to='#home'>
				<i class="fas fa-arrow-up text-3xl  " />
			</Link>

			<div>
				 {data.credits.made}
				<span className='text-green-400'> {data.credits.by} </span>
				 {data.copyright}
			</div>
    </footer>
		
	)
}