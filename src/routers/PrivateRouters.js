/* eslint-disable react/prop-types */
import React from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router'

import { authSelector } from '../features/Login/loginSlice'

export const PrivateRouters = ({ path, component, restrict, exact }) => {
    let isAuthenticated = useSelector(authSelector)
    return isAuthenticated ? (
        <Route path={path} component={component} exact={exact} restrict={restrict} />
    ) : (
        <Redirect from="*" to="/login" />
    )
}

PrivateRouters.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    restrict: PropTypes.bool,
    exact: PropTypes.bool,
}

export default PrivateRouters
