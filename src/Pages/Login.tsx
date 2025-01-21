import sunhub from '../assets/sunhubbr_logo.jpg'
import './Login.css'
import ButtonTemplate from '../components/ButtonTemplate'
import InputTemplate from '../components/InputTemplate'

function LoginPage() {

  return (
    <>
      <div>
          <img src={sunhub} className="logo" alt="Sunhub" />
       </div>
      <h1 className='Title'>Lead Picker</h1>
      <div>
        <div className='inputLine'>
        <InputTemplate name='Login' placeholder='Insira Seu Email' type='email'/>
        <InputTemplate name='Senha' placeholder='Insira Sua Senha' type='password'/>
        </div>
        <ButtonTemplate name='Login'/>
      </div>
      <p className="greyText">
        Não Possui uma conta? <a className='register'>Registre-se</a>
      </p>
    </>
  )
}

export default LoginPage
