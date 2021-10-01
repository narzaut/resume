import React, { useState, useContext, useEffect } from 'react'
import { Header } from '../Header'
import { About } from '../About'
import { Resume } from '../Resume'
import { Portafolio } from '../Portafolio'
import { Footer } from '../Footer'
import { GlobalContext } from '../../context/GlobalState'
const es = require('../../lang/spanish.json')
const en = require('../../lang/english.json')

export const HomePage = () => {
	const [text, setText] = useState(en)
	const { languageState } = useContext(GlobalContext)
	const [language, setLanguage] = languageState

	useEffect(() => {
		language == true ? setText(es) : setText(en)
	}, [language])

	return(
		<div className='font-mono '>
    	<Header data = {text.header}/>
    	<About data = {text.about}/>
			<Resume data = {text.resume}/>
			<Portafolio data = {text.portfolio}/>
    	<Footer data = {text.footer} aboutData = {text.about}/>
    </div>
	)
}