import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Styled from './styled.elements'

const propType = {
    width: PropTypes.string,
    padding: PropTypes.string,
    background_color: PropTypes.string,
    text_color: PropTypes.string,
    animation: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.any,
}

export const ButtonBase = (props) => {
    const { children, ...rest } = props
    return <Styled.Button {...rest}>{children}</Styled.Button>
}

ButtonBase.propTypes = propType
export default ButtonBase
