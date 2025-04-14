
import { useState } from 'react'
import './App.css'
import { users as defaultUsers, User } from './utils/users'

function App() {

  const [users, setUsers] = useState(defaultUsers);

  const deleteUser = (id: number) => {
    const newUsers: User[] = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <>
      <h2>Keys and List examples</h2>

      <div>
        {users.map((user) =>
          <button
            key={user.id}
            onClick={() => deleteUser(user.id)}>
            {user.name}
          </button>
        )}
      </div>
    </>
  )
}

export default App
