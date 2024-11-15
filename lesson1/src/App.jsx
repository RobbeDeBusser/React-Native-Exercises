import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello';
import Letter from './components/letter';
import Card from './components/color_card';
import MultiplicationTable from './components/multiplication_table';


function App(){
  return (
    <div className='App'>
      <Card color="#FFA737"/>
      <br/>
      <Card color="#FFE312"/>
      <Hello target="KoenMan"/>
      <Hello target="LucasMan"/>

      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>

      <MultiplicationTable number="9" />
      <br />
      <MultiplicationTable number="3" />
    </div>
  )
}


export default App
