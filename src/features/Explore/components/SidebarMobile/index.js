import React, { useEffect, useState } from 'react'

import { FaHome, FaUserFriends, FaCaravan } from 'react-icons/fa'

import { Baseline } from '../../../../components/Baseline'

import { getSuggestUser } from '../../../../services/api/userApi'
import SuggestedUserItem from '../SuggestedUserItem'
import * as Styled from './Sidebar.elements'

const listOption = [
    { id: 0, icon: <FaHome />, label: 'For you', to: '/explore/for-you' },
    { id: 1, icon: <FaUserFriends />, label: 'Following', to: '/explore/following' },
    { id: 2, icon: <FaCaravan />, label: 'Suggest', to: '/explore/suggest/all' },
]

export const SidebarMobile = (props) => {
    const [listSuggestUser, setListSuggestUser] = useState([])
    const [numberSuggestedUser, setNumberSuggestedUser] = useState(5)
    const [choice, setChoice] = useState(0)

    useEffect(() => {
        getSuggestUser(numberSuggestedUser)
            .then((res) => {
                if (res.message === 'Success') {
                    setListSuggestUser(res.data)
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
            <Baseline width="95%" />
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
