import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Raushan yadav' age= {18} img='https://plus.unsplash.com/premium_photo-1692745874264-0d7e46743c4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Aditya kumar' age= {22} img='https://images.unsplash.com/photo-1698758004450-1f9da080f9b4?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Aditya patel' age= {22} img='https://images.unsplash.com/photo-1780835725722-37f850f4bd0b?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      
    </div>
  )
}

export default App
