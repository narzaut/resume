import React from 'react'
import { NavBar } from '../NavBar'
import { MainSection } from '../MainSection'
import { Products } from '../Products'
import { Benefits } from '../Benefits'
import { Mentions } from '../Mentions'
import { Footer } from '../Footer'
export const HomePage = () => {
	return(
		<div>
			<NavBar />
    	<MainSection />
    	<Products />
			<Benefits />
    	<hr />
			<Mentions />
    	<Footer />
    </div>
	)
}