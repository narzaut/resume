import React from 'react'

export const About = ({ data }) => {
	return(
		<div id="products" class="text-shadow flex bg-gray text-white flex-row justify-center">
      <div className='container flex flex-col text-center items-center md:text-left md:items-start md:flex-row lg:px-40 py-20'>
				<div className='w-1/4'>
					<img className='rounded-full' src={process.env.PUBLIC_URL + '/assets/profilepic.jpg'}/>
				</div>
				<div className='w-3/4 flex flex-col pt-12 md:pt-0'>
					<div>
						<h1 className='font-bold text-2xl text-center md:text-left lg:text-left'>
							{data.title}
						</h1>
						<p className='text-base pt-4 text-gray-300 leading-8'>
							{data.description}
						</p>
					</div>
					<div >
						<h1 className='font-bold text-2xl  pt-8'>{data.contactTitle}</h1>
						<p className='flex flex-col pt-4 text-base text-gray-300 leading-8'>				
							{data.contactDescription.map(item => {
								return <span>{item}</span>
							})}
						</p>
					</div>
				</div>
			</div>
    </div>
	)
}
