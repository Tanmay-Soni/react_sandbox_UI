import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './Button'
import { Textbox } from './Textbox'
import { TextBlock } from './TextBlock'
import { StoreIterm } from './StoreItem'
import './App.css'

function App() {
  const item1 = {title: "Bat", desc: "Cricket Bat", price: 50}
  const item2 = {title: "Ball", desc: "Cricket Ball", price: 10}
  const item3 = {title: "Wicket", desc: "Cricket Wicket", price: 20}

  const myArray = [item1, item2, item3]

  return (
    <>
      {myArray.map((element, index) => {
        return(
          <StoreIterm item = {element} key = {index}/>
        )
      })}
    </>
  )
}

export default App
