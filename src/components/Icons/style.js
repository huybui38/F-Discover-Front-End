import styled from 'styled-components'

export function makeStyleIcon(Component, props) {
    const StyledIcon = styled(Component)`
        width: ${props.width || 'auto'};
        height: ${props.height || 'auto'};
    `
    return <StyledIcon></StyledIcon>
}
