import React from 'react'

import { FaHeart, FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa'

import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const ActionsBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.Actions>
                <Styled.ActionItem>
                    <ButtonIcon icon={<FaHeart style={{ width: '28px', height: '28px' }} />} />
                    <span>100k</span>
                </Styled.ActionItem>
                <Styled.ActionItem>
                    <ButtonIcon
                        icon={<FaRegCommentAlt style={{ width: '28px', height: '28px' }} />}
                    />
                    <span>70</span>
                </Styled.ActionItem>
                <Styled.ActionItem>
                    <ButtonIcon
                        icon={<FaRegShareSquare style={{ width: '28px', height: '28px' }} />}
                    />
                    <span>30</span>
                </Styled.ActionItem>
            </Styled.Actions>

            <Styled.Seen>
                <b>n.quyen30</b> and <b>9,966 others</b> have seen
            </Styled.Seen>
        </Styled.Wrapper>
    )
}

export default ActionsBar
