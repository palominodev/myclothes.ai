import { useReducer } from "react"
import { types } from '../auth/types/types'
import { LoginReducer } from "../auth/Reducer/LoginReducer"
import { MyClothesContext } from "./MyClothesContext"

const initialState = {
  logged: false
}

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') )
  return {
    logged: !!user,
    user,
  }
}
export const MyClothesProvider = ({children}) => {
  const [loginState, dispatch] = useReducer(LoginReducer,initialState, init)

  const login = (name = '') => {
    const user = { name }
    const action = {
      types: types.login,
      payload: {
        name,
      }
    }
    localStorage.setItem('user', JSON.stringify(user) )
    dispatch(action)
  }

  const logout = () => {
    const action = {
      types: types.logout
    }
    localStorage.removeItem('user')
    dispatch(action)
  }

    return (
      <MyClothesContext.Provider value={{
        ...loginState,
        login,
        logout
      }}>
        {children}
      </MyClothesContext.Provider>
  )
}
