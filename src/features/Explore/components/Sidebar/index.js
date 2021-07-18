import React, { useEffect, useState } from 'react'

import { FaHome, FaCaravan, FaUserFriends } from 'react-icons/fa'
import { ThemeConsumer } from 'styled-components'

import { Baseline } from '../../../../components/Baseline'

import { Error } from '../../../../helpers/notify'
import { getSuggestUser } from '../../../../services/api/userApi'
import SuggestedUserItem from '../SuggestedUserItem'
import * as Styled from './styled.elements'

const listOption = [
    { icon: <FaHome />, label: 'For you', to: '/explore/for-you' },
    { icon: <FaUserFriends />, label: 'Following', to: '/explore/following' },
    { icon: <FaCaravan />, label: 'Suggest', to: '/explore/suggest' },
]

export const Sidebar = () => {
    const [listSuggestUser, setListSuggestUser] = useState([])
    const [numberSuggestedUser, setNumberSuggestedUser] = useState(5)

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
        <Styled.Wrapper>
            <Styled.ListOption>
                {listOption.map((item, index) => (
                    <Styled.OptionItem key={index} to={item.to}>
                        {item.icon}
                        <span>{item.label}</span>
                    </Styled.OptionItem>
                ))}
            </Styled.ListOption>
            <Baseline width="95%" />
            <Styled.SuggestUserWrapper>
                <Styled.TitleList>Suggest accounts</Styled.TitleList>
                <Styled.UserSuggestList>
                    {listSuggestUser &&
                        listSuggestUser.map((user) => (
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

export default Sidebar
