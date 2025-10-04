import { useState } from 'react'
import './App.css'
import { LoginView } from './features/login/views'
import { TodoView } from './features/todo/views/TodoView'
function App() {
  const [currentPage, setcurrentPage] = useState('login')
  const [loggedInUser, setloggedInUser] = useState('')

  return (
    <>
      {
        currentPage === 'login' ? <LoginView
          setloggedInUser={setloggedInUser}
          onLogin={() => setcurrentPage('todo')}
        /> : <TodoView loggedInUser={loggedInUser} />
      }
    </>
  )
}

export default App
