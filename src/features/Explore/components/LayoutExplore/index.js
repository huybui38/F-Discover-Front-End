import React from 'react'

import { Route, Switch, Redirect } from 'react-router'

import Baseline from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'

import { Explore } from '../../../Explore'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    return (
        <Styled.Container>
            <Navbar />
            <Baseline color="#eee" width="100vw" />
            <Styled.FlexWrapper>
                <Styled.SidebarWrapper>
                    <Sidebar />
                </Styled.SidebarWrapper>
                <Styled.MainWrapper>
                    <Switch>
                        <Route exact strict path="/explore/for-you" component={Explore} />
                    </Switch>
                </Styled.MainWrapper>
            </Styled.FlexWrapper>
        </Styled.Container>
    )
}

export default LayoutExplore
