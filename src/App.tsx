import sunhub from './assets/sunhubbr_logo.jpg'
import './App.css'
import ButtonTemplate from './components/ButtonTemplate'
import InputTemplate from './components/InputTemplate'
function App() {

  return (
    <>
      <div>
          <img src={sunhub} className="logo" alt="Sunhub" />
       </div>
      <h1 className='Title'>Lead Picker</h1>
      <div>
        <div className='inputLine'>
        <InputTemplate name='Login' type="email" placeholder='Insira Seu Email'/>
        <InputTemplate name='Senha' type="password" placeholder='Insira Sua Senha'/>
        </div>
        <ButtonTemplate name='Login'/>
      </div>
      <p className="greyText">
        Não Possui uma conta? <a className='register'>Registre-se</a>
      </p>
    </>
  )
}

export default App
