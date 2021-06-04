import React from 'react'

import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router'

import Authentication from '../utils/Authentication'

export const PrivateRouters = ({ path, component, restrict, exact }) => {
    return Authentication.isLoggedIn() ? (
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
