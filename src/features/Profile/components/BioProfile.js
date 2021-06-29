import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button } from '../../../components/Button/'
import { Typography } from '../../../components/Typography'

import DemoAvatarProfile from '../../../assets/demo_avatar_profile.png'

const Wrapper = styled.div`
    ${up('xl')} {
        width: 20%;
    }
    ${down('lg')} {
        width: 250px;
        /* height: 315px; */
        font-size: 10px;
    }
    width: 275px;
    height: 315px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`
const StatisticalBar = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #bfbebe;
`
const BorderAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`
const StyledName = styled(Typography)`
    font-size: 2em;
    font-weight: 600;
    margin: 10px;
`
const StyledJob = styled(Typography)`
    color: #bfbebe;
    margin-bottom: 10px;
`
const StatisticalDetail = styled.div`
    padding: 1.2rem;
`
const StatisticalDetailLabel = styled.div`
    font-weight: 300;

    color: #bfbebe;
`
const StatisticalDetailNumber = styled.div`
    font-size: 14;
    color: #000000;
    font-weight: 700;
    padding-bottom: 3px;
`
const FollowButton = styled(Button)`
    border-radius: 25px;
    width: 7rem;
    height: 2.5rem;
    font-size: 1.25rem;
    background-color: rgba(1, 179, 167, 1);
    margin: 10px;
    color: #ffffff;
`

const StatisticalSection = function () {
    return (
        <StatisticalDetail>
            <StatisticalDetailNumber>1442</StatisticalDetailNumber>
            <StatisticalDetailLabel>post</StatisticalDetailLabel>
        </StatisticalDetail>
    )
}
const SeparatedDetailLine = styled.div`
    border-left: 2px solid #bfbebe;
    height: 75%;
`

export default function BioProfile() {
    return (
        <Wrapper>
            <BorderAvatar src={DemoAvatarProfile} />
            <StyledName>Thu Trang</StyledName>
            <StyledJob>CAVA</StyledJob>
            <FollowButton center>follow</FollowButton>
            <StatisticalBar>
                <StatisticalSection></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection></StatisticalSection>
            </StatisticalBar>
        </Wrapper>
    )
}
