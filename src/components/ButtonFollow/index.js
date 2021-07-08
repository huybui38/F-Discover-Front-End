/* eslint-disable react/prop-types */
import React from 'react'

import { ButtonWithIcons } from '../ButtonWithIcons'

export const ButtonFollow = ({ isFollowing, handleFollow }) => {
    return (
        <ButtonWithIcons
            width="80px"
            padding="8px"
            background_color={isFollowing ? 'white' : '#59ABAE'}
            text_color={isFollowing ? '#59ABAE' : 'white'}
            border="1px solid #59ABAE"
            animation={true}
            onClick={handleFollow}
        >
            <b> {isFollowing ? 'Following' : 'Follow'}</b>
        </ButtonWithIcons>
    )
}

export default ButtonFollow
