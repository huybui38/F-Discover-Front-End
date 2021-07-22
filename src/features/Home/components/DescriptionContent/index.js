import React from 'react'

import PropTypes from 'prop-types'

import { Wrapper, Content } from './DescriptionContent.elements'

const propType = {
    content: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
}

export const DescriptionContent = ({ content, fontSize, fontWeight }) => {
    return (
        <Wrapper>
            <Content fontSize={fontSize} fontWeight={fontWeight}>
                {content}
            </Content>
        </Wrapper>
    )
}

DescriptionContent.propTypes = propType
export default DescriptionContent
