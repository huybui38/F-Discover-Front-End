import { useState } from 'react'

import PropTypes from 'prop-types'

import TextField from './TextField'

const WrapperInput = (Component, props) => {
    const { handler, value } = props
    return <Component {...props} value={value} handleChange={handler}></Component>
}
WrapperInput.propTypes = {
    handler: PropTypes.func,
    value: PropTypes.any,
}
const TextFieldInput = (props) => WrapperInput(TextField, props)
export { TextFieldInput }
