

import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector((store)=>store.credentialReducer)
    const location = useLocation()

  return  isAuth ? children : <Navigate to={"/login"} state={location.pathname} replace/>
}

export default PrivateRoute
