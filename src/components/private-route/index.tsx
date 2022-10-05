import {useAppSelector} from "../../app/hooks";
import { useNavigate } from "react-router-dom"
import React, {useEffect} from 'react'

const PrivateRoute = ({children} : {children: React.ReactNode}) => {
    const isLoggedIn: boolean = useAppSelector(state => state.auth.isLoggedIn)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn, navigate])

    return <>{children}</>;
};

export default PrivateRoute;