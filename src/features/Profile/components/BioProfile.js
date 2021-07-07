import { useEffect, useRef, useState } from 'react'

import propTypes from 'prop-types'
import { RiUploadCloud2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button } from '../../../components/Button/'
import { EmptyIconButton } from '../../../components/ButtonWithIcons'
import { Loading } from '../../../components/Loading'
import { Typography } from '../../../components/Typography'

import DemoAvatarProfile from '../../../assets/demo_avatar_profile.png'
import { Error, Success } from '../../../helpers/notify'
import apiCaller from '../../../utils/apiCaller'
import { fetchUserBio, setAvatar, setLoading } from '../profileSlice'

const Wrapper = styled.div`
    ${up('xl')} {
        width: 20%;
    }
    ${down('lg')} {
        width: 250px;
        font-size: 10px;
    }
    width: 275px;
    height: 315px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StatisticalBar = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #bfbebe;
`
const BorderAvatar = styled.img`
    position: relative;
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

const StatisticalSection = function (props) {
    return (
        <StatisticalDetail>
            <StatisticalDetailNumber>{props.value}</StatisticalDetailNumber>
            <StatisticalDetailLabel>{props.name}</StatisticalDetailLabel>
        </StatisticalDetail>
    )
}
StatisticalSection.propTypes = {
    value: propTypes.number,
    name: propTypes.string,
}
const SeparatedDetailLine = styled.div`
    border-left: 2px solid #bfbebe;
    height: 75%;
`
const StyledUpLoadAvatar = styled(EmptyIconButton)`
    position: absolute;
    right: 3rem;
    bottom: 0;
`
const StyledInputFile = styled.input``
function Avatar({ src }) {
    const dispatch = useDispatch()
    const uploadAvtRef = useRef(null)
    const uploadClickHandler = (e) => {
        if (uploadAvtRef.current) {
            uploadAvtRef.current.click()
        }
    }
    const uploadHandler = (e) => {
        if (e.target.files.length === 0) {
            return
        }
        const targetImg = e.target.files[0]
        const formData = new FormData()
        formData.append('avatar', targetImg)
        console.log(targetImg)
        dispatch(setLoading(true))
        apiCaller
            .postFormData('/user/upload-avatar', formData)
            .then((result) => {
                dispatch(setAvatar(result.data.avatarUrl))
                Success('Cập nhật thành công')
                dispatch(setLoading(false))
            })
            .catch((error) => {
                console.log(error)
                Error('Cập nhật thất bại')
                dispatch(setLoading(false))
            })
    }
    return (
        <div style={{ position: 'relative' }}>
            <BorderAvatar src={src}></BorderAvatar>
            <StyledUpLoadAvatar onClick={uploadClickHandler}>
                <RiUploadCloud2Line size={25} />
                <StyledInputFile
                    type="file"
                    style={{ display: 'none' }}
                    ref={uploadAvtRef}
                    accept=".jpeg,.png,.jpg"
                    onChange={uploadHandler}
                />
            </StyledUpLoadAvatar>
        </div>
    )
}
Avatar.propTypes = {
    src: propTypes.string,
}
export default function BioProfile() {
    const dispatch = useDispatch()
    const bioFetchStatus = useSelector((state) => state.profile.status)
    const details = useSelector((state) => state.profile.bioDetail)
    useEffect(() => {
        if (bioFetchStatus === 'idle') {
            dispatch(fetchUserBio())
        }
    }, [bioFetchStatus, dispatch])
    return (
        <Wrapper>
            <Avatar src={DemoAvatarProfile} />
            <StyledName>{details.name}</StyledName>
            <StyledJob>{details.job}</StyledJob>
            <FollowButton center>follow</FollowButton>
            <StatisticalBar>
                <StatisticalSection name="post" value={1}></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection name="following" value={details.following}></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection name="followers" value={details.followers}></StatisticalSection>
            </StatisticalBar>
        </Wrapper>
    )
}
