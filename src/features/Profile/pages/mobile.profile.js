import { useSelector } from 'react-redux'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import Baseline from '../../../components/Baseline'
import { CenterFlexContainer } from '../../../components/Container/FlexContainer'
import { Loading } from '../../../components/Loading'
import BioProfile from '../components/BioProfile'
import { RightWrapper, WholePageContainer } from '../components/Container'
import Cover from '../components/Cover'
import OwnPosts from '../components/OwnPosts'
import ProfileDescription from '../components/ProfileDescription'

const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TranslateContainer = styled(CenterFlexContainer)`
    flex-direction: column;
    /* transform: translateY(-7em); */
    position: absolute;
    max-width: 1200px;
    top: 250px;
    left: 0;
    ${down('lg')} {
        width: calc(100% - 2px);
    }
`
const GapWrapper = styled.div`
    padding: 2rem;
`

export default function Mobile() {
    const isLoading = useSelector((state) => state.profile.isLoading)
    return (
        <>
            <MobileContainer>
                <Loading isLoading={isLoading} />
                <Cover />
                <TranslateContainer>
                    <BioProfile />
                    <GapWrapper>
                        <ProfileDescription />
                    </GapWrapper>
                    <OwnPosts />
                </TranslateContainer>
            </MobileContainer>
        </>
    )
}
