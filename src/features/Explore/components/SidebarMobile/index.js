import React, { useEffect, useState } from 'react'

import { FaHome, FaUserFriends, FaCaravan } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Baseline } from '../../../../components/Baseline'

import Logo from '../../../../assets/img/logo.png'
import LogoTitle from '../../../../assets/img/logoTitle.png'
import { getSuggestUser } from '../../../../services/api/userApi'
import { authSelector } from '../../../Login/loginSlice'
import { setMapFollow } from '../../exploreSlice'
import SuggestedUserItem from '../SuggestedUserItem'
import * as Styled from './Sidebar.elements'

export const SidebarMobile = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    let isAuthenticated = useSelector(authSelector)

    const listOption = [
        { id: 0, icon: <FaHome />, label: 'For you', to: '/explore/for-you' },
        {
            id: 1,
            icon: <FaUserFriends />,
            label: 'Following',
            to: isAuthenticated ? '/explore/following' : '/home',
        },
        {
            id: 2,
            icon: <FaCaravan />,
            label: 'Suggest',
            to: isAuthenticated ? '/explore/suggest/all' : '/home',
        },
    ]

    const [listSuggestUser, setListSuggestUser] = useState([])
    const [numberSuggestedUser, setNumberSuggestedUser] = useState(5)
    const [choice, setChoice] = useState(0)

    useEffect(() => {
        getSuggestUser(numberSuggestedUser)
            .then((res) => {
                if (res.message === 'Success') {
                    setListSuggestUser(res.data)
                    if (res.data) {
                        res.data.forEach((user) =>
                            dispatch(setMapFollow({ id: user.id, status: user.followStatus }))
                        )
                    }
                }
            })
            .catch((e) => {
                Error(e.message)
            })
    }, [numberSuggestedUser])

    const handleActionShow = () => {
        if (numberSuggestedUser === 5) {
            setNumberSuggestedUser(30)
        } else {
            setNumberSuggestedUser(5)
        }
    }

    return (
        <Styled.Wrapper {...props}>
            <Styled.LogoWrapper onClick={() => history.push('/home')}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="logo" src={Logo} alt="logo" />
                    <img className="logoTitle" src={LogoTitle} alt="logo title" />
                </div>
            </Styled.LogoWrapper>
            <Styled.SidebarList {...props}>
                {listOption.map((item, index) => (
                    <Styled.SidebarItem
                        key={index}
                        className={item.id == choice ? 'sidebar__item--active' : null}
                        onClick={() => setChoice(index)}
                        to={item.to}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Styled.SidebarItem>
                ))}
            </Styled.SidebarList>
            <Baseline width="100%" />
            <Styled.SuggestUserWrapper>
                <Styled.TitleList>Suggest accounts</Styled.TitleList>
                <Styled.UserSuggestList>
                    {listSuggestUser.map((user) => (
                        <SuggestedUserItem key={user.id} user={user} />
                    ))}
                </Styled.UserSuggestList>
                <Styled.Action onClick={handleActionShow}>
                    {numberSuggestedUser === 5 ? 'Show more suggest' : 'Hidden away'}
                </Styled.Action>
            </Styled.SuggestUserWrapper>
        </Styled.Wrapper>
    )
}
SidebarMobile.propTypes = {}

export default SidebarMobile
