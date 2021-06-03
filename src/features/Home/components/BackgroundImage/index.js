import React from 'react'

import PropTypes from 'prop-types'

import { Card, CardImage } from './BackgroundImage.elements'

export const BackgroudImage = ({ src }) => {
    return (
        <Card>
            <CardImage src={src} />
        </Card>
    )
}

BackgroudImage.propTypes = {
    src: PropTypes.string,
}

export default BackgroudImage
