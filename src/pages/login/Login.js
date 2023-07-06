import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import './Login.css'

export default function Dashboard(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isPending} = useLogin()

    const handleSubmit = (e)=>{
        e.preventDefault()
        login(email,password)
        console.log(email, password)
    }

    return(
        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>email: </span>
                <input required type='email' onChange={(e)=> setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>password: </span>
                <input required type='password' onChange={(p)=> setPassword(p.target.value)} value={password} />
            </label>
            
            {!isPending && <button className='btn' onClick={login}>Login</button>}
            {isPending && <button className='btn' disabled>Loading...</button>}
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
