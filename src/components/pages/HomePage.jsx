import React from 'react'
import { Header } from '../Header'
import { About } from '../About'
import { Resume } from '../Resume'
import { Portafolio } from '../Portafolio'
import { Footer } from '../Footer'

export const HomePage = () => {
	return(
		<div className='font-mono '>
    	<Header />
    	<About />
			<Resume />
			<Portafolio />
    	<Footer />
    </div>
	)
}