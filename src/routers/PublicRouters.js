import React from 'react'

import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router'

import Authentication from '../utils/Authentication'

export const PublicRouters = ({ path, component, restrict, exact }) => {
    return Authentication.isLoggedIn() ? (
        <Redirect from="*" to="/explore" />
    ) : (
        <Route path={path} component={component} exact={exact} restrict={restrict} />
    )
}

PublicRouters.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType,
    restrict: PropTypes.bool,
    exact: PropTypes.bool,
}

export default PublicRouters
