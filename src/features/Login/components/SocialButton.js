import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const SocialButton = styled(Button)`
    margin: 2px;
    /* justify-content: flex-start; */
    padding: 20px;
    height: 40px;
    position: relative;
    & svg {
        position: absolute;
        left: 20px;
    }
`
