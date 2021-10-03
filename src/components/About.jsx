import React from 'react'
import { Item } from './Item'

export const About = ({ data }) => {

	return(
		<div id="products" class="text-shadow flex py-8 bg-gray text-white flex-row justify-center ">
      <div className=' lg:px-20 container flex flex-col items-center lg:items-start md:text-left md:items-start md:flex-row  py-10'>
				<div className=' items-center  lg:w-2/6 flex flex-col  '>
					<img className='rounded-full opacity-70 w-40 h-40 border-b-2  border-green-400 shadow-lg' src={process.env.PUBLIC_URL + '/assets/profilepic.jpg'}/>
					<div className='flex  text-center pb-4  flex-col items-center lg:items-start '>
						<p className='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8 lg:leading-8'>				
							{data.contactDescription.map((item, index) => {
								return index != 1 && <Item item={ item }/>
							})}
						</p>
					</div>
				</div>
				
				<div className='lg:pl-8  text-center lg:text-left lg:py-6 pt-8 w-full px-6 lg:px-0 lg:w-4/6  flex flex-col  items-center justify-center md:pt-0 '>
					<div className=' flex items-center justify-center flex-col lg:items-start'>
						<h1 className='uppercase rounded font-bold text-2xl text-center md:text-left lg:text-left border-b-2 border-green-400 max-w-max '>
							{data.title}
						</h1>
						<p className='text-sm lg:text-base pt-4 text-gray-300 leading-8 lg:leading-8'>
							{data.description}
						</p>
					</div>
				</div>
			</div>
    </div>
	)
}
