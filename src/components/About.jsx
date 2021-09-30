import React from 'react'

export const About = ({ data }) => {
	
	const Item = ({ item }) => {
		return (
			<span className=''><i className={`${item.icon} pr-6  self-center h-1 w-1 text-green-400`}></i>{ item.value }</span>
		)
	}
	
	return(
		<div id="products" class="text-shadow flex bg-gray text-white flex-row justify-center ">
      <div className=' lg:px-20 container flex flex-col items-center lg:items-start md:text-left md:items-start md:flex-row  py-10'>
				<div className='items-center  lg:w-1/4 flex flex-col  '>
					<img className='rounded-full w-40 h-40 border-b-2  border-green-400 shadow-lg' src={process.env.PUBLIC_URL + '/assets/profilepic.jpg'}/>
				</div>
				
				<div className='text-center lg:text-left pt-12 lg:pt-0 w-3/4  flex flex-col   justify-center md:pt-0 '>
					<div className=' flex items-center justify-center flex-col lg:items-start'>
						<h1 className='rounded font-bold text-2xl text-center md:text-left lg:text-left border-b-2 border-green-400 max-w-max '>
							{data.title}
						</h1>
						<p className='text-sm lg:text-base pt-4 text-gray-300 leading-8'>
							{data.description}
						</p>
					</div>
					<div className='flex   flex-col items-center lg:items-start '>
						<h1 className=' rounded font-bold text-2xl  pt-8 border-b-2 border-green-400 max-w-max'>{data.contactTitle}</h1>
						<p className='flex flex-col pt-4 text-sm lg:text-base  text-gray-300 leading-8'>				
							{data.contactDescription.map(item => {
								return <Item item={ item }/>
							})}
						</p>
					</div>
				</div>
			</div>
    </div>
	)
}
