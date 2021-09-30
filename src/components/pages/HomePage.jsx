import React, { useState } from 'react'
import { Header } from '../Header'
import { About } from '../About'
import { Resume } from '../Resume'
import { Portafolio } from '../Portafolio'
import { Footer } from '../Footer'
export const HomePage = () => {
	const es = require('../../lang/spanish.json')
	const [language, setLanguage] = useState(es)
	return(
		<div className='font-mono '>
    	<Header data = {language.header}/>
    	<About data = {language.about}/>
			<Resume data = {language.resume}/>
			<Portafolio data = {language.portfolio}/>
    	<Footer data = {language.footer}/>
    </div>
	)
}