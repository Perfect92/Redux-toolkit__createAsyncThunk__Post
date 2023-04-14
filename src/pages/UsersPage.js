import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/UsersSlice'

export default function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.UsersReducer.users)

    useEffect(() => {
        dispatch(fetchUsers());
      }, [])

      console.log(users)
  return (
    <div>
        <h1>Users Page</h1>
         {users.map((user) => (
        <div key={user.id} className='user'>
        <h3 style={{marginTop: '76px'}}>
          Name: {user.name} 
          <br/>
          Username: {user.username}
        </h3>
        <hr style={{width:'400px'}}/>
        <p>
          Phone : {user.phone}
          <br/>
          Email : {user.email}
          <br/>
          Website : {user.website}
          <br/>
          City : {user.address.city}
          <br/>
          Company: {user.company.name}
        </p>
    </div>
      ))}
    </div>
  )
}

