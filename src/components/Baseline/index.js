import React from 'react'

import styled from 'styled-components'

const Line = styled.hr`
    width: ${(props) => props.width || '100%'};
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${(props) => props.color || '#050505'};
`

export const Baseline = (props) => {
    return <Line {...props} />
}

export default Baseline
