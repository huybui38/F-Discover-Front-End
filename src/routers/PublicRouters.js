import React from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router'

import { authSelector } from '../features/Login/loginSlice'

// import Authentication from '../utils/Authentication'

export const PublicRouters = ({ path, component, restrict, exact }) => {
    let isAuthenticated = useSelector(authSelector)
    return <Route path={path} component={component} exact={exact} restrict={restrict} />
}

PublicRouters.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    restrict: PropTypes.bool,
    exact: PropTypes.bool,
}

export default PublicRouters
