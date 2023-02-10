import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { ReactElement } from 'react'


export const checkUser = () => {
    if (!Cookies.get('jwtKey')) {
        localStorage.removeItem("userId")
        return false
    }
    return true
}


function ProtectedRoute({ children }: { children: ReactElement }) {

    if (!checkUser()) {
        return <Navigate to="/start" replace />
    }

    return children
}

export default ProtectedRoute