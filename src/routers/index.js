import React from 'react'

import { Redirect, Route, Switch } from 'react-router'

import { NotFound } from '../components/NotFound'

import { PublicRouters } from './PublicRouters'

const Home = React.lazy(() => import('../features/Home'))
const Login = React.lazy(() => import('../features/Login'))

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
]

export const RouterComponents = () => (
    <Switch>
        <Redirect exact from="/" to="/home" />

        {publicRouters.map((route) => (
            <PublicRouters
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
