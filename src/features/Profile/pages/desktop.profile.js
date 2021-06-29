import styled from 'styled-components'

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
    return (
        <>
            <WholePageContainer>
                <CenteredContainer>
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
