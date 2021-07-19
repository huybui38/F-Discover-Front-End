import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Loading } from '../../../components/Loading'
import BioProfile from '../components/BioProfile'
import { CenteredContainer, RightWrapper, WholePageContainer } from '../components/Container'
import Cover from '../components/Cover'
import OwnPosts from '../components/OwnPosts'
import ProfileDescription from '../components/ProfileDescription'

const RightViewContainer = styled.div`
    display: flex;
    padding-top: 2rem;
`
export default function Desktop() {
    const isLoading = useSelector((state) => state.profile.isLoading)

    return (
        <>
            <WholePageContainer>
                <CenteredContainer>
                    <Loading isLoading={isLoading} />
                    <BioProfile></BioProfile>
                    <RightWrapper>
                        <Cover></Cover>
                        <RightViewContainer>
                            <OwnPosts />
                            <ProfileDescription />
                        </RightViewContainer>
                    </RightWrapper>
                </CenteredContainer>
            </WholePageContainer>
        </>
    )
}
