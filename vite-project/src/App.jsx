import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './assets/Button'

function App() {
  function notify(msg){
    alert(msg)
  }

  return (
    <>
      <Button text = {"Sample Text"} color = {"Red"} func = {notify} msg = {"Bttn 1 clicked"}/>
      <Button text = {"Sandbox"} color = {"Blue"} func = {notify} msg = {"Bttn 2 hits different!"}/>
      <Button text = {"Testing"} color = {"Green"}/>
    </>
  )
}

export default App
