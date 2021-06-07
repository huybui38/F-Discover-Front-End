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
        <Wrapper className="desription-content__wrapper">
            <Content
                className="decription-content__main"
                fontSize={fontSize}
                fontWeight={fontWeight}
            >
                {content}
            </Content>
        </Wrapper>
    )
}

DescriptionContent.propTypes = propType
export default DescriptionContent
