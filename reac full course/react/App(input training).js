import React, {useState} from 'react'
import './styles/app.css'


const App = () => {

const [data, setData] = useState({login: '', password: ''})

const handleClickButton = (e) => {
  e.preventDefault()
  console.log(data)
 }

const handleInputChange = (text, name) => {
  setData({...data, [name]: text.target.value})
 }
  return (
    <div className='container'>
      <form className='form-app'> 
          <label>Введите логин
              <input type='text' placeholder='login' value={data.login} onChange={(text) =>handleInputChange(text, 'login')}/>
          </label>
          <label>Введите пароль
              <input type='text' placeholder='password' value={data.password} onChange={(text) =>handleInputChange(text, 'password')}/>
          </label>
          <button onClick={handleClickButton}>login</button>
      </form>
    </div>
  )


}

export default App