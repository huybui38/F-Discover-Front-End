import React from 'react'

import { Route, Switch, Redirect } from 'react-router'

import { NotFound } from '../components/NotFound'

import { Explore } from '../features/Explore'
import { Home } from '../features/Home'
import { Login } from '../features/Login'
import Callback from '../features/Login/pages/CallBack'
import { Profile } from '../features/Profile'
import { PrivateRouters } from './PrivateRouters'
import { PublicRouters } from './PublicRouters'

export const publicRouters = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        restrict: true,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        restrict: true,
    },
    {
        path: '/login/callback',
        name: 'loginCallback',
        component: Callback,
        restrict: true,
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore,
        restrict: true,
    },
]

export const privateRouters = [
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        restrict: true,
    },
]

export const RouterComponents = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/explore" component={Explore} restrict exact />
            {publicRouters.map((route) => (
                <PublicRouters
                    key={route.name}
                    path={route.path}
                    component={route.component}
                    restrict={route.restrict}
                    exact
                />
            ))}

            {privateRouters.map((route) => (
                <PrivateRouters
                    key={route.name}
                    path={route.path}
                    component={route.component}
                    restrict={route.restrict}
                    exact
                />
            ))}
            <Route component={NotFound} />
        </Switch>
    )
}
