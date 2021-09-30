
import React, { Children, useContext, useState } from 'react'

export const GlobalContext = React.createContext()

export const Provider = (props) => {
	const [language, setLanguage] = useState(true)

	return (
		<GlobalContext.Provider value={{ languageState: [language, setLanguage] }}>
			{props.children}
		</GlobalContext.Provider>
	)
}