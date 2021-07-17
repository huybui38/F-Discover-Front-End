/* eslint-disable react/prop-types */
import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Name = styled.div`
    margin: 0;
    & > a {
        font-size: ${(props) => props.fontSize || '14px'};
        color: #000000;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`
export const AuthorName = ({ name, authorId, ...others }) => {
    console.log('authorId: ', authorId)
    return (
        <Name {...others}>
            <Link to={`/profile/${authorId}`}>
                <b>{name}</b>
            </Link>
        </Name>
    )
}

export default AuthorName
