import React from 'react'

import { Route, Switch, Redirect } from 'react-router'

import { NotFound } from '../../components/NotFound'

import { FollowingPage } from './pages/FollowingPage'
import { ForYouPage } from './pages/ForYouPage'

export const Explore = () => {
    return (
        <div>
            <Switch>
                <Route exact strict path="/explore/for-you" render={() => <ForYouPage />} />
                <Route exact strict path="/explore/following" render={() => <FollowingPage />} />
                <Route exact strict path="/explore/suggest" render={() => <FollowingPage />} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Explore
