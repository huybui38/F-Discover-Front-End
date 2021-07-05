/* eslint-disable react/prop-types */
import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router'

import { authSelector } from '../features/Login/loginSlice'

export const PrivateRouters = ({ component, ...rest }) => {
    let isAuthenticated = useSelector(authSelector)
    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/login',
                        }}
                    />
                ) : (
                    React.createElement(component, props)
                )
            }
        />
    )
}

export default PrivateRouters
