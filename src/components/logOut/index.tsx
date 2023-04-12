import React, { useContext } from 'react'
import { userContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'

function LogOut(){

    const navigate = useNavigate();
    const { logOut } = useContext(userContext)

    function handleLogOut() {
        logOut()
        navigate('/')
    }

    return (
        handleLogOut()
    )
}

export default LogOut;