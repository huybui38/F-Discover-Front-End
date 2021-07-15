import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

import { NotFound } from '../../components/NotFound'

import { getLocationList } from '../../services/api/postApi'
import { setLocationList } from './exploreSlice'
import { FollowingPage } from './pages/FollowingPage'
import { ForYouPage } from './pages/ForYouPage'

export const Explore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getLocationList()
            .then((res) => {
                dispatch(setLocationList(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

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
