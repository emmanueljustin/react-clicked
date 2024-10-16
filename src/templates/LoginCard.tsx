import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { increment } from '../store/counterSlice'
import Button from "../components/Button"
import { login } from '../store/authSlice'
import { useState } from 'react'

function LoginCard() {
  // ? The state specific
  const count = useSelector((state: RootState) => state.counter.value)

  // ? This is the other way you can use states
  // const auth = useSelector((state: RootState) => state.auth)

  // ? Destructuring to expose different states
  const { username, password } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const [inputUsername, setInputUserName] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleLogin = () => {
    if (inputUsername.trim()) {
      dispatch(
        login({
          username: inputUsername,
          password: inputPassword
        }))
      setInputUserName('')
      setInputPassword('')
    }
  }

  return (
    <>
      <div className="login-container">
        <h1 className="font-bold text-2xl">Welcome {username}/{password} {count} </h1>
        <div className='flex flex-col'>
          <input placeholder='Username' type='text' value={inputUsername} onChange={(e) => setInputUserName(e.target.value)} className="border p-2 rounded mb-2" />
          <input placeholder='Password' type='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} className="border p-2 rounded mb-2" />
        </div>
        <Button class="bg-blue-500 px-3 py-2 rounded-md text-white" onClick={() => dispatch(increment())} >Click</Button>
        <Button class="bg-blue-500 px-3 py-2 rounded-md text-white" onClick={handleLogin} >Login</Button>
      </div>
    </>
  )
}

export default LoginCard
