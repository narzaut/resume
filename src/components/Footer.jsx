import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const Footer = ({ data, aboutData }) => {
	const Item = ({ item }) => {
		return (
			<span className=''><i className={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`}></i>{ item.value }</span>
		)
	}
	return(
		<footer id="footer" className='border-t-4 border-green-500 text-shadow relative bg-gray py-4 flex flex-col items-center text-gray-300 text-sm'> 
      <div className='flex  text-center pb-4  flex-col items-center lg:items-start '>
						<p className='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8'>				
							{aboutData.contactDescription.map(item => {
								return <Item item={ item }/>
							})}
						</p>
					</div>
			<div href='#home' className='   h-12 w-12 rounded-full bg-gray-500 transition-color hover:bg-green-400 transition absolute  flex items-center justify-center cursor-pointer -top-5 animate-bounce'>
			<Link to='#home'><i class="fas fa-arrow-up text-3xl text-white "></i></Link>
			</div>
			<div>{data.credits.made} <span className='text-green-400'>{data.credits.by}</span> {data.copyright}</div>
			
    </footer>
		
	)
}