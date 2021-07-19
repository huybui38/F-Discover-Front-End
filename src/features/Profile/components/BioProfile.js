import { useEffect, useRef, useState } from 'react'

import propTypes from 'prop-types'
import { RiUploadCloud2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Button, PrimaryButton } from '../../../components/Button/'
import { EmptyIconButton } from '../../../components/ButtonWithIcons'
import UpdateVideoModal from '../../../components/Modal/UploadVideoModal'
import { Typography } from '../../../components/Typography'

import AvatarUploadIcon from '../../../assets/avatar-upload-icon.png'
import DefaultAvatar from '../../../assets/default_avatar.jpg'
import { Error, Success } from '../../../helpers/notify'
import useModal from '../../../hooks/useModal'
import { followUser } from '../../../services/user/profile'
import apiCaller from '../../../utils/apiCaller'
import { signOut } from '../../Login/loginSlice'
import {
    fetchPosts,
    fetchUserBio,
    getBioFetchStatus,
    getBioProfile,
    setAvatar,
    setFollowStatus,
    setLoading,
} from '../profileSlice'
import UpdateProfileModal from './UpdateProfileModal'

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
const StatisticalDetailLabel = styled(Typography)`
    display: block;
    font-weight: 300;
    color: #bfbebe;
`
const StatisticalDetailNumber = styled(Typography)`
    color: #000000;
    font-weight: 700;
    display: block;
    text-align: center;
    padding-bottom: 3px;
`
const FollowButton = styled(PrimaryButton)`
    border-radius: 25px;
    width: 9rem;
    height: 3rem;
    font-size: 1.25rem;
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
    right: 2rem;
    bottom: -0.3rem;
    background-color: white;
    border-radius: 50%;
    display: inline-flex;
    padding: 5px;
`
const StyledInputFile = styled.input``
function Avatar({ src, isSelf }) {
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
            {isSelf ? (
                <StyledUpLoadAvatar onClick={uploadClickHandler}>
                    <img src={AvatarUploadIcon} size={25} color="white" />
                    <StyledInputFile
                        type="file"
                        style={{ display: 'none' }}
                        ref={uploadAvtRef}
                        accept=".jpeg,.png,.jpg"
                        onChange={uploadHandler}
                    />
                </StyledUpLoadAvatar>
            ) : (
                ''
            )}
        </div>
    )
}
Avatar.propTypes = {
    src: propTypes.string,
    isSelf: propTypes.bool,
}
export default function BioProfile() {
    const dispatch = useDispatch()
    const bioFetchStatus = useSelector(getBioFetchStatus)
    const userID = useSelector((state) => state.auth.userID)
    const isGuestView = useSelector((state) => state.profile.isGuestView)
    let { profileID } = useParams()
    const details = useSelector(getBioProfile)
    // const selfDetails = useSelector((state) => state.profile.selfBioDetail)
    const posts = useSelector((state) => state.profile.posts)
    let history = useHistory()

    useEffect(() => {
        if (bioFetchStatus === 'idle') {
            let target = !profileID ? null : userID == profileID ? null : profileID
            dispatch(fetchUserBio(target))
                .unwrap()
                .catch((rejectedValueOrSerializedError) => {
                    if (rejectedValueOrSerializedError.code === 404) {
                        history.push('/explore')
                    }
                })
        }
    }, [bioFetchStatus, dispatch, history, profileID, userID])
    // useEffect(() => {}, [profileID, userID, history])
    const [isShowing, toggle] = useModal(false)
    const [isShowing2, toggle2] = useModal(false)
    const handlerUpdate = () => {
        toggle()
    }
    const handleUploadVideoModal = () => {
        toggle2()
    }
    const onUploadPostSuccess = () => {
        dispatch(fetchPosts(profileID ? profileID : userID))
    }
    const handleFollowBtn = () => {
        if (!profileID || !details) return
        dispatch(setLoading(true))
        followUser(profileID, details?.followStatus == 0)
            .then((response) => {
                dispatch(setFollowStatus(details?.followStatus == 0 ? 1 : 0))
            })
            .catch((ex) => {
                if (ex.code === 401) {
                    dispatch(signOut())
                    history.push('/login')
                }
            })
            .finally(() => dispatch(setLoading(false)))
    }
    const FollowButtons = () => {
        if (details?.followStatus == -1) {
            return ''
        } else {
            return (
                <FollowButton center onClick={handleFollowBtn}>
                    {details?.followStatus == 0 ? 'Follow' : 'Unfollow'}
                </FollowButton>
            )
        }
    }
    return (
        <Wrapper>
            <UpdateProfileModal isShowing={isShowing} toggle={toggle} />
            <UpdateVideoModal
                isShowing={isShowing2}
                toggle={toggle2}
                onSuccess={onUploadPostSuccess}
            />
            <Avatar
                src={details?.avatarUrl ? details?.avatarUrl : DefaultAvatar}
                isSelf={!isGuestView}
            />
            <StyledName>{details?.name}</StyledName>
            <StyledJob>{details?.job}</StyledJob>
            {!isGuestView ? (
                <>
                    <FollowButton center onClick={handlerUpdate}>
                        Update
                    </FollowButton>
                    <FollowButton center onClick={handleUploadVideoModal}>
                        Up post
                    </FollowButton>
                </>
            ) : (
                <FollowButtons />
            )}

            <StatisticalBar>
                <StatisticalSection
                    name="post"
                    value={posts?.length ? posts?.length : 0}
                ></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection
                    name="following"
                    value={details?.following}
                ></StatisticalSection>
                <SeparatedDetailLine />
                <StatisticalSection
                    name="followers"
                    value={details?.followers}
                ></StatisticalSection>
            </StatisticalBar>
        </Wrapper>
    )
}
