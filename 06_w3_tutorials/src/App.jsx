import React from 'react'
import Class from './components/Class'
import Map from './components/Map'
import Destructuring from './components/Destructuring'
import UseEffect from './components/UseEffect'
import Component from './components/Component'
import Theme from './components/Theme'
import UseRef from './components/UseRef'
import Experiment1 from './components/Experiment1'
import Recipe from './components/RecipeMenu'

export default function App() {
  return (
    <div>
        <Experiment1 title='CLICK'/>
        <UseRef/>
        <Map/>
        <Class/>
        <Destructuring secondName="Luffy" age={20} country="Japan"/>
        <UseEffect/>
        <Component/>
        <Theme/>
        <Recipe/>
        
    </div>
  )
}
