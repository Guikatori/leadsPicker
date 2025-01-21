import React, { useState, ChangeEvent } from 'react';
import './Register.css'
import ButtonTemplate from '../components/ButtonTemplate'
import InputTemplate from '../components/InputTemplate'
import MaskInput from '../components/inputWithMask'

function RegisterPage() {


const [formData, setFormData] = useState({
  'name': '',
  'email' : '',
  'phone' : '',
  'password' : '',
  'confirmPassword' : '',
});


const handleChange = (e: ChangeEvent<HTMLInputElement>, name : string) => {
  const {value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value,
  }));
};

const handleSubmit = () => {
  if(formData.password !== formData.confirmPassword){
    alert('As Senhas devem Ser Iguais')
  }else{
    console.log('Form data:', formData);
  }
};

  return (
    <>
      <h1 className='Title'>Lead Picker</h1>
      <div>
        <div className='inputLine'>
        <InputTemplate placeholder='Insira Seu Nome Completo' type='text' value={formData.name}  onChange={(e) => handleChange(e, "name")}/>
        <InputTemplate placeholder='Insira Seu Email' type='email' value={formData.email} onChange={(e) => handleChange(e, "email")}/>
        <MaskInput IsPhoneNumber={true} placeholder='Insira Seu Telefone' value={formData.phone} onChange={(e) => handleChange(e, "phone")} ></MaskInput>
        <InputTemplate placeholder='Insire Uma Senha'type="password" value={formData.password} onChange={(e) => handleChange(e, "password")}/>
        <InputTemplate placeholder='Confirme a Senha'type="password" value={formData.confirmPassword} onChange={(e) => handleChange(e, "confirmPassword")}/>
        </div>
        <ButtonTemplate name='Registre-Se' onclick={handleSubmit}/>
      </div>
    </>
  )
}


export default RegisterPage
