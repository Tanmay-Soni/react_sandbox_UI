import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './Button'
import { Textbox } from './Textbox'
import { TextBlock } from './TextBlock'
import { StoreItem } from './StoreItem'
import './App.css'

function App() {

  const[showItem, setShowItem] = useState(false)

  const item1 = {title: "Bat", desc: "Cricket Bat", price: 50}

  return (
    <>
      <Button show={showItem} setShow={setShowItem}/>
      {showItem && <StoreItem item={item1} />}
    </>
  )
}

export default App
