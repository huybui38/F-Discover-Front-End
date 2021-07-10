import { useState } from 'react'

import PropTypes from 'prop-types'

import TextField from './TextField'

const types = {
    handler: PropTypes.func,
    value: PropTypes.any,
    label: PropTypes.string,
}
const WrapperInput = (Component, props) => {
    const { handler, value } = props
    return <Component {...props} value={value} handleChange={handler}></Component>
}
WrapperInput.propTypes = types
const TextFieldInput = (props) => WrapperInput(TextField, props)
TextFieldInput.propTypes = types

export { TextFieldInput }
