import React from 'react'

import {
    FaHeart,
    FaRegHeart,
    FaRegCommentAlt,
    FaRegCopy,
    FaRegShareSquare,
    FaCheck,
} from 'react-icons/fa'

import { Button } from '../../../../components/Button'
import { ButtonIcon } from '../../../../components/ButtonIcon'

import * as Styled from './styled.elements'

export const ActionsBar = () => {
    return (
        <Styled.Wrapper>
            <Styled.Actions>
                <Styled.ActionItem>
                    {/* <ButtonIcon
                        bgrColor="rgba(255,63,52,0.1)"
                        icon={
                            <FaHeart style={{ width: '28px', height: '28px', color: '#ff3f34' }} />
                        }
                    /> */}
                    <ButtonIcon icon={<FaRegHeart style={{ width: '28px', height: '28px' }} />} />
                    <span>100k</span>
                </Styled.ActionItem>
                <Styled.ActionItem>
                    <Styled.ShareWrapper>
                        <ButtonIcon
                            icon={<FaRegCommentAlt style={{ width: '28px', height: '28px' }} />}
                        />
                        <Styled.ShareMethod>
                            <Styled.UrlShare
                                value="www.facebook.com/profile.php?id=100015055038244"
                                readOnly
                                type="url"
                            />
                            <Styled.BtnCopy>
                                <ButtonIcon
                                    icon={<FaRegCopy style={{ width: '14px', height: '14px' }} />}
                                />
                                {/* <Styled.CopyChecked>
                                    <FaCheck />
                                </Styled.CopyChecked> */}
                            </Styled.BtnCopy>
                        </Styled.ShareMethod>
                    </Styled.ShareWrapper>
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
