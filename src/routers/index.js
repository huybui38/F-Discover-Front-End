import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { NotFound } from '../components/NotFound'
import { LayoutExplore } from '../features/Explore/components/LayoutExplore'

import { Player } from '../features/Demo/Player'
import { Explore } from '../features/Explore'
import { Home } from '../features/Home'
import { Login } from '../features/Login'
import Callback from '../features/Login/pages/CallBack'
import { Profile } from '../features/Profile'
import { PrivateRouters } from './PrivateRouters'
import { PublicRouters } from './PublicRouters'

export const publicRouters = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/login/callback',
        name: 'loginCallback',
        component: Callback,
    },
]

export const privateRouters = [
    {
        path: '/explore',
        name: 'explore',
        component: LayoutExplore,
    },
    {
        path: '/demo/player',
        name: 'demo',
        component: Player,
        restrict: true,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        restrict: true,
    },
]

export const RouterComponents = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Redirect exact from="/" to="/home" />
                <Route exact path="/explore" render={() => <Redirect to="/explore/for-you" />} />
                {privateRouters.map((route) => (
                    <PrivateRouters
                        key={route.name}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                {publicRouters.map((route) => (
                    <PublicRouters
                        key={route.name}
                        path={route.path}
                        component={route.component}
                        exact
                    />
                ))}
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
