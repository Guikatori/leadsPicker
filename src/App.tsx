import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonTemplate from './components/ButtonTemplate'
import InputTemplate from './components/InputTemplate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Sunhub" />
        </a>
       </div>
      <h1>Lead Picker</h1>
      <div>
        <InputTemplate name='Login' PlaceHolder='Insira Seu Email'/>
        <InputTemplate name='Senha' PlaceHolder='Insira Sua Senha'/>
        <ButtonTemplate name='Login'/>
      </div>
      <p className="read-the-docs">
        Não Possui uma conta? <a>Registre-se</a>
      </p>
    </>
  )
}

export default App
