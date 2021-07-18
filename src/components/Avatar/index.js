import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
    src: PropTypes.string,
}

const AvatarWrapper = styled.a`
    & > img {
        width: ${(props) => props.width || '32px'};
        height: ${(props) => props.width || '32px'};
        border-radius: 50%;
    }
`
export const Avatar = ({ src, ...others }) => {
    return (
        <AvatarWrapper href={src} {...others}>
            <img
                loading="lazy"
                src={src}
                onError={(e) => (
                    (e.target.onerror = null),
                    (e.target.src =
                        'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg')
                )}
            />
        </AvatarWrapper>
    )
}

Avatar.propTypes = propTypes

export default Avatar
