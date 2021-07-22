import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import defaultAvt from '../../assets/default_avatar.png'

const propTypes = {
    src: PropTypes.string,
    href: PropTypes.string,
}

const AvatarWrapper = styled.a`
    & > img {
        width: ${(props) => props.width || '32px'};
        height: ${(props) => props.width || '32px'};
        border-radius: 50%;
    }
`
export const Avatar = ({ src, href, ...others }) => {
    return (
        <AvatarWrapper href={href ? href : null} {...others}>
            <img
                loading="lazy"
                src={src}
                onError={(e) => ((e.target.onerror = null), (e.target.src = defaultAvt))}
            />
        </AvatarWrapper>
    )
}

Avatar.propTypes = propTypes

export default Avatar
