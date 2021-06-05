import { down } from 'styled-breakpoints'
import styled from 'styled-components'

import { CenterFlexContainer } from '../../../components/Container/FlexContainer'

export const RightForm = styled(CenterFlexContainer)`
    width: 50%;
    flex-direction: column;
    padding: 30px 11.5%;
    box-sizing: border-box;
    justify-content: unset;
    ${down('sm')} {
        width: 100%;
        justify-content: center;
    }
`
