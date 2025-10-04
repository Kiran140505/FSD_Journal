import { useEffect, useState } from "react"

const LoginView = ({ onLogin, setloggedInUser }) => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [isAuthenticated, setisAuthenticated] = useState(false)

    useEffect(() => {
        if (userName === 'admin' && password === 'admin1') {
            setisAuthenticated(true)
        } else {
            setisAuthenticated(false)
        }
    }, [userName, password])

    return (
        <div>
            <h1>Login to To do list</h1>
            <input
                value={userName}
                onChange={(e) => { setuserName(e.target.value); setloggedInUser(e.target.value) }}
                type="text"
                placeholder='Username'
            />
            <input
                value={password}
                type="password"
                onChange={(e) => { setpassword(e.target.value) }}
                placeholder='Password'
            />
            {
                isAuthenticated ? <button onClick={onLogin}>Login</button> : ''
            }
            {/* {
                isAuthenticated && <button onClick={onLogin}>Login</button>
            } */}
        </div>
    )
}

export { LoginView }