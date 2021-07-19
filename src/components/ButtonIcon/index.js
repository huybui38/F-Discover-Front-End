import React from 'react'

import PropTypes from 'prop-types'

import { Button } from './ButtonIcon.elements'

const propType = {
    icon: PropTypes.element,
}

export const ButtonIcon = (props) => {
    const { icon, ...rest } = props
    return <Button {...rest}>{icon}</Button>
}

ButtonIcon.propTypes = propType

export default ButtonIcon
