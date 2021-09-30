import React from 'react'
import { HomePage } from './components/pages/HomePage'
const esLang = require('./lang/spanish.json')
const enLang = require('./lang/english.json')

function App() {
  return (
    <HomePage language={enLang}/>
  )
}

export default App;
