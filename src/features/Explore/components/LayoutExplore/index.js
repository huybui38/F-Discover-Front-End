import React from 'react'

import { Route, Switch, Redirect } from 'react-router'

import { Navbar } from '../../../../components/Navbar'

import { Explore } from '../../../Explore'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    return (
        <Styled.Container>
            <Navbar />
            <Styled.FlexWrapper>
                <Styled.SidebarWrapper>
                    <Sidebar />
                </Styled.SidebarWrapper>
                <Styled.MainWrapper>
                    <Switch>
                        <Route exact path="/explore/for-you" component={Explore} />
                    </Switch>
                </Styled.MainWrapper>
            </Styled.FlexWrapper>
        </Styled.Container>
    )
}

export default LayoutExplore
