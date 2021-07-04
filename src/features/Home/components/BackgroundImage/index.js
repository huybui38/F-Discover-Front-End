import React from 'react'

import PropTypes from 'prop-types'

import { Card, CardImage } from './BackgroundImage.elements'

export const BackgroundImage = ({ src }) => {
    return (
        <Card>
            <CardImage src={src.type} />
        </Card>
    )
}

BackgroundImage.propTypes = {
    src: PropTypes.any,
}

export default BackgroundImage
