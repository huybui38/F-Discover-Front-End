import React from 'react'

import { ButtonWithIcons } from '../ButtonWithIcons'

export const ButtonFollow = () => {
    return (
        <ButtonWithIcons
            width="80px"
            padding="8px"
            background_color="#59ABAE"
            text_color="white"
            animation={true}
            onClick={() => console.log('concu')}
        >
            Follow
        </ButtonWithIcons>
    )
}

export default ButtonFollow
